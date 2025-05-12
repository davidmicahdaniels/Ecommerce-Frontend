import React from 'react'
import classes from "./ManageProducts.module.css"
import VendorProductCard from '../VendorProductCard/VendorProductCard';

const ManageProducts = () => {
  return (
    <div>
      <div>
        <h2>Manage Products</h2>

        <h3>Fashion:</h3>
        <div className={classes.product_card_wrapper}>
            <VendorProductCard />
            <VendorProductCard />
            <VendorProductCard />
        </div>

        <h3>Self Care:</h3>
        <div className={classes.product_card_wrapper}>
            <VendorProductCard />
            <VendorProductCard />
            <VendorProductCard />
        </div>

        <h3>Cosmetics:</h3>
        <div className={classes.product_card_wrapper}>
            <VendorProductCard />
            <VendorProductCard />
            <VendorProductCard />
        </div>
      </div>
     <div>

     </div> 
    </div>
  )
}

export default ManageProducts;