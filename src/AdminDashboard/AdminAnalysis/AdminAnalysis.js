import React from 'react'
import classes from "./AdminAnalysis.module.css"
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import { SiSimpleanalytics } from 'react-icons/si';
import { IoAnalyticsSharp } from 'react-icons/io5';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { MdOutlineCancel, MdOutlineLocalLaundryService } from 'react-icons/md';
import { FaNairaSign } from 'react-icons/fa6';
import { ProductData } from '../../Data/ProductData';
import { FaShoppingBag } from 'react-icons/fa';
import { TbPerfume } from 'react-icons/tb';

const AdminAnalysis = () => {
  return (
    <div className={classes.dashboard}>
      <AdminSidebar />

       <div className={classes.overview_area}>

            <h2>Welcome back Admin!</h2>
        <div className={classes.quick_overview}>
            <div className={classes.overview_box}>
                <div className={classes.box_header}><SiSimpleanalytics /> <small>Total Customers</small></div>
                <h1>535</h1>
            </div>
            <div className={classes.overview_box}>
                <div className={classes.box_header}><IoAnalyticsSharp /> <small>Total Orders</small></div>
                <h1>1057</h1>
            </div>
            <div className={classes.overview_box}>
                <div className={classes.box_header}><IoMdCheckmarkCircleOutline /> <small>Successful Orders</small></div>
                <h1>950</h1>
            </div>
            <div className={classes.overview_box}>
                <div className={classes.box_header}><MdOutlineCancel /> <small>Failed Orders</small></div>
                <h1>57</h1>
            </div>
            <div className={classes.overview_box}>
                <div className={classes.box_header}><FaNairaSign /> <small>Total Earnings</small></div>
                <h1>#450,500</h1>
            </div>
        </div>


        <h2 className={classes.header}>Top Categories</h2>
        
        <div className={classes.categories_items_wrapper}>
          <div className={classes.catrgory_item} >
            <ion-icon name="fast-food-outline"></ion-icon>
            <h3>Food</h3>
          </div>
          <div className={classes.catrgory_item} >
            <TbPerfume size={60} color="#4caf50"/>
            <h3>Fashion</h3>
          </div>
          <div className={classes.catrgory_item}>
            <MdOutlineLocalLaundryService size={60} color="#4caf50"/>
            <h3>Laundry</h3>
          </div>
          <div className={classes.catrgory_item}>
            <FaShoppingBag size={60} color="#4caf50"/>
            <h3>Stationeries</h3>
          </div>
          <div className={classes.catrgory_item}>
            <MdOutlineLocalLaundryService size={60} color="#4caf50"/>
            <h3>Electronics</h3>
          </div>
          <div className={classes.catrgory_item}>
            <FaShoppingBag size={60} color="#4caf50"/>
            <h3>Cosmetics</h3>
          </div>
        </div>


        <h2 className={classes.header}>Top Selling Porducts</h2>

            <div className={classes.top_products_wrapper}>
            {
                ProductData.laundry.slice(0, 2).map((item) => {
                return <div className={classes.product_card}>
                <div className={classes.product_card_img_wrapper}>
                    <img
                    src={item.image1}
                    alt=""
                    className={classes.product_img}
                    />
                </div>
                <div className={classes.product_body}>
                    <div className={classes.product_nmae_wrapper}>
                    <h3>{item.product_name}</h3>

                    <div className={classes.star_wrapper}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    </div>
                    {/* <p>Perfume</p> */}
                    <p>{item.product_description.short}</p>

                    <div className={classes.card_bottom}>
                    <p className={classes.price}>{item.product_price}</p>
                    <button className={classes.card_btn}>View Product</button>
                    </div>
                </div>
                </div>
                })
            }
            {
                ProductData.cosmetics.slice(0, 2).map((item) => {
                return <div className={classes.product_card}>
                <div className={classes.product_card_img_wrapper}>
                    <img
                    src={item.image1}
                    alt=""
                    className={classes.product_img}
                    />
                </div>
                <div className={classes.product_body}>
                    <div className={classes.product_nmae_wrapper}>
                    <h3>{item.product_name}</h3>

                    <div className={classes.star_wrapper}>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                    </div>
                    </div>
                    {/* <p>Perfume</p> */}
                    <p>{item.product_description.short}</p>

                    <div className={classes.card_bottom}>
                    <p className={classes.price}>{item.product_price}</p>
                    <button className={classes.card_btn}>View Product</button>
                    </div>
                </div>
                </div>
                })
            }
                
            </div>
        </div>
    </div>
  )
}

export default AdminAnalysis;
