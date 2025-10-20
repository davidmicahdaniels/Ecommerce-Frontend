import React from 'react'
import classes from "./AdminSidebar.module.css"
import { useNavigate } from 'react-router-dom'

const AdminSidebar = () => {
    const navigate =  useNavigate();

    const manageVendors = () => {
        navigate("/ManageVendors")
    }

    const ManageUsers = () => {
        navigate("/ManageUsers")
    }

    const viewFeedback = () => {
        navigate("/Feedback")
    }

    const viewOverview = () => {
        navigate("/AdminDashboard")
    }

    const viewAdminAnalysis = () => {
        navigate("/AdminAnalysis")
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
                <li onClick={viewOverview}>Overview</li>
                {/* <li onClick={viewAdminAnalysis}>Analysis</li> */}
                <li onClick={ManageUsers}>Manage Users</li>
                <li onClick={manageVendors}>Manage Vendors</li>
                {/* <li>Track Orders</li> */}
            </ul>
        </div>
        <ul className="">
            {/* <li onClick={viewFeedback}>Feedbacks</li> */}
            <li>Signout</li>
        </ul>
    </div>
  )
}

export default AdminSidebar;