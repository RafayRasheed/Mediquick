import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import goIcon from "../../assets/images/drop.png";

const TopCategories = () => {
  const categories = useSelector((state) => state.data.categories);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className=" xl:mx-12 md:mx-8 ">
      {/* Categories */}
      <div className="text-gray-700  flex-shrink-0 hidden md:block">
        <nav className="py-0">
          <ul className="flex flex-row w-full md:w-full lg:w-5/6 xl:w-4/5 justify-around self-center mx-auto">
            {/* Add this class  sm:px-0 md:px-4  
            bg-red-50 sm:bg-red-500 md:bg-blue-500 lg:bg-yellow-600 xl:bg-orange-400
            */}
            {categories.map((category, index) => (
              <div
                key={index}
                className="relative z-10"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <li className="flex flex-row items-center px-2 py-1 text-base md:text-xs lg:text-sm cursor-pointer underline underline-offset-2 ease-in-out duration-300 transform hover:-translate-y-1">
                  <Link to={`/products/${category.id}/0`}>
                    {i18n.t(category.name)}
                  </Link>
                  <img
                    src={goIcon}
                    alt="icon"
                    className="w-2 h-2 mt-1 md:h-3 md:w-3 lg:h-4 lg:w-4 ml-2"
                  />
                </li>
                {hoveredIndex === index && (
                  <div className="pt-0.5 absolute left-2 md:w-40 lg:w-48">
                    <ul className="overflow-hidden bg-white opacity-100 transition-opacity duration-300 ease-in-out rounded-md border border-gray-200 shadow-md flex flex-col items-center">
                      {category.subCategories.map((sub, subIndex) => (
                        <li
                          key={subIndex}
                          className="px-4 py-2 w-full text-base md:text-xs lg:text-sm cursor-pointer hover:text-white hover:bg-red-500 transition duration-200 border-b border-gray-200 last:border-none"
                        >
                          <Link to={`/products/0/${sub.id}`}>
                            {i18n.t(sub.name)}
                          </Link>
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
    </div>
  );
};

export default TopCategories;
