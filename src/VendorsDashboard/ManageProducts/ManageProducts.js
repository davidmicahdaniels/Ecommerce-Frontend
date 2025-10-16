import React, { useEffect, useState } from 'react'
import classes from "./ManageProducts.module.css"
import VendorProductCard from '../VendorProductCard/VendorProductCard';
import { CiImageOn } from "react-icons/ci";
import { ProductData } from '../../Data/ProductData';
import { baseUrl } from '../../App';
import { FaTimes } from 'react-icons/fa';

const ManageProducts = () => {

    const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock_quantity: "",
    category_id: "",
    delivery_fee: "",
  });
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const categories =
    JSON.parse(localStorage.getItem("vendor_product_categories")) || [];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const token = localStorage.getItem("vendorToken");
    const form = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      form.append(key, value);
    });

    images.forEach((img) => form.append("images", img));

    try {
      const res = await fetch(`${baseUrl}/vendor/products`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: form,
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✅ Product created successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setMessage(`❌ ${data.message || "Failed to create product"}`);
      }
    } catch (err) {
      setMessage("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(false);
//   const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      setLoadingProducts(true);
      setMessage("");

      const token = localStorage.getItem("vendorToken");

      try {
        const res = await fetch(`${baseUrl}/vendor/products`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (res.ok && data.products) {
          setProducts(data.products);
        } else {
          setMessage("No products found or failed to load.");
        }
      } catch (err) {
        setMessage("Failed to fetch products. Please try again.");
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className={classes.manageproducts_main}>
      <div className={classes.manage_prod_main_area}>
        <h2>Manage Products</h2>
        
        <button className={classes.create_btn} onClick={() => setShowModal(true)}>
        + Create Product
      </button>

        {/* <h3>Fashion:</h3> */}
        <div className={classes.product_card_wrapper}>
              {/* {
                ProductData.electronics.map((item) => {
                    return <VendorProductCard {...item} />
                })} */}

            {/* <VendorProductCard />
            <VendorProductCard /> */}
        </div>

{/* <div key={product.id} className={classes.product_card}>
              <div className={classes.image_wrapper}>
                <img
                  src={
                    product.images && product.images.length > 0
                      ? product.images[0]
                      : "https://via.placeholder.com/150"
                  }
                  alt={product.name}
                />
              </div>
              <div className={classes.card_content}>
                <h3>{product.name}</h3>
                <p className={classes.desc}>
                  {product.description?.slice(0, 60) || "No description"}...
                </p>

                <div className={classes.details}>
                  <p>
                    <strong>Price:</strong> ₦{product.price.toLocaleString()}
                  </p>
                  <p>
                    <strong>Stock:</strong> {product.stock_quantity}
                  </p>
                </div>

                <p className={classes.category}>
                  Category: {product.category_name || "N/A"}
                </p>

                <p className={classes.rating}>
                  ⭐ {product.average_rating} ({product.review_count} reviews)
                </p>

                <p
                  className={`${classes.status} ${
                    product.is_active ? classes.active : classes.inactive
                  }`}
                >
                  {product.is_active ? "Active" : "Inactive"}
                </p>
              </div>
            </div> */}
        {loadingProducts ? (
        <div className={classes.loader}>Loading products...</div>
      ) : message ? (
        <p className={classes.error}>{message}</p>
      ) : (
        <div className={classes.products_grid}>
          {products.map((product) => (
            <VendorProductCard {...product} />            
          ))}
        </div>
      )}


      {showModal && (
        <div className={classes.modal_overlay}>
          <div className={classes.modal_content}>
            <div className={classes.modal_header}>
              <h2>Create New Product</h2>
              <FaTimes
                className={classes.close_icon}
                onClick={() => setShowModal(false)}
              />
            </div>

            {message && (
              <p
                style={{
                  color: message.includes("✅") ? "green" : "red",
                  marginBottom: "0.8rem",
                }}
              >
                {message}
              </p>
            )}

            <form onSubmit={handleSubmit}>
              <div className={classes.form_group}>
                <label>Product Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={classes.form_group}>
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className={classes.flex_row}>
                <div className={classes.form_group}>
                  <label>Price *</label>
                  <input
                    type="number"
                    name="price"
                    step="0.01"
                    value={formData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={classes.form_group}>
                  <label>Stock Quantity *</label>
                  <input
                    type="number"
                    name="stock_quantity"
                    value={formData.stock_quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={classes.flex_row}>
                <div className={classes.form_group}>
                  <label>Category *</label>
                  <select
                    name="category_id"
                    value={formData.category_id}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className={classes.form_group}>
                  <label>Delivery Fee</label>
                  <input
                    type="number"
                    name="delivery_fee"
                    step="0.01"
                    value={formData.delivery_fee}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={classes.form_group}>
                <label>Images (1–4)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Creating..." : "Create Product"}
              </button>
            </form>
          </div>
        </div>
      )}
    

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

     {/* <div className={classes.add_product_area}>
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
     </div>  */}
     
    </div>
  )
}

export default ManageProducts;