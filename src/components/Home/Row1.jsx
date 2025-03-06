import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { ITEMS } from "../common/functions/items";
import apple from "./apple.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import goIcon from "../../assets/images/drop.png";

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

  return (
    <div className=" xl:mx-12 md:mx-8 ">
      {/* Categories */}
      <div className="text-gray-700  flex-shrink-0 hidden md:block">
        <nav className="py-0">
          <ul className="flex flex-row sm:px-0 md:px-4 lg:px-16 xl:px-32,  justify-around">
            {/* Add this class */}
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <li className="flex flex-row items-center px-2 py-1 text-base md:text-xs lg:text-sm cursor-pointer underline underline-offset-2 ease-in-out duration-300 transform hover:-translate-y-1">
                  <Link to={category.link}>{i18n.t(category.name)}</Link>
                  <img
                    src={goIcon}
                    alt="icon"
                    className="w-2 h-2 md:h-3 md:w-3 lg:h-4 lg:w-4 ml-2"
                  />
                </li>
                {hoveredIndex === index && (
                  <div className="pt-0.5 absolute left-2 md:w-40 lg:w-48">
                    <ul className="overflow-hidden bg-white opacity-100 transition-opacity duration-300 ease-in-out rounded-md border border-gray-200 shadow-md flex flex-col items-center">
                      {category.subCategories.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-1.5 w-full text-base md:text-xs lg:text-sm cursor-pointer hover:text-white hover:bg-red-500 transition duration-200 border-b border-gray-200 last:border-none"
                        >
                          {sub.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </ul>
        </nav>
      </div>

      {/* Vertical Line */}
      {/* <div className="border-l-4 border-gray-100 hidden md:block"></div> */}

      {/* Main Content */}
      {/* <div
        className="flex xl:my-0 ml-6 xl:gap-16 items-center jusify-between flex-col-reverse 
      md:flex-row  md:h-96 bg-black text-white w-full "
      >
        <div className="flex flex-col md:max-w-72 gap-5 items-center md:items-start justify-center md:ml-16">
          <div className="max-w-72 flex jusify-center items-center gap-6">
            <img src={apple} alt="apple" />
            <h1 className="text-lg">{i18n.t("homeSections.row1.col2.0")}</h1>
          </div>
          <h2 className="text-2xl md:text-5xl leading-10">
            {i18n.t("homeSections.row1.col2.1")}
          </h2>
          <Link to="/allProducts">
            <button className="mb-8 md:mb-0 flex gap-2 underline underline-offset-8 py-2 px-6 focus:underline-offset-2  ease-in-out  duration-300 transform hover:translate-x-4">
              <span>{i18n.t("homeSections.row1.col2.2")}</span>
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
      </div> */}
    </div>
  );
};

export default Row1;
