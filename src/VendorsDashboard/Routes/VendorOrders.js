import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from '../VendorSidebar/VendorSidebar'
import VendorSidebarToggler from '../VendorSidebarToogler/VendorSidebarToogler'
import VendorOrdersMain from '../VendorOrdersMain/VendorOrdersMain'

const VendorOrders = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorSidebarToggler />
      <VendorOrdersMain />
    </div>
  )
}

export default VendorOrders
