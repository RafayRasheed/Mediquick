import logo from "../assets/images/mediquick2.png";

export const appDetails = {
  appName: "MediQuick",
  logo: logo, // path to the logo image
};

export const Spacer = ({ padding }) => {
  const sd = `h-${padding} md:h-${padding + 4}`;
  return <div className={sd} />;
};
