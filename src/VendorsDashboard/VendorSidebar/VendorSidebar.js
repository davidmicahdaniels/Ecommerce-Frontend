import React from 'react'
import classes from "./VendorSidebar.module.css"

const VendorSidebar = () => {
  return (
    <div className={classes.sidebar}>
        <div>
            <div className={classes.logo}>
                {/* <h1> */}
                {/* </h1> */}
                <ion-icon name="cart-outline"></ion-icon> <h3>EduMart Vendor</h3>
            </div>
            <ul className="">
                <li>Overview</li>
                <li>Manage Orders</li>
                <li>Mamage Products</li>
                {/* <li>Mamage Vendors</li> */}
                <li>Earnings</li>
                <li>Reviews</li>
            </ul>
        </div>
        <ul className="">
            <li>Profile</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default VendorSidebar;