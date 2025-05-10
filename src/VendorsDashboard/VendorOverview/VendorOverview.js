import React from 'react';
import classes from "./VendorOverview.module.css"

const VendorOverview = () => {
  return (
    <div className={classes.overview_area}>

        <h2>Welcome back Maryam!</h2>
        {/* <p>Below is an overview of your overal Edumart Performance</p> */}
      <div className={classes.quick_overview}>
        <div className={classes.overview_box}>
            <small>Total Customers</small>
            <h1>535</h1>
        </div>
        <div className={classes.overview_box}>
            <small>Total Orders</small>
            <h1>1057</h1>
        </div>
        <div className={classes.overview_box}>
            <small>Successful Orders</small>
            <h1>950</h1>
        </div>
        <div className={classes.overview_box}>
            <small>Failed Orders</small>
            <h1>57</h1>
        </div>
        <div className={classes.overview_box}>
            <small>Total Earnings</small>
            <h1>#450,500</h1>
        </div>
      </div>
    </div>
  )
}

export default VendorOverview;
