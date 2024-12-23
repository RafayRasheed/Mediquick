import { Link } from "@mui/material";
import { appDetails } from "../../common/common";

const Logo = () => {
  return (
    <div className=" items-center  justify-center gap-4 hidden min-[1300px]:flex">
      <Link href="/">
      <img
              src={appDetails.logo}
              alt="Profile"
              className="w-32 h-16 md:w-36 md:h-18 object-contain"
            />
      {/* <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-blue overflow-hidden flex items-center justify-center">
        
          </div> */}
      </Link>
      {/* <Link href="/" style={{ textDecoration: 'none' }}>
        <h1 className="font-inter font-bold text-2xl">{appDetails.appName}</h1>
      </Link> */}
    </div>
  );
};
export default Logo;
