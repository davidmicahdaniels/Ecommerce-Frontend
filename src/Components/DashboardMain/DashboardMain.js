import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./DashboardMain.module.css";
import { getAppLocalStorage } from "../../App";
import { ProductData } from "../../Data/ProductData";
import { useState, useEffect } from 'react';


const DashboardMain = () => {
  
  // const localData = getAppLocalStorage(); 

  const [category, setCategory] = useState(getAppLocalStorage().currentProductCategory);

  useEffect(() => {
    // Listen for localStorage changes (even in same tab)
    const checkCategoryChange = () => {
      const updatedCategory = localStorage.getItem('currentProductCategory');
      setCategory(updatedCategory);
    };

    // Check whenever localStorage might change
    window.addEventListener('storage', checkCategoryChange);
    const interval = setInterval(checkCategoryChange, 200); // also catch same-tab changes

    return () => {
      window.removeEventListener('storage', checkCategoryChange);
      clearInterval(interval);
    };
  }, []);


  const currentcategorydata = ProductData[category];

  // console.log(currentcategorydata[0]);  
  

  
  const setLocalStorageFromText = (text) => {
    try {
      const parsed = JSON.parse(text);
      Object.entries(parsed).forEach(([key, value]) => {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
      });
      console.log("Local storage updated successfully.");
    } catch (error) {
      console.error("Invalid input. Please pass a valid JSON string.", error);
    }

  }

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
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "food" }`)}>Food</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "fashion" }`)}>Fashion</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "laundry" }`)}>Laundry</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "stationeries" }`)}>Stationeries</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "electronics" }`)}>Electronics</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "cosmetics" }`)}>Cosmetics</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "self_care" }`)}>Self care</li>
          <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "it_services" }`)}>IT services</li>
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
