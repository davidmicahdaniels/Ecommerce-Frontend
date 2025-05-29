import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./DashboardMain.module.css";
import { getAppLocalStorage } from "../../App";

import { ProductData } from "../../Data/ProductData";

const DashboardMain = () => {
  
  const localData = getAppLocalStorage(); 

  // console.log(localData);
  
  let category = localData.currentProductCategory

  const currentcategorydata = ProductData[category];

  console.log(currentcategorydata[0]);  
  

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

        <ul className={classes.tags_display}>
          <li>Food</li>
          <li>Fashion</li>
          <li>Laundry</li>
          <li>Stationeries</li>
          <li>Electronics</li>
          <li>Cosmetics</li>
          <li>Self care</li>
          <li>IT services</li>
        </ul> 

      <div className={classes.dashboard_cards_wrapper}>
        {
          currentcategorydata.map((product) => {
              return <ProductCard 
                        product_name={product.product_name}
                        img1={product.image1}
                        img2={product.image2} 
                        img3={product.image3} 
                        img4={product.image4}
                        product_price={product.product_price}
                        product_rating={product.product_rating}
                        short_description={product.product_description.short}
                        p1={product.product_description.p1}
                        p2={product.product_description.p2}
                        p3={product.product_description.p3}
                      />;
          })
        }

        {/* <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  );
};

export default DashboardMain;
