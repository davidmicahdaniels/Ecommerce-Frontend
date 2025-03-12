import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./UserDashboard.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";

const UserDashboard = () => {
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
