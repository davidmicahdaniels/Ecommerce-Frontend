import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./DashboardMain.module.css";

const DashboardMain = () => {
  return (
    <div className={classes.page_container}>
      <div className={classes.banner_Img_wrapper}>
        <img
          src="https://ng.jumia.is/cms/0-1-weekly-cps/0-2025/0-1Advertising/April/Reebok/NG-712x384_5.jpg"
          alt=""
        />
      </div>
      <div className={classes.product_display_top}>
        <h3>Explore Products </h3>

        <input type="text" placeholder="Filter Products" />
      </div>
      <div className={classes.dashboard_cards_wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default DashboardMain;
