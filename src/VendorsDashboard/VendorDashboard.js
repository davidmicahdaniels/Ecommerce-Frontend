import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from './VendorSidebar/VendorSidebar';
import VendorOverview from './VendorOverview/VendorOverview';
import VendorFeedback from './VendorFeedback/VendorFeedback';

const VendorDashboard = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorOverview  />
    </div>
  )
}

export default VendorDashboard;