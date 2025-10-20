import React, { useEffect, useState } from 'react'
import classes from "./VendorProfile.module.css"
import prod from "../../Assets/Images/prod3.png"
import prod1 from "../../Assets/Images/prod4.png"
import prod2 from "../../Assets/Images/prod2.png"
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { ProductData } from '../../Data/ProductData';
import { useNavigate } from 'react-router-dom'
import { VendorsData } from '../../Data/VendorsData'
// import { FaLocationDot, FaStar } from "react-icons/fa6";
import { baseUrl } from '../../App';

// import React, { useEffect, useState } from "react";
// import classes from "./VendorProfile.module.css"; // adjust path if needed
// import prod from "../../assets/prod.jpg"; // replace with your actual image path

const VendorProfileMain = () => {
  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchVendorProfile = async () => {
      try {
        const token = localStorage.getItem("vendorToken");
        const res = await fetch(`${baseUrl}/auth/vendors/profile`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch vendor profile");
        }

        const data = await res.json();
        setVendorData(data.vendor);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVendorProfile();
  }, []);

  if (loading) return <p>Loading vendor profile...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!vendorData) return <p>No vendor data found.</p>;

  const VendorsData = [
    {
      vendor_name: vendorData.business_name,
      vendor_category: vendorData.is_approved ? "Approved Vendor" : "Pending Approval",
      city_state: vendorData.business_address,
      vendor_description: {
        p1: `Welcome to ${vendorData.business_name}!`,
        p2: `Contact: ${vendorData.contact_person} (${vendorData.business_phone})`,
      },
      address: vendorData.business_address,
    },
  ];

  return (
    <div>
      <div className={classes.brand_essentials}>
        <div className={classes.brand_img_Wrapper}>
          <img src="https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png" alt="brand logo" />
        </div>
        <div className={classes.brand_details}>
          <h2>{VendorsData[0].vendor_name}</h2>
          <p>{VendorsData[0].vendor_category}</p>
          <p className={classes.location}>
            <FaLocationDot /> <p>{VendorsData[0].city_state}</p>
          </p>
          <p>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </p>
          <p>5 star of 45 reviews</p>
        </div>
      </div>

      <p className={classes.profile_header}>Description:</p>
      <p className={classes.profile_txt}>{VendorsData[0].vendor_description.p1}</p>
      <p className={classes.profile_txt}>{VendorsData[0].vendor_description.p2}</p>

      <p className={classes.profile_header}>Address:</p>
      <p className={classes.profile_txt}>{VendorsData[0].address}</p>
    </div>
  );
};



const VendorProducts = ({ viewProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const manageProduct = () => {
    navigate("/ManageProductRoute")
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("vendorToken");
        const res = await fetch(`${baseUrl}/vendor/products`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data.products || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!products.length) return <p>No products found.</p>;

  return (
    <div className={classes.vendor_product_display}>
      <h3>Your Products</h3>

      <div className={classes.profile_product_list}>
        {products.slice(0, 3).map((item) => (
          <div key={item.id} className={classes.product_card}>
            <div className={classes.prod_img_wrapper}>
              <img src={item.images?.[0] || "/placeholder.jpg"} alt="" />
            </div>
            <div className={classes.card_content}>
              <h4>{item.name}</h4>
              <p>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
              <small>{item.average_rating} star of {item.review_count} reviews</small>
              <button onClick={manageProduct}>Manage Product</button>
            </div>
          </div>
        ))}
      </div>

      <div className={classes.action_btn_wrapper}>
        <button onClick={manageProduct}>View All Products</button>
      </div>
    </div>
  );
};



const VendorProfile = () => {
  const navigate = useNavigate();

  const viewProducts = () => {
    navigate("/ManageProductRoute")
  }
  
  return (
    <div className={classes.vendors_profile}>
      <div className={classes.profile_main}>
        <div className={classes.profile_top}>
          <h2>Vendor's Profile</h2>
          {/* <button>Edit Profile</button> */}
        </div>

        <VendorProfileMain />
        {/* <div>
          <div className={classes.brand_essentials}>
            <div className={classes.brand_img_Wrapper}>
              <img src={prod} alt='brand logo' />
            </div>
            <div className={classes.brand_details}>
              <h2>{VendorsData[0].vendor_name}</h2>
              <p>{VendorsData[0].vendor_category}</p>
              <p className={classes.location}><FaLocationDot /> <p>{VendorsData[0].city_state}</p></p>
              <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
              <p>5 star of 45 reviews</p>
            </div>
          </div>

          <p className={classes.profile_header}>Description:</p>
          <p className={classes.profile_txt}>{VendorsData[0].vendor_description.p1}</p>
          <p className={classes.profile_txt}>{VendorsData[0].vendor_description.p2}</p>

          <p className={classes.profile_header}>Address:</p>
          <p className={classes.profile_txt}>{VendorsData[0].address}</p>
        </div> */}



      </div>

      {/* <div className={classes.vendor_product_display}>
        <h3>Your Products</h3>

        <div className={classes.profile_product_list}>
                {
                  ProductData.electronics.slice(0, 3).map((item) => {
                    return <div className={classes.product_card}>
                    
                      <div className={classes.prod_img_wrapper}>
                          <img src={item.image1} alt="" />
                      </div>
                      <div className={classes.card_content}>
                        <h4>{item.product_name}</h4>
                        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                        <small>5 star of 30 reviews</small>
                        <button onClick={viewProducts}>Manage Product</button>
                      </div>
                    </div>
                  })}
        </div>

        <div className={classes.action_btn_wrapper}>
          <button onClick={viewProducts}>View All Products</button>
        </div>
      </div> */}

      <VendorProducts/>
    </div>
  )
}

export default VendorProfile;
