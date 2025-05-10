import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorProfile from '../VendorsProfile/VendorProfile';

const VendorProfileRoute = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorProfile  />
    </div>
  )
}

export default VendorProfileRoute;