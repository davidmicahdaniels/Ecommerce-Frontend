import React from 'react'
import classes from "./AdminSidebar.module.css"

const AdminSidebar = () => {
  return (
    <div className={classes.sidebar}>
        <div>
            <div className={classes.logo}>
                {/* <h1> */}
                {/* </h1> */}
                <ion-icon name="cart-outline"></ion-icon> <h2>EduMart</h2>
            </div>
            <ul className="">
                <li>Overview</li>
                <li>Analysis</li>
                <li>Mamage Users</li>
                <li>Mamage Vendors</li>
                <li>Track Orders</li>
            </ul>
        </div>
        <ul className="">
            <li>Feedbacks</li>
            <li>Signout</li>
        </ul>
    </div>
  )
}

export default AdminSidebar;