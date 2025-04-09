import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h3>Categories</h3>
      <ul>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Food</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Perfume</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Laundry</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Fashion</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Cosmetics</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Fashion</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Cosmetics</p>
        </li>
        <li>
          <ion-icon name="shirt-outline"></ion-icon> <p>Fashion</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
