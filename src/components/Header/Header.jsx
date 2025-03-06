// Header.jsx
import Logo from "./Logo";
import Navigations from "./Navigations";
import Profile from "./Profile";
import SearchAppBar from "./Search";
const Header = () => {
  return (
    <header
      dir="ltr"
      className="fixed top-0 md:top-0 left-0 w-full z-50 bg-white "
    >
      <div className="flex justify-between xl:mx-16 items-center sm:px-4 px-2 py-1 md:py-2">
        <Logo />
        {/* <Navigations /> */}
        <SearchAppBar />
        <Profile />
        {/* <div className="flex justify-center items-center md:gap-2"></div> */}
      </div>
      {/* <hr className="w-full border-gray-300 md:hidden" /> */}
    </header>
  );
};

export default Header;
