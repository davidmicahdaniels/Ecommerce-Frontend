import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./UserDashboard.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";
import DashboardNavbar from "../../Components/DashboardNavbar/DashboardNavbar";

const UserDashboard = () => {
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
        <DashboardMain />
        <div>
          <div className={classes.cotact_details_box}>
            <div className={classes.details_box}>
              icon
              <div className="">
                <p>CALL TO ORDER</p>
                <p>0700-600-0000</p>
              </div>
            </div>
            <div className={classes.details_box}>
              icon
              <p>Sell on EduMart</p>
            </div>
            <div className={classes.details_box}>
              icon
              <p>Send your package</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
