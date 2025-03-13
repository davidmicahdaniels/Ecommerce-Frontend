import React, { useEffect } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./UserDashboard.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";

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
      <Navbar />

      <div className={classes.dashboard_main}>
        <Sidebar />
        <DashboardMain />
      </div>
    </div>
  );
};

export default UserDashboard;
