import React, { useState } from 'react'
import classes from "./VendorSidebarToogler.module.css"
import { useNavigate } from 'react-router-dom';

const VendorMobileSidebar = () => {
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

const VendorSidebarToggler = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <>
    <div className={classes.sidebar_toggle} onClick={toggleSidebar}>
      <ion-icon name="menu-outline"></ion-icon>
      {/* Optional: Debug or visual indicator */}
    </div>
    <div  onClick={toggleSidebar}>
      {isSidebarOpen ? <VendorMobileSidebar/> : ''}
    </div>
    </>
  );
};

export default VendorSidebarToggler;