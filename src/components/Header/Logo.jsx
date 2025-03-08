import { Link, useTheme, useMediaQuery } from "@mui/material";
import { appDetails } from "../../common/common";

const Logo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));
  console.log("isMobile", isMobile);
  return (
    <div className="items-center justify-center  bg-white  gap-0 ">
      {isMobile ? (
        <Link href="/">
          <img
            src={appDetails.logo}
            alt="Profile"
            className="w-20 h-9 min-[500px]:w-32 min-[500px]:h-10 md:w-36 md:h-12 object-contain"
          />
        </Link>
      ) : (
        <Link href="/">
          <img
            src={appDetails.logo}
            alt="Profile"
            className="w-36 h-12  md:w-44 md:h-14 object-contain"
          />
        </Link>
      )}
    </div>
  );
};
export default Logo;
