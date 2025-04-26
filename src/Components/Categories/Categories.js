import React from "react";
import classes from "./Categories.module.css";
import food_img from "../../Assets/Icons/food.png";
import { TbPerfume } from "react-icons/tb";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";

const Categories = () => {
  return (
    <section>
      <div className={classes.categories_content_wrapper}>
        <div className={classes.categories_top}>
          <h2>Browse by Category</h2>

          <div className={classes.categories_icons_Wrapper}>
            <ion-icon name="arrow-back-outline"></ion-icon>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>

        <div className={classes.categories_items_wrapper}>
          <div className={classes.catrgory_item}>
            <ion-icon name="fast-food-outline"></ion-icon>
            <h3>Food</h3>
          </div>
          <div className={classes.catrgory_item}>
            <TbPerfume size={60} color="#4caf50"/>
            <h3>Perfume</h3>
          </div>
          <div className={classes.catrgory_item}>
            <MdOutlineLocalLaundryService size={60} color="#4caf50"/>
            <h3>Laundry</h3>
          </div>
          <div className={classes.catrgory_item}>
            <FaShoppingBag size={60} color="#4caf50"/>
            <h3>Fashion</h3>
          </div>
          <div className={classes.catrgory_item}>
            <MdOutlineLocalLaundryService size={60} color="#4caf50"/>
            <h3>Cosmetics</h3>
          </div>
          <div className={classes.catrgory_item}>
            <FaShoppingBag size={60} color="#4caf50"/>
            <h3>Fashion</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
