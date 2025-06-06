import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from './VendorSidebar/VendorSidebar';
import VendorOverview from './VendorOverview/VendorOverview';
import VendorFeedback from './VendorFeedback/VendorFeedback';
import VendorSidebarToogler from '../VendorsDashboard/VendorSidebarToogler/VendorSidebarToogler';

const VendorDashboard = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorSidebarToogler />
      <VendorOverview  />
    </div>
  )
}

export default VendorDashboard;