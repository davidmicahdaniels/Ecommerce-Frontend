import React from 'react'
import classes from "./VendorProfile.module.css"
import prod from "../../Assets/Images/prod3.png"
import prod1 from "../../Assets/Images/prod4.png"
import prod2 from "../../Assets/Images/prod2.png"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ProductData } from '../../Data/ProductData';
import { useNavigate } from 'react-router-dom'

const VendorProfile = () => {
  const navigate = useNavigate();

  const viewProducts = () => {
    navigate("/ManageProductRoute")
  }
  
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
            <div className={classes.brand_details}>
              <h2>Premium Class Store</h2>
              <p>Clothing and food store</p>
              <p className={classes.location}><FaLocationDot /> <p>Abuja, Nigeria</p></p>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p>5 star of 45 reviews</p>
            </div>
          </div>

          <p className={classes.profile_header}>Description:</p>
          <p className={classes.profile_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <p className={classes.profile_txt}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>

          <p className={classes.profile_header}>Address:</p>
          <p className={classes.profile_txt}>Plot 7 Jakande street, afebabalola avenue, Abuja</p>
        </div>



      </div>
      <div className={classes.vendor_product_display}>
        <h3>Your Products</h3>

        <div className={classes.profile_product_list}>
                {
                  ProductData.electronics.slice(0, 3).map((item) => {
                    return <div className={classes.product_card}>
                    
                      <div className={classes.prod_img_wrapper}>
                          <img src={item.image1} alt="" />
                      </div>
                      <div className={classes.card_content}>
                        <h4>{item.product_name}</h4>
                        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <small>5 star of 30 reviews</small>
                        <button onClick={viewProducts}>Manage Product</button>
                      </div>
                    </div>
                  })}
          
          {/* <div className={classes.product_card}>
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
          </div> */}
        </div>

        <div className={classes.action_btn_wrapper}>
          <button onClick={viewProducts}>View All Products</button>
        </div>
      </div>
    </div>
  )
}

export default VendorProfile;
