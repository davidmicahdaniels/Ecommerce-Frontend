import React from "react";
import classes from "./MobileNav.module.css";

const MobileNav = (props) => {
  return (
    <nav className={classes.mobilenav}>
      <div className={classes.nav_content_wrappe}>
        <h1>Mariam</h1>

        <ul className={classes.nav_links_wrapper}>
          <li>Home</li>
          <li>Category</li>
          <li>About Us</li>
          <li>Contact Us</li>
        </ul>

        <div className={classes.nav_buttons_wrapper}> 
          <button className={classes.colore_btn}>Sign up</button>
          <button className={classes.btn}>Sign in</button>
        </div>

        <div className={classes.close_icon_wrapper} onClick={props.close}>
          <ion-icon name="close-outline"></ion-icon>
        </div> 
      </div>
    </nav>
  );
};

export default MobileNav;
