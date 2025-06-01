import React from 'react'
import classes from "./ManageVendors.module.css"
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const ManageVendors = () => {
  return (
    <div>
      <AdminSidebar />

      <div className={classes.vendor_display_area}>

      </div>
    </div>
  )
}

export default ManageVendors;
