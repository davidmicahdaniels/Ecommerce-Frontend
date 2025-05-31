import React from 'react'
import classes from "./VendorSidebar.module.css"
import { useNavigate } from 'react-router-dom'

const VendorSidebar = () => {
    const navigate = useNavigate();

    const viewOvervire = () => {
        navigate("/VendorDashboard")
    }

    const viewReviews = () => {
        navigate("/VendorReviews")
    }

    const viewProfile = () => {
        navigate("/VendorProfile")
    }

    const manageProduct = () => {
        navigate("/ManageProductRoute")
    }

  return (
    <div className={classes.sidebar}>
        <div>
            <div className={classes.logo}>
                <ion-icon name="cart-outline"></ion-icon> <h3>EduMart Vendor</h3>
            </div>
            <ul className="">
                <li onClick={viewOvervire}>Overview</li>
                {/* <li>Manage Orders</li> */}
                <li onClick={manageProduct}>Mamage Products</li>
                {/* <li>Earnings</li> */}
                <li onClick={viewReviews}>Reviews</li>
            </ul>
        </div>
        <ul className="">
            <li onClick={viewProfile}>Profile</li>
            <li>Logout</li>
        </ul>
    </div>
  )
}

export default VendorSidebar;