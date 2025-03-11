import React from "react";
import classes from "./Categories.module.css";
import food_img from "../../Assets/Icons/food.png";

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
            <ion-icon name="funnel-outline"></ion-icon>
            <h3>Perfume</h3>
          </div>
          <div className={classes.catrgory_item}>
            <ion-icon name="shirt-outline"></ion-icon>
            <h3>Laundry</h3>
          </div>
          <div className={classes.catrgory_item}>
            <ion-icon name="bag-handle-outline"></ion-icon>
            <h3>Fashion</h3>
          </div>
          <div className={classes.catrgory_item}>
            <ion-icon name="pricetag-outline"></ion-icon>
            <h3>Cosmetics</h3>
          </div>
          <div className={classes.catrgory_item}>
            <ion-icon name="body-outline"></ion-icon>
            <h3>Fashion</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
