/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import i18n from "./LangConfig";
import PropTypes from "prop-types";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WishlistIcon from "./WishlistIcon";
import AddToCart from "./AddToCart";
import RatingComp from "./Rating";
import { formatUrl } from "../../../common/functions.jsX";

const FlashSaleItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageURI, setImageURI] = useState(null);
  const convertBase64ToImageUri = ({ base64, type }) => {
    // console.log(type)
    const base64Data = base64.split(",")[1] || base64;

    try {
      const byteCharacters = atob(base64Data);
      const byteArrays = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays[i] = byteCharacters.charCodeAt(i);
      }

      const blob = new Blob([byteArrays], { type });
      return URL.createObjectURL(blob);
    } catch (error) {
      console.error("Invalid Base64 string:", error);
      return null;
    }
  };
  useEffect(() => {
    const imageSRC = item.images[item.defaultProductOption.imageId - 1];
    setImageURI(convertBase64ToImageUri(imageSRC));
    // const storedQuantity = JSON.parse(localStorage.getItem("cartItems"))?.find(
    //   (anItem) => anItem.id == item.id
    // )?.quantity;

    // if (storedQuantity === 0) {
    //   item.quantity = 0;
    // } else {
    //   item.quantity = storedQuantity || 0;
    // }
  }, []);

  const { handleAddToCart, isInCart } = AddToCart({ item }); // Use AddToCart component to get handleAddToCart and isInCart

  // Function to render stars
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      // Determine star color based on index and item.stars
      const starColor = i < item.rating ? "#FFAD33" : "#D1D5DB"; // Orange if index < item.stars, gray otherwise
      stars.push(
        <svg
          key={i}
          width="16"
          height="15"
          viewBox="0 0 16 15"
          fill={starColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14.673 7.17173C15.7437 6.36184 15.1709 4.65517 13.8284 4.65517H11.3992C10.7853 4.65517 10.243 4.25521 10.0617 3.66868L9.33754 1.32637C8.9309 0.0110567 7.0691 0.0110564 6.66246 1.32637L5.93832 3.66868C5.75699 4.25521 5.21469 4.65517 4.60078 4.65517H2.12961C0.791419 4.65517 0.215919 6.35274 1.27822 7.16654L3.39469 8.78792C3.85885 9.1435 4.05314 9.75008 3.88196 10.3092L3.11296 12.8207C2.71416 14.1232 4.22167 15.1704 5.30301 14.342L7.14861 12.9281C7.65097 12.5432 8.34903 12.5432 8.85139 12.9281L10.6807 14.3295C11.7636 15.159 13.2725 14.1079 12.8696 12.8046L12.09 10.2827C11.9159 9.71975 12.113 9.10809 12.5829 8.75263L14.673 7.17173Z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="relative md:mx-4 mx-2 ">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative rounded flex items-center justify-center bg-zinc-100 w-[270px] h-44 sm:h-52 md:h-60 lg:h-64 transform transition-transform duration-300 hover:scale-105 focus:outline-none hover:-translate-y-1 overflow-hidden"
      >
        {isHovered && (
          <button
            onClick={handleAddToCart}
            className={`z-10 absolute bottom-0 left-0 right-0 bg-black text-white py-2 px-4 duration-300 hover:bg-gray-800 focus:outline-none ${
              isInCart && "bg-red-500"
            }`}
          >
            {isInCart ? i18n.t("removeFromCart") : i18n.t("addToCart")}
          </button>
        )}
        {item.defaultProductOption.discount && (
          <div className="absolute top-0 left-0 bg-red-500 text-white py-1 px-3 m-2 rounded overflow-hidden">
            -{item.defaultProductOption.discount}%
          </div>
        )}
        {item.state && (
          <div className="absolute top-0 left-0 bg-green text-white py-1 px-3 m-2 rounded">
            {i18n.t("new")}
          </div>
        )}
        <Link
          to={{ pathname: `/p/${formatUrl(item.id, item.title)}` }}
          key={item.id}
        >
          <img
            loading="lazy"
            src={imageURI}
            alt={item.title}
            className=" max-h-40 sm:max-h-44 md:max-h-52 lg:max-h-56   w-full  object-contain rounded"
          />
        </Link>
        <WishlistIcon selectedProduct={item} style="absolute top-3 right-3" />
      </div>

      <div className="flex md:items-start items-center flex-col ">
        <h3 className="text-lg font-base mt-4">{item.title}</h3>
        <p className="text-red-500  text-base font-semibold line-clamp-2">
          ${item.defaultProductOption.price}
          {item.defaultProductOption.discount && (
            <span className="ml-2 text-gray-500 text-xs font-semibold line-through">
              ${item.defaultProductOption.discountedPrice}
            </span>
          )}
        </p>
        <span>
          <div className="flex mt-1 text-gray-500 text-sm font-semibold gap-2 items-center ">
            {renderStars()} <span>({item.noOfRatings})</span>
            {/* <RatingComp
              text={i18n.t("productPage.review")}
              variant="primary"
              item={item}
            /> */}
          </div>
        </span>
      </div>
    </div>
  );
};

// FlashSaleItem.propTypes = {
//   item: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     imageSrc: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     stars: PropTypes.number.isRequired,
//     rates: PropTypes.number.isRequired,
//     discount: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
//   }).isRequired,
// };

export default FlashSaleItem;
