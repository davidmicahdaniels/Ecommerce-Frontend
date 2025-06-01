import React from 'react'
import classes from "./AdminAnalysis.module.css"
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AdminAnalysis = () => {
  return (
    <div className={classes.dashboard}>
      <AdminSidebar />
    </div>
  )
}

export default AdminAnalysis;
