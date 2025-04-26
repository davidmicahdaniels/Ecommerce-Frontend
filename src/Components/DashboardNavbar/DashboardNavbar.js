import React from 'react'
import classes from "./DashboardNavbar.module.css"
import { BsCartPlusFill    } from "react-icons/bs";

const DashboardNavbar = () => {
  return (
    <nav className={classes.dashboard_nav}>
      <div className={classes.dashboard_nav_wrapper}>
        <div className={classes.logo}>
            <ion-icon name="cart-outline"></ion-icon>
            <h2>EduMart</h2>
        </div>
        <div className={classes.cart}>
          <BsCartPlusFill  size={25} />
          <h3 className="">Cart</h3>
        </div>
      </div>
    </nav>
  );
}

export default DashboardNavbar;