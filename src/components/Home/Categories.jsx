import RedTitle from "../common/components/RedTitle";
import PropTypes from "prop-types";
import Arrows from "../common/components/Arrows";
import i18n from "../common/components/LangConfig";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";

const Category = ({ icon, name }) => (
  <Link to="category">
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className=" w-full hover:animate-pulse flex gap-4 items-center justify-center flex-col bg-white  py-8 rounded-lg border border-gray-300 transition duration-300 hover:bg-cyan-400 hover:invert  hover:shadow-xl hover:-translate-y-2 "
    >
      <div className="text-lg">{name}</div>
    </button>
  </Link>
);

const CategoryList = () => {
  const categories = [
    {
      name: i18n.t("category.categories.0"),
    },
    {
      name: i18n.t("category.categories.1"),
    },
    {
      name: i18n.t("category.categories.2"),
    },
    {
      name: i18n.t("category.categories.3"),
    },
    {
      name: i18n.t("category.categories.4"),
    },
    {
      name: i18n.t("category.categories.5"),
    },
  ];

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {categories.map((category, index) => (
        <Grid item key={index} xs={8} sm={6} md={4} lg={2} xl={2}>
          <Category name={category.name} />
        </Grid>
      ))}
    </Grid>
  );
};

const Categories = () => {
  return (
    <div className="px-4 py-12 ">
      <RedTitle title={i18n.t("category.redTitle")} />
      <div className="flex gap-20 flex-col md:flex-row  mb-8">
        <h2 className="text-xl md:text-3xl font-semibold ">
          {i18n.t("category.title")}
        </h2>
        <Arrows />
      </div>
      <CategoryList />
    </div>
  );
};

export default Categories;

Category.propTypes = {
  name: PropTypes.string.isRequired,
};
