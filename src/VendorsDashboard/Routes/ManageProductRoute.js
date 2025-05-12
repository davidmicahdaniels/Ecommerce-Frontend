import React from 'react'
import classes from "./VendorDashboard.module.css"
import VendorSidebar from '../VendorSidebar/VendorSidebar'

const ManageProductRoute = () => {
  return (
    <div className={classes.vendors_dashboard}>
      <VendorSidebar />
    </div>
  )
}

export default ManageProductRoute
