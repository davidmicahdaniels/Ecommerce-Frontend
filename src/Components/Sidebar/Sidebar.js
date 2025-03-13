import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h3>Filter by</h3>
      <ul>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Product Price</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Product Ratings</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Discount</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Ascending order</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Discending order</p>
        </li>
      </ul>
      <h3>Categories</h3>
      <ul>
        <li>
          <ion-icon name="shirt-outline"></ion-icon>
          <p>Mens wear</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon>
          <p>Womens wear</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon>
          <p>Kids wear</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon>
          <p>Hoodies</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon>
          <p>Winter Wear</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
