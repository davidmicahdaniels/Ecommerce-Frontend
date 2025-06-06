import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from '../VendorSidebar/VendorSidebar'
import ManageProducts from '../ManageProducts/ManageProducts'
import VendorSidebarToggler from '../VendorSidebarToogler/VendorSidebarToogler'

const ManageProductRoute = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
      <VendorSidebarToggler />
      <ManageProducts />
    </div>
  )
}

export default ManageProductRoute
