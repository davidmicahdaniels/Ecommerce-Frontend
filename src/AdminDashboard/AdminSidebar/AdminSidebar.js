import React from 'react'
import classes from "./AdminSidebar.module.css"
import { useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate =  useNavigate();

    const manageVendors = () => {
        navigate("/ManageVendors")
    }
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
                <li onClick={manageVendors}>Mamage Vendors</li>
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