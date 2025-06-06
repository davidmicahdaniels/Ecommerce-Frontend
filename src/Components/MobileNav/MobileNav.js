import React from "react";
import classes from "./MobileNav.module.css";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const MobileNav = (props) => {
  const navigate =  useNavigate();

  const visitHome = () => {
    navigate("/");
  }
  const visitLogin = () => {
    navigate("/userlogin");
  }

  const visitSignup = () => {
    navigate("/usersignup");
  }

  const visitVendorSignup = () => {
    navigate("/vendorsignup");
  }

  return (
    <nav className={classes.mobilenav}>
      <div className={classes.nav_content_wrappe}>
        <h1 onClick={visitHome} className={classes.edumart_mobilenav_logo}>EduMart</h1>

        <ul className={classes.nav_links_wrapper}>
          
          <li>
            <HashLink smooth to="#navbar">Home</HashLink>
          </li>
          <li>
            <HashLink smooth to="#category">Category</HashLink>
          </li>
          <li>
            <HashLink smooth to="#products">Products</HashLink>
          </li>
          <li>
            <HashLink smooth to="#newsletter">Contact Us</HashLink>
          </li>
        </ul>

        <div className={classes.nav_buttons_wrapper}>
          <button className={classes.colore_btn} onClick={visitSignup}>Sign up</button>
          <button className={classes.btn} onClick={visitLogin}>Sign in</button>
        </div>

        <div className={classes.seller_btn_wrapper}>
          <button className={classes.btn} onClick={visitVendorSignup}>
            <p>Become a Seller</p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>

        <div className={classes.close_icon_wrapper} onClick={props.close}>
          <ion-icon name="close-outline"></ion-icon>
        </div>
      </div>
    </nav>
  );
};

export default MobileNav;
