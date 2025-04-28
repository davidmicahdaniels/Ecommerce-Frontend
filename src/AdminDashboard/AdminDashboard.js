import React from 'react'
import classes from "./AdminDashboard.module.css"
import AdminSidebar from './AdminSidebar/AdminSidebar';
import FeedbackMain from './FeedbackMain/FeedbackMain';

const AdminDashboard = () => {
  return (
    <div className={classes.dashboard}>
      <AdminSidebar />
      <FeedbackMain />
    </div>
  )
}

export default AdminDashboard;
