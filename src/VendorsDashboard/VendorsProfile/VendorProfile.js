import React from 'react'
import classes from "./VendorProfile.module.css"
import prod from "../../Assets/Images/prod3.png"
import { FaStar } from "react-icons/fa";

const VendorProfile = () => {
  return (
    <div className={classes.vendors_profile}>
      <div className={classes.profile_main}>
        <h2>Vendor's Profile</h2>



      </div>
      <div className={classes.vendor_product_display}>
        <h3>Your Products</h3>

        <div className={classes.profile_product_list}>
          <div className={classes.product_card}>
            <div className={classes.prod_img_wrapper}>
                <img src={prod} alt="" />
            </div>
            <div>
              <h3>Crochet Hooks</h3>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p>5 star of 30 reviews</p>
              <button>Manage Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorProfile;
