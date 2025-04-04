import logo from "../assets/images/mediquick2.png";
import { Link, useParams } from "react-router-dom";

export const appDetails = {
  appName: "MediQuick",
  logo: logo, // path to the logo image
};

export const Spacer = ({ padding }) => {
  const sd = `h-${padding} md:h-${padding + 4}`;
  return <div className={sd} />;
};
export const Spacer2 = ({ level = 0 }) => {
  const levels = [
    "mt-1 sm:mt-2 md:mt-4 lg:mt-5",
    "mt-2 sm:mt-3 md:mt-4 lg:mt-6 ",
    "mt-2 sm:mt-4 md:mt-5 lg:mt-6 xl:mt-7",
    "mt-3 sm:mt-5 md:mt-7 lg:mt-10 xl:mt-10",
  ];
  const style = levels[level];
  return <div className={style} />;
};
export const TextCommon = ({ text = "", level = 0, style = "" }) => {
  const levels = ["text-base md:text-xs lg:text-sm"];
  const final = style + levels[level];
  // console.log(final);
  return <li className={final}>{text}</li>;
};

export const TopMargin = ({}) => {
  return <div className={"mt-16 md:mt-28 lg:mt-32"} />;
};
