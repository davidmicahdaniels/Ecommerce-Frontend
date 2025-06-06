import React from "react";
import classes from "./Categories.module.css";
import food_img from "../../Assets/Icons/food.png";
import { TbPerfume } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate =  useNavigate();

  const setLocalStorageFromText = (text) => {
    try {
      const parsed = JSON.parse(text);
      Object.entries(parsed).forEach(([key, value]) => {
        localStorage.setItem(key, typeof value === 'object' ? JSON.stringify(value) : String(value));
      });
      
      navigate("/shop")
    } catch (error) {
      console.error("Invalid input. Please pass a valid JSON string.", error);
    }

  }

  return (
    <section id="category">
      <div className={classes.categories_content_wrapper}>
        <div className={classes.categories_top}>
          <h2>Browse by Category</h2>

          <div className={classes.categories_icons_Wrapper}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>

        <div className={classes.categories_items_wrapper}>
          <div className={classes.catrgory_item} onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "food" }`)}>
            <ion-icon name="fast-food-outline"></ion-icon>
            <h3>Food</h3>
          </div>
          <div className={classes.catrgory_item} onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "fashion" }`)}>
            <TbPerfume size={60} color="#4caf50"/>
            <h3>Fashion</h3>
          </div>
          <div className={classes.catrgory_item} onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "laundry" }`)}>
            <MdOutlineLocalLaundryService size={60} color="#4caf50"/>
            <h3>Laundry</h3>
          </div>
          <div className={classes.catrgory_item} onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "stationeries" }`)}>
            <FaShoppingBag size={60} color="#4caf50"/>
            <h3>Stationeries</h3>
          </div>
          <div className={classes.catrgory_item} onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "electronics" }`)}>
            <MdOutlineLocalLaundryService size={60} color="#4caf50"/>
            <h3>Electronics</h3>
          </div>
          <div className={classes.catrgory_item} onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "cosmetics" }`)}>
            <FaShoppingBag size={60} color="#4caf50"/>
            <h3>Cosmetics</h3>
            {/* <h3>Remaining categories: personal care/beauty care, IT services,</h3> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
