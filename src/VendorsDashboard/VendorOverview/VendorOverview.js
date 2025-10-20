import React, { useEffect, useState } from 'react';
import classes from "./VendorOverview.module.css"
import ProductCard from '../../Components/ProductCard/ProductCard';
import { FaNairaSign } from "react-icons/fa6";
import { MdOutlineCancel } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoAnalyticsSharp } from "react-icons/io5";
import { SiSimpleanalytics } from "react-icons/si";
import img from "../../Assets/Images/prod2.png"
import { ProductData } from '../../Data/ProductData';
import { baseUrl } from '../../App';



const VendorOverview = () => {
  // console.log(ProductData.electronics);

  const [vendorStats, setVendorStats] = useState(null);
const [loadingStats, setLoadingStats] = useState(true);
const [statsError, setStatsError] = useState(null);

useEffect(() => {
  const fetchVendorStats = async () => {
    setLoadingStats(true);
    setStatsError(null);

    try {
      const token = localStorage.getItem("vendorToken");
      const res = await fetch(`${baseUrl}/vendor/stats`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setVendorStats(data.stats);
      } else {
        setStatsError(data.message || "Failed to fetch vendor stats");
      }
    } catch (err) {
      console.error(err);
      setStatsError("Something went wrong");
    } finally {
      setLoadingStats(false);
    }
  };

  fetchVendorStats();
}, []);



const [vendorCategories, setVendorCategories] = useState([]);
const [loadingCategories, setLoadingCategories] = useState(true);
const [categoryError, setCategoryError] = useState(null);

useEffect(() => {
  const fetchVendorCategories = async () => {
    setLoadingCategories(true);
    setCategoryError(null);

    try {
      const token = localStorage.getItem("vendorToken");
      const res = await fetch(`${baseUrl}/vendor/categories`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setVendorCategories(data.categories || []);
        console.log(data.categories);
        
        localStorage.setItem("vendor_product_categories", JSON.stringify(data.categories))
      } else {
        setCategoryError(data.message || "Failed to fetch vendor categories");
      }
    } catch (err) {
      console.error(err);
      setCategoryError("Something went wrong");
    } finally {
      setLoadingCategories(false);
    }
  };

  fetchVendorCategories();
}, []);


  
  return (
    <div className={classes.overview_area}>

        <h2>Welcome back!</h2>
        {/* <p>Below is an overview of your overal Edumart Performance</p> */}
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

      {loadingStats ? (
  <p>Loading stats...</p>
) : statsError ? (
  <p style={{ color: "red" }}>{statsError}</p>
) : vendorStats ? (
  <div className={classes.stats_container}>
    <div className={classes.overview_box}>
      <div className={classes.box_header}>
        <SiSimpleanalytics /> <small>Total Products</small>
      </div>
      <h1>{vendorStats.total_products}</h1>
    </div>

    <div className={classes.overview_box}>
      <div className={classes.box_header}>
        <SiSimpleanalytics /> <small>Active Products</small>
      </div>
      <h1>{vendorStats.active_products}</h1>
    </div>

    <div className={classes.overview_box}>
      <div className={classes.box_header}>
        <SiSimpleanalytics /> <small>Out of Stock</small>
      </div>
      <h1>{vendorStats.out_of_stock}</h1>
    </div>

    <div className={classes.overview_box}>
      <div className={classes.box_header}>
        <SiSimpleanalytics /> <small>Total Revenue</small>
      </div>
      <h1>#{vendorStats.total_revenue.toLocaleString()}</h1>
    </div>

    <div className={classes.overview_box}>
      <div className={classes.box_header}>
        <SiSimpleanalytics /> <small>Total Likes</small>
      </div>
      <h1>{vendorStats.engagement.total_likes}</h1>
    </div>

    <div className={classes.overview_box}>
      <div className={classes.box_header}>
        <SiSimpleanalytics /> <small>Total Items Sold</small>
      </div>
      <h1>{vendorStats.engagement.total_items_sold}</h1>
    </div>
  </div>
) : null}



      {/* <h2 className={classes.header}>Top Selling Porducts</h2> */}

      {/* <div className={classes.top_products_wrapper}>
      {
        ProductData.electronics.slice(0, 4).map((item) => {
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
            <p>{item.product_description.short}</p>

            <div className={classes.card_bottom}>
              <p className={classes.price}>{item.product_price}</p>
              <button className={classes.card_btn}>View Product</button>
            </div>
          </div>
        </div>
        })
      }
      
        
      </div> */}

      <section className={classes.categories_section}>
  <h2>Product Categories</h2>

  {loadingCategories ? (
    <p>Loading categories...</p>
  ) : categoryError ? (
    <p style={{ color: "red" }}>{categoryError}</p>
  ) : vendorCategories.length > 0 ? (
    <div className={classes.categories_grid}>
      {vendorCategories.map((cat) => (
        <div key={cat.id} className={classes.category_card}>
          <div className={classes.card_icon}>
            <SiSimpleanalytics size={24} />
          </div>
          <div className={classes.card_content}>
            <h3>{cat.name}</h3>
            <p>{cat.description}</p>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p>No categories found.</p>
  )}
</section>

    </div>
  )
}

export default VendorOverview;
