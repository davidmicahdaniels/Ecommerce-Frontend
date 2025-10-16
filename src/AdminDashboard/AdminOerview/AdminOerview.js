import React, { useEffect, useState } from "react";
import classes from "./AdminOerview.module.css";
import AdminSidebar from "../AdminSidebar/AdminSidebar";
import { SiSimpleanalytics } from "react-icons/si";
import { IoAnalyticsSharp } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdOutlineCancel } from "react-icons/md";
import { FaNairaSign } from "react-icons/fa6";
import { ProductData } from "../../Data/ProductData";
import { baseUrl } from "../../App";

const AdminOerview = () => {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchAnalytics = async () => {
      setLoading(true);
      setMessage("");

      try {
        const token = localStorage.getItem("edumart_admin_token");

        const response = await fetch(`${baseUrl}/admin/dashboard`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch dashboard analytics");
        }

        const data = await response.json();
        setAnalytics(data.analytics);
      } catch (error) {
        console.error(error);
        setMessage(
          error.message || "Something went wrong while loading analytics"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAnalytics();
  }, []);

  return (
    <div className={classes.dashboard}>
      <AdminSidebar />

      <div className={classes.overview_area}>
        <h2>Welcome back Admin!</h2>

        {loading && (
          <div className={classes.loaderWrapper}>
            <div className={classes.loader}></div>
            <p>Loading dashboard data...</p>
          </div>
        )}

        {message && !loading && <p className={classes.error_text}>{message}</p>}

        {!loading && analytics && (
          <div className={classes.overview_grid}>
            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                <FaNairaSign /> <small>Total Earnings</small>
              </div>
              <h1>#{analytics.total_revenue?.toLocaleString()}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                👥 <small>Total Users</small>
              </div>
              <h1>{analytics.total_users}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                🏪 <small>Total Vendors</small>
              </div>
              <h1>{analytics.total_vendors}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                📦 <small>Total Products</small>
              </div>
              <h1>{analytics.total_products}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                🛒 <small>Total Orders</small>
              </div>
              <h1>{analytics.total_orders}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                ⏳ <small>Pending Vendors</small>
              </div>
              <h1>{analytics.pending_vendors}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                🕒 <small>Recent Orders (7 days)</small>
              </div>
              <h1>{analytics.recent_orders_7d}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                💖 <small>Total Wishlisted Items</small>
              </div>
              <h1>{analytics.wishlist_stats.total_wishlisted}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                🙋‍♂️ <small>Unique Wishlist Users</small>
              </div>
              <h1>{analytics.wishlist_stats.unique_wishlist_users}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                🛍️ <small>Total Items Purchased</small>
              </div>
              <h1>{analytics.purchase_stats.total_items_purchased}</h1>
            </div>

            <div className={classes.overview_box}>
              <div className={classes.box_header}>
                👤 <small>Unique Buyers</small>
              </div>
              <h1>{analytics.purchase_stats.unique_buyers}</h1>
            </div>
          </div>
        )}

        {/* <div className={classes.quick_overview}>
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
        </div> */}

        {/* <h2 className={classes.header}>Top Selling Porducts</h2>

        <div className={classes.top_products_wrapper}>
          {ProductData.laundry.slice(0, 2).map((item) => {
            return (
              <div className={classes.product_card}>
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
                  <p>{item.product_description.short}</p>

                  <div className={classes.card_bottom}>
                    <p className={classes.price}>{item.product_price}</p>
                    <button className={classes.card_btn}>View Product</button>
                  </div>
                </div>
              </div>
            );
          })}
          {ProductData.cosmetics.slice(0, 2).map((item) => {
            return (
              <div className={classes.product_card}>
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
                  <p>{item.product_description.short}</p>

                  <div className={classes.card_bottom}>
                    <p className={classes.price}>{item.product_price}</p>
                    <button className={classes.card_btn}>View Product</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div> */}
        
      </div>
    </div>
  );
};

export default AdminOerview;
