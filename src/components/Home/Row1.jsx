import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import apple from "./apple.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import goIcon from "../../assets/images/drop.png";
import PosterSlider from "./PosterSlider";

const categories = [
  {
    name: "homeSections.row1.col1.0",
    link: "/allProducts",
    subCategories: ["Sub 1", "Sub 2", "Sub 3"],
  },
  {
    name: "homeSections.row1.col1.1",
    link: "/allProducts",
    subCategories: ["Sub A", "Sub B"],
  },
  {
    name: "homeSections.row1.col1.2",
    link: "/allProducts",
    subCategories: ["Sub X", "Sub Y", "Sub Z"],
  },
];

const Row1 = () => {
  const dealItem = ITEMS.find(
    (item) => item.title === i18n.t("itemsArray.17.title")
  );
  const categories = useSelector((state) => state.data.categories);
  const [hoveredIndex, setHoveredIndex] = useState(null);

return (<PosterSlider/>)
  return (
    <div className="hidden md:block mx-4 sm:mx-6 xl:mx-24 md:mx-8 sm:mt-0 md:mt-10 lg:mt-12 xl:mt-16">
      <div
        className="flex xl:my-0  xl:gap-16 items-center justify-around flex-col-reverse 
        md:flex-row  md:h-96 bg-black text-white w-full "
      >
        <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">

          <h2 className="text-2xl   lg:text-2xl xl:text-4xl leading-10">
            {i18n.t("homeSections.row1.col2.1")}
          </h2>
          <Link to="/allProducts">
            <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2  focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
              <h2 className="text-lg lg:text-lg xl:text-xl leading-10">
            {i18n.t("homeSections.row1.col2.2")}
          </h2>
              <svg
                className="mt-1 "
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.5 12H20M20 12L13 5M20 12L13 19"
                  stroke="#FAFAFA"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className=" relative overflow-hidden mt-4 ">
          <div className="transition-transform duration-300 transform hover:translate-y-1 hover:scale-105">
            <Link to="/allProducts">
              <img
                src={dealItem.imageSrc}
                alt={dealItem.title}
                loading="lazy"
                className="transition-transform duration-300 transform translate-y-4 hover:translate-y-0 hover:scale-102 hover:motion-safe:animate-pulse"
              />
            </Link>
          </div>
        </div>

        <div className=" hidden xl:block md:w-1/4 gap-5 items-center md:items-start justify-center md:mr-4">
   
          <h2 className="text-base  md:text-lg lg:text-xl xl:text-2xl leading-10">
            {i18n.t("sfd behrieqat hrdisjgnbswrf itghbqaet sretgn rfwtbugbsg bteb etbethb betitbg  bethe gtbet wt w btget  ")}
          </h2>
          
        </div>
      </div>
    </div>
  );

};

export default Row1;
