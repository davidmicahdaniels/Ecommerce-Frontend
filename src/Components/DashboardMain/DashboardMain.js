import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./DashboardMain.module.css";
import { baseUrl, getAppLocalStorage } from "../../App";
import { ProductData } from "../../Data/ProductData";
import { useState, useEffect } from 'react';
import { FaStar } from "react-icons/fa";


const DashboardMain = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${baseUrl}/user/products`);
        const data = await res.json();
        setProducts(data.products || []);

        console.log(data.products);
        
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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


  // const currentcategorydata = ProductData[category];

  // console.log(currentcategorydata[0]);  


  console.log(category);
  
// Filter products by category
const currentcategorydata = products.filter((item) => item.category_name.toLowerCase() === category.toLowerCase())
  // Optional: sort by price (ascending)
  // .sort((a, b) => parseFloat(a.price) - parseFloat(b.price));

console.log(currentcategorydata);
  

  
  const setLocalStorageFromText = (text) => {
    try {
      const parsed = JSON.parse(text);
      Object.entries(parsed).forEach(([key, value]) => {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
      });
      // console.log("Local storage updated successfully.");
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

{/* <div className={classes.wrapper}>
      <h2 className={classes.pageTitle}>Available Products</h2>

      {loading ? (
        <div className={classes.loader_container}>
          <div className={classes.loader}></div>
          <p>Loading products...</p>
        </div>
      ) : products.length === 0 ? (
        <p className={classes.emptyText}>No products found.</p>
      ) : (
        <div className={classes.products_grid}>
          {products.map((product) => (
            <div key={product.id} className={classes.product_card}>
              <div className={classes.image_wrapper}>
                <img
                  src={product.images?.[0] || "/placeholder.png"}
                  alt={product.name}
                />
              </div>
              <div className={classes.product_info}>
                <h3>{product.name}</h3>
                <p className={classes.category}>{product.category_name}</p>
                <p className={classes.description}>{product.description}</p>

                <div className={classes.stats}>
                  <span className={classes.price}>${product.price}</span>
                  <span className={classes.rating}>
                    <FaStar color="gold" /> {product.average_rating}{" "}
                    <small>({product.review_count})</small>
                  </span>
                </div>

                <p className={classes.vendor}>
                  By: <b>{product.vendor_name}</b>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div> */}

      <div className={classes.dashboard_cards_wrapper}>
        {
          currentcategorydata.map((product) => {
              return <ProductCard 
                        product_name={product.product_name}
                        img1={product.images[0]}
                        img2={product.images[1]} 
                        img3={product.images[2]} 
                        img4={product.images[3]} 
                        product_price={product.price}
                        product_rating={product.product_rating}
                        description={product.description}
                        name={product.name}
                        review_count={product.review_count}
                        id={product.id}
                        // p1={product.product_description.p1}
                        // p2={product.product_description.p2}
                        // p3={product.product_description.p3}
                      />;
          })
        }

      </div>
    </div>
  );
};

export default DashboardMain;
