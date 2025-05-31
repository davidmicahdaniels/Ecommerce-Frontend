import React from 'react'
import classes from "./ManageProducts.module.css"
import VendorProductCard from '../VendorProductCard/VendorProductCard';
import { CiImageOn } from "react-icons/ci";
import { ProductData } from '../../Data/ProductData';

const ManageProducts = () => {
  return (
    <div className={classes.manageproducts_main}>
      <div className={classes.manage_prod_main_area}>
        <h2>Manage Products</h2>

        {/* <h3>Fashion:</h3> */}
        <div className={classes.product_card_wrapper}>
              {
                ProductData.electronics.map((item) => {
                    return <VendorProductCard {...item} />
                })}

            {/* <VendorProductCard />
            <VendorProductCard /> */}
        </div>

        {/* <h3>Self Care:</h3>
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
        </div> */}
      </div>

     <div className={classes.add_product_area}>
        <h2>Add new product</h2>

        <div className={classes.input_box}>
            <label>Product Name</label>
            <input type="text" placeholder='Product name' />
        </div>
        <div className={classes.input_box}>
            <label>Product Description</label>
            <textarea type="text" placeholder='Product description'></textarea>
        </div>

        <div className={classes.prod_img_box}>
            <CiImageOn size={35} />
            <p>Upload Image</p>
        </div>
        <div className={classes.prod_images_bxes_wrapper}>
            <div className={classes.prod_img_box}>
                <CiImageOn />
            </div>
            <div className={classes.prod_img_box}>
                <CiImageOn />
            </div>
            <div className={classes.prod_img_box}>
                <CiImageOn />
            </div>
        </div>

        <button className={classes.submit_btn}>Add Product</button>
     </div> 
    </div>
  )
}

export default ManageProducts;