import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorFeedback from '../VendorFeedback/VendorFeedback';
import VendorSidebarToogler from "../../VendorsDashboard/VendorSidebarToogler/VendorSidebarToogler"

const VendoFeedbackRoute = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorSidebarToogler />
      <VendorFeedback  />
    </div>
  )
}

export default VendoFeedbackRoute;