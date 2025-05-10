import React from 'react';
import classes from "./VendorOverview.module.css"
import ProductCard from '../../Components/ProductCard/ProductCard';
import { FaNairaSign } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoAnalyticsSharp } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import img from "../../Assets/Images/prod2.png"



const VendorOverview = () => {
  return (
    <div className={classes.overview_area}>

        <h2>Welcome back Maryam!</h2>
        {/* <p>Below is an overview of your overal Edumart Performance</p> */}
      <div className={classes.quick_overview}>
        <div className={classes.overview_box}>
            <div className={classes.box_header}><SiSimpleanalytics /> <small>Total Customers</small></div>
            <h1>535</h1>
        </div>
        <div className={classes.overview_box}>
            <div className={classes.box_header}><IoAnalyticsSharp /> <small>Total Orders</small></div>
            <h1>1057</h1>
        </div>
        <div className={classes.overview_box}>
            <div className={classes.box_header}><IoMdCheckmarkCircleOutline /> <small>Successful Orders</small></div>
            <h1>950</h1>
        </div>
        <div className={classes.overview_box}>
            <div className={classes.box_header}><MdOutlineCancel /> <small>Failed Orders</small></div>
            <h1>57</h1>
        </div>
        <div className={classes.overview_box}>
            <div className={classes.box_header}><FaNairaSign /> <small>Total Earnings</small></div>
            <h1>#450,500</h1>
        </div>
      </div>


      <h2 className={classes.header}>Top Selling Porducts</h2>

      <div className={classes.top_products_wrapper}>
        <div className={classes.product_card}>
          <div className={classes.product_card_img_wrapper}>
            <img
              src={img}
              alt=""
              className={classes.product_img}
            />
          </div>
          <div className={classes.product_body}>
            <div className={classes.product_nmae_wrapper}>
              <h3>BG Collections</h3>

              <div className={classes.star_wrapper}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>
            <p>Perfume</p>
            <p>25ml Mousuf Perfume</p>

            <div className={classes.card_bottom}>
              <p className={classes.price}>#2,500</p>
              <button className={classes.card_btn}>View Product</button>
            </div>
          </div>
        </div>
        <div className={classes.product_card}>
          <div className={classes.product_card_img_wrapper}>
            <img
              src={img}
              alt=""
              className={classes.product_img}
            />
          </div>
          <div className={classes.product_body}>
            <div className={classes.product_nmae_wrapper}>
              <h3>BG Collections</h3>

              <div className={classes.star_wrapper}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>
            <p>Perfume</p>
            <p>25ml Mousuf Perfume</p>

            <div className={classes.card_bottom}>
              <p className={classes.price}>#2,500</p>
              <button className={classes.card_btn}>View Product</button>
            </div>
          </div>
        </div>
        <div className={classes.product_card}>
          <div className={classes.product_card_img_wrapper}>
            <img
              src={img}
              alt=""
              className={classes.product_img}
            />
          </div>
          <div className={classes.product_body}>
            <div className={classes.product_nmae_wrapper}>
              <h3>BG Collections</h3>

              <div className={classes.star_wrapper}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>
            <p>Perfume</p>
            <p>25ml Mousuf Perfume</p>

            <div className={classes.card_bottom}>
              <p className={classes.price}>#2,500</p>
              <button className={classes.card_btn}>View Product</button>
            </div>
          </div>
        </div>
        <div className={classes.product_card}>
          <div className={classes.product_card_img_wrapper}>
            <img
              src={img}
              alt=""
              className={classes.product_img}
            />
          </div>
          <div className={classes.product_body}>
            <div className={classes.product_nmae_wrapper}>
              <h3>BG Collections</h3>

              <div className={classes.star_wrapper}>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
              </div>
            </div>
            <p>Perfume</p>
            <p>25ml Mousuf Perfume</p>

            <div className={classes.card_bottom}>
              <p className={classes.price}>#2,500</p>
              <button className={classes.card_btn}>View Product</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VendorOverview;
