import React from 'react';
import classes from "./VendorOverview.module.css"
import ProductCard from '../../Components/ProductCard/ProductCard';
import { FaNairaSign } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoAnalyticsSharp } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";

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
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        {/* <ProductCard />
        <ProductCard /> */}
      </div>
    </div>
  )
}

export default VendorOverview;
