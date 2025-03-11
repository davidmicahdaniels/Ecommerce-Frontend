import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./DashboardMain.module.css"

const DashboardMain = () => {
  return (
    <div>
      <div className={classes.dashboard_cards_wrapper}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default DashboardMain;
