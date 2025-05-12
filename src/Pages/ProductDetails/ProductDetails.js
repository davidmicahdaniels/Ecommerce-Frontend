import React, { useEffect } from 'react'
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./ProductDetails.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { BsTelephoneOutboundFill  } from "react-icons/bs";
import { BsCartCheckFill   } from "react-icons/bs";
import deco_img from "../../Assets/Images/vendor.jpg"
import { MdArrowBack } from "react-icons/md";
import product_img from "../../Assets/Images/prod3.png"
import product_img2 from "../../Assets/Images/prod2.png"
import product_img3 from "../../Assets/Images/prod3.png"
import product_img4 from "../../Assets/Images/prod4.png"
import { FaStar } from "react-icons/fa6";
import ProductCard from '../../Components/ProductCard/ProductCard';
import SimilarProducts from '../../Components/SimilarProducts/SimilarProducts';
import { useNavigate } from 'react-router-dom';

const ProductDetailsArea = () => {
  const navigate =  useNavigate();

  const visitShop = () =>{
    navigate("/shop")
  }
    return(
        <div className={classes.product_details_area}>
            <div className={classes.product_details_top}>
                <MdArrowBack size={30} onClick={visitShop} />
                <h2 className="">Product details</h2>
            </div>

            <div className={classes.details_body}>
                <div className={classes.images_diaplay}>
                    <img className={classes.main_img} src={product_img} alt='img'/>
                    <div className={classes.bottom_images}>
                        <img className={classes.bottom_img} src={product_img2} alt='img'/>
                        <img className={classes.bottom_img} src={product_img3} alt='img'/>
                        <img className={classes.bottom_img} src={product_img4} alt='img'/>
                    </div>
                </div>
                <div className={classes.description_area}>
                    <h3>Crochet Yarn and Hooks</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation commodo consequat.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation commodo consequat.</p>

                    <div>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />

                        <p>5 star of 40 reviews</p>
                    </div>

                    <div className={classes.btn_wrapper}>
                        <button className={classes.cart_btn}>Add to Cart</button>
                        <button className={classes.purchase_btn}>Purchase Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductDetails = () => {
    useEffect(() => {
        // Set overflow hidden when the component mounts
        document.body.style.overflow = "hidden";
    
        return () => {
          // Reset overflow when the component unmounts
          document.body.style.overflow = "";
        };
      }, []);
    
      return (
        <div className={classes.dashboard_body}>
          <DashboardNavbar />
    
          <div className={classes.dashboard_main}>
            <Sidebar />

            <ProductDetailsArea />

            
            <div className={classes.similar_prodcut_area}>
                <p className={classes.similar_header}>Similar prodducts</p>
                
                <SimilarProducts />
                <SimilarProducts />
            </div>

            {/* <div className={classes.dashboard_end}>
              <h3 className="">Quick Actions</h3>
              <div className={classes.cotact_details_box}>
                <div className={classes.details_box}>
                  <BsTelephoneOutboundFill size={20} color="#4caf50" />
                  <div className="">
                    <p>CALL TO ORDER</p>
                    <p>0700-600-0000</p>
                  </div>
                </div>
                <div className={classes.details_box}>
                  <BsCartCheckFill size={20} color="#4caf50" />
                  <p>Sell on EduMart</p>
                </div>
                <div className={classes.details_box}>
                  <BsCartCheckFill size={20} color="#4caf50" />
                  <p>Send your package</p>
                </div>
              </div>
    
              <div className={classes.decor_img_wrapper}>
                <img src={deco_img} alt="img"  className=""/>
              </div>
    
              <button className={classes.vendor_btn}><p>Become a Vendor</p><ion-icon name="arrow-forward-outline"></ion-icon></button>
            </div> */}
          </div>
        </div>
      );
}

export default ProductDetails;