import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./DashboardMain.module.css";

const DashboardMain = () => {
  return (
    <div>
      <div className={classes.product_display_top}>
        <h3>Explore Products</h3>

        <input type="text" placeholder="Filter Products"/>
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
