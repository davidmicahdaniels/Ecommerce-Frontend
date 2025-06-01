import React from 'react'
import classes from "./ManageVendors.module.css"
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import img from "../../Assets/Images/prod3.png"
import { VendorsData } from '../../Data/VendorsData';

const ManageVendors = () => {
  return (
    <div className={classes.dashboard}>
      <AdminSidebar />

      <div className={classes.vendor_display_area}>
        <h2>Manage Vendors</h2>

        <div className={classes.vendor_cards_wrapper}>
            {
                VendorsData.map((vendor) => {
                    return (
                        <div className={classes.vendor_card}>
                                <div className={classes.vendor_img_Wrapper}>
                                    <img className={classes.vendor_img} src="https://images.freeimages.com/image/thumbs/374/instabutton-png-design-5690390.png" alt='' />
                                </div>
                                <div className={classes.vendor_details_Area}>
                                    <h3>{vendor.vendor_name}</h3>
                                    <p>{vendor.vendor_description.p1}</p>
                                    <button className={classes.vendor_btn}>Manage Vendor</button>
                                </div>
                            </div>
                        )
                })
            }
        </div>
      </div>
    </div>
  )
}

export default ManageVendors;
