// Header.jsx
import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";
import TopCategories from "./TopCategories";
const Header = () => {
  return (
    <header
      dir="ltr"
      className="fixed top-0 md:top-0 left-0 w-full z-50 bg-white py-1 md:py-2 shadow-md"
      //  bg-red-50 sm:bg-red-500 md:bg-blue-500 lg:bg-yellow-600 xl:bg-orange-400"
    >
      <div
       className="flex justify-between xl:mx-20 items-center sm:px-4 px-2 "
       >
        <Logo />
        {/* <Navigations /> */}
        <SearchAppBar />
        <Profile />
        {/* <div className="flex justify-center items-center md:gap-2"></div> */}
      </div>
      <TopCategories/>
      {/* <hr className="w-full border-gray-300 md:hidden" /> */}
    </header>
  );
};

export default Header;
