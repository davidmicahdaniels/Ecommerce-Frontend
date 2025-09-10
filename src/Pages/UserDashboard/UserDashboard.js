import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./UserDashboard.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";
import { BsTelephoneOutboundFill  } from "react-icons/bs";
import { BsCartCheckFill   } from "react-icons/bs";
import deco_img from "../../Assets/Images/vendor.jpg"
import { useNavigate } from "react-router-dom";
import { FaWallet } from "react-icons/fa6";



const UserDashboard = () => {
  useEffect(() => {
    // Set overflow hidden when the component mounts
    document.body.style.overflow = "hidden";

    return () => {
      // Reset overflow when the component unmounts
      document.body.style.overflow = "";
    };
  }, []);
  
  const navigate =  useNavigate();

  const visitVendorSignup = () => {
    navigate("/vendorsignup")
  }

  const viewWallet = () => {
    navigate("/wallet")
  }

  return (
    <div className={classes.dashboard_body}>
      <DashboardNavbar />

      <div className={classes.dashboard_main}>
        <Sidebar />
        <DashboardMain />
        <div className={classes.dashboard_end}>
          <h3 className="">Quick Actions</h3>
          <div className={classes.cotact_details_box}>
            <div className={classes.details_box}>
              <BsTelephoneOutboundFill size={20} color="#4caf50" />
              <div className="">
                <p>CALL TO ORDER</p>
                <p>0700-600-0000</p>
              </div>
            </div>
            <div className={`${classes.details_box} ${classes.wallet_cta}`} onClick={viewWallet}>
            {/* change icon */}
              <FaWallet size={20} color="#4caf50" />
              <div className="">
                <p>View Wallet</p>
                <small>click to view wallet</small>
              </div>
            </div>
            {/* <div className={classes.details_box}>
              <BsCartCheckFill size={20} color="#4caf50" />
              <p>Sell on EduMart</p>
            </div>
            <div className={classes.details_box}>
              <BsCartCheckFill size={20} color="#4caf50" />
              <p>Send your package</p>
            </div> */}
          </div>

          <div className={classes.decor_img_wrapper}>
            <img src={deco_img} alt="img"  className=""/>
          </div>

          <button className={classes.vendor_btn} onClick={visitVendorSignup}><p>Become a Vendor</p><ion-icon name="arrow-forward-outline"></ion-icon></button>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
