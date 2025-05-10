import React from 'react'
import classes from "./VendorProfile.module.css"
import prod from "../../Assets/Images/prod3.png"
import prod1 from "../../Assets/Images/prod4.png"
import prod2 from "../../Assets/Images/prod2.png"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const VendorProfile = () => {
  return (
    <div className={classes.vendors_profile}>
      <div className={classes.profile_main}>
        <div className={classes.profile_top}>
          <h2>Vendor's Profile</h2>
          <button>Edit Profile</button>
        </div>

        <div>
          <div className={classes.brand_essentials}>
            <div className={classes.brand_img_Wrapper}>
              <img src={prod} alt='brand logo' />
            </div>
            <div>
              <h2>Premium Class Store</h2>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <small>5 star of 45 reviews</small>
              <p className={classes.location}><FaLocationDot /> <p>Abuja, Nigeria</p></p>
            </div>
          </div>
          <p>Description:</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          <p>Address:</p>
          <p>Plot 7 Jakande street, afebabalola avenue, Abuja</p>
        </div>



      </div>
      <div className={classes.vendor_product_display}>
        <h3>Your Products</h3>

        <div className={classes.profile_product_list}>
          <div className={classes.product_card}>
            <div className={classes.prod_img_wrapper}>
                <img src={prod} alt="" />
            </div>
            <div className={classes.card_content}>
              <h4>Crochet Hooks</h4>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <small>5 star of 30 reviews</small>
              <button>Manage Product</button>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.prod_img_wrapper}>
                <img src={prod2} alt="" />
            </div>
            <div className={classes.card_content}>
              <h4>Crochet Hooks</h4>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <small>5 star of 30 reviews</small>
              <button>Manage Product</button>
            </div>
          </div>
          <div className={classes.product_card}>
            <div className={classes.prod_img_wrapper}>
                <img src={prod} alt="" />
            </div>
            <div className={classes.card_content}>
              <h4>Crochet Hooks</h4>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <small>5 star of 30 reviews</small>
              <button>Manage Product</button>
            </div>
          </div>
        </div>

        <div className={classes.action_btn_wrapper}>
          <button>View All Products</button>
        </div>
      </div>
    </div>
  )
}

export default VendorProfile;
