import React from 'react'
import classes from "./DashboardNavbar.module.css"

const DashboardNavbar = () => {
  return (
    <nav className={classes.dashboard_nav}>
      <div className={classes.dashboard_nav_wrapper}>
        <div>
            <ion-icon name="cart-outline"></ion-icon>
            <h2>EduMart</h2>
        </div>
        <ion-icon name="menu-outline"></ion-icon>
      </div>
    </nav>
  );
}

export default DashboardNavbar;