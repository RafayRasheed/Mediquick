import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { ITEMS } from "../components/common/functions/items";
import FlashSaleItem from "../components/common/components/FlashSaleItem";
import i18n from "../components/common/components/LangConfig";
import RedButton from "../components/common/components/RedButton";
import WhiteButton from "../components/common/components/WhiteButton";
import Loader from "../components/common/components/Loader";
import { useSelector } from "react-redux";
import { Spacer2, TextCommon, TopMargin } from "../common/common";
const AllProducts = () => {
  const [loading, setLoading] = useState(true);
  const [displayedItems, setDisplayedItems] = useState(10);
  const [duplicatedItems, setDuplicatedItems] = useState([]);
  const [seletedCat, setSeletedCat] = useState(null);
  const [totalItems, setTotalItems] = useState(0);
  const { products, categories } = useSelector((state) => state.data);

  // let products2 = [
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  //   ...products,
  // ];
  // let products2 = [...products];
  let { CatId, SubCatId } = useParams();
  useEffect(() => {
    console.log({ CatId, SubCatId });
    if (products.length) {
      setLoading(true);
      const list = products.filter(
        (pr) => pr.CatId == CatId || pr.SubCatId == SubCatId
      );
      setDuplicatedItems(list);
      setTotalItems(list.length);
      setLoading(false);
    }
  }, [products, CatId, SubCatId]);
  useEffect(() => {
    if (categories.length) {
      let cattt = {};
      const find = categories.map((cat) => {
        if (CatId && CatId != "0") {
          if (cat.id == CatId) {
            cattt = cat;
          }
        } else {
          const issub = cat.subCategories.find((sub) => sub.id == SubCatId);
          if (issub) {
            cattt = issub;
          }
          // return cat.subCategories;
        }
      });

      setSeletedCat(cattt);
    }
  }, [categories, CatId, SubCatId]);
  const handleLoadMore = () => {
    // window.scrollTo({
    //   top: window.scrollY - 1500,
    //   behavior: "smooth",
    // });
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDisplayedItems(displayedItems + 10);
    }, 500);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <div className=" flex flex-col">
      <TopMargin />
      <li className="flex flex-row items-center justify-center text-lg md:text-xl lg:text-2xl xl:text-3xl">
        <Link>{seletedCat ? seletedCat.name : ""}</Link>
      </li>
      <Spacer2 level={1} />
      <div className="mx-auto">
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          {loading
            ? Array.from({ length: displayedItems }).map((_, index) => (
                <Grid item key={index}>
                  <Loader />
                </Grid>
              ))
            : duplicatedItems.slice(0, displayedItems).map((item) => (
                <Grid item key={item.id}>
                  <FlashSaleItem
                    item={item}
                    totalItems={totalItems}
                    stars={item.stars}
                    rates={item.rates}
                  />
                </Grid>
              ))}
        </Grid>
      </div>
      <Spacer2 level={1} />
      {console.log(loading, totalItems)}
      {displayedItems < totalItems && (
        <button
          onClick={handleLoadMore}
          type="button"
          className="md:mx-auto text-center rounded-md px-5 py-3 mt-8 shadow hover:shadow-md active:shadow-inner transition
            hover:bg-gray-50 border text-[#696A75] hover:text-[#696A75] border-[#696A75] hover:border-[#696A75]
            hover:scale-105 hover:-translate-y-2 transform  duration-300 ease-in-out"
        >
          {"Load More"}
        </button>
      )}

      {!loading && totalItems == 0 ? (
        <TextCommon
          text="No items found!"
          level={0}
          style="flex flex-row items-center justify-center"
        />
      ) : null}
      {/* <div className="mt-6 flex justify-around items-center md:mx-12">
        <Link to="..">
          <WhiteButton name={i18n.t("whiteButtons.backToHomePage")} />
        </Link>
        <Link to="/category">
          <RedButton name={i18n.t("redButtons.exploreByCategory")} />
        </Link>
      </div> */}
    </div>
  );
};

export default AllProducts;
