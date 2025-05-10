import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from '../VendorSidebar/VendorSidebar';
import VendorFeedback from '../VendorFeedback/VendorFeedback';

const VendoFeedbackRoute = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorFeedback  />
      {/* <VendorOverview  /> */}
    </div>
  )
}

export default VendoFeedbackRoute;