import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import classes from "./UserDashboard.module.css";
import DashboardMain from "../../Components/DashboardMain/DashboardMain";
import Footer from "../../Components/Footer/Footer";

const UserDashboard = () => {
  return (
    <>
      <Navbar />

      <div className={classes.dashboard_main}>
        <Sidebar />
        <DashboardMain />
      </div>
    </>
  );
};

export default UserDashboard;
