import React from "react";
import classes from "./Sidebar.module.css";
import { getAppLocalStorage } from "../../App";
import { ProductData } from "../../Data/ProductData";

const Sidebar = () => {

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
    <aside className={classes.sidebar}>
      <h3>Categories</h3>
      <ul>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "food" }`)}>
          <ion-icon name="fast-food-outline"></ion-icon> <p>Food</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "fashion" }`)}>
          <ion-icon name="flask-outline"></ion-icon> <p>Fashion</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "laundry" }`)}>
          <ion-icon name="shirt-outline"></ion-icon> <p>Laundry</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "stationeries" }`)}>
          <ion-icon name="shirt-outline"></ion-icon> <p>Stationeries</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "electronics" }`)}>
          <ion-icon name="shirt-outline"></ion-icon> <p>Electronics</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "cosmetics" }`)}>
          <ion-icon name="shirt-outline"></ion-icon> <p>Cosmetics</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "self_care" }`)}>
          <ion-icon name="shirt-outline"></ion-icon> <p>Self care</p>
        </li>
        <li onClick={() => setLocalStorageFromText(`{ "currentProductCategory": "it_services" }`)}>
          <ion-icon name="shirt-outline"></ion-icon> <p>IT services</p>
        </li>
      </ul>

    </aside>
  );
};

export default Sidebar;
