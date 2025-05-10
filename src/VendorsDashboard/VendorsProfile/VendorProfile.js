import React from 'react'
import classes from "./VendorProfile.module.css"

const VendorProfile = () => {
  return (
    <div className={classes.vendors_profile}>
      <div className={classes.profile_main}></div>
      <div className={classes.vendor_product_display}>
        <h3>Your Products</h3>
      </div>
    </div>
  )
}

export default VendorProfile;
