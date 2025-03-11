import React from "react";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <aside className={classes.sidebar}>
      <h2>Categories</h2>
      <ul>
        <li>Mens wear</li>
        <li>Womens wear</li>
        <li>Kids wear</li>
        <li>Hoodies</li>
        <li>Winter Wear</li>
      </ul>
    </aside>
  );
};

export default Sidebar;
