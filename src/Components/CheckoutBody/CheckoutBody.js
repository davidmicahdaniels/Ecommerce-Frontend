import React, { useEffect, useState } from 'react'
import classes from "./CheckoutBody.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/prod3.png"
import { baseUrl, useCartCount } from '../../App';



const DeliveryOptionModal = ({ onClose, onComplete }) => {
  const [option, setOption] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleCheckout = async () => {
    if (!option || !location) {
      alert("Please select a delivery type and enter location.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("edumart_authToken"); // get token if needed
      const body =
        option === "delivery"
          ? {
              delivery_type: "delivery",
              delivery_address: location,
            }
          : {
              delivery_type: "pickup",
              delivery_address: location, // vendor address or user pickup location
            };

      const res = await fetch(`${baseUrl}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`Checkout failed: ${errText}`);
      }

      const data = await res.json();

      console.log(data);
      if (data.message === 'Order placed successfully') {
        localStorage.removeItem("cartProducts")
        alert("Order Placed successfully.");
        navigate("/shop")
      }
      
      onComplete({ type: option, location, response: data });
      onClose();
    } catch (err) {
      console.error("Checkout error:", err);
      // alert("Failed to complete checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.modal}>
        <h2>Select Order Delivery Type</h2>

        <div className={classes.options}>
          <div
            className={`${classes.optionBox} ${
              option === "pickup" ? classes.active : ""
            }`}
            onClick={() => setOption("pickup")}
          >
            <h3>Order Pickup</h3>
          </div>

          <div
            className={`${classes.optionBox} ${
              option === "delivery" ? classes.active : ""
            }`}
            onClick={() => setOption("delivery")}
          >
            <h3>Delivery</h3>
          </div>
        </div>

        {option && (
          <div className={classes.inputSection}>
            <label>
              {option === "pickup" ? "Pickup Location:" : "Delivery Location:"}
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder={
                option === "pickup"
                  ? "Enter pickup location"
                  : "Enter delivery address"
              }
            />
          </div>
        )}

        <div className={classes.actions}>
          <button
            className={classes.cancelBtn}
            onClick={!loading ? onClose : undefined}
            disabled={loading}
          >
            Cancel
          </button>
          <button
            className={classes.checkoutBtn}
            onClick={handleCheckout}
            disabled={loading}
          >
            {loading ? "Processing..." : "Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};


const CheckoutBody = () => {
  const navigate = useNavigate();
  const cartCount = useCartCount();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [fullname, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [errors, setErrors] = useState({
    fullname: "",
    address: "",
    phone: "",
  });

  const cartItems = JSON.parse(localStorage.getItem("cartProducts") || "[]");

  const visitShop = () => {
    navigate("/shop");
  };

  const removeFromCartByName = (productName) => {
    const updatedCart = cartItems.filter((item) => item.product_name !== productName);
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
  };

  const checkoutCart = async () => {
    let hasError = false;
    const newErrors = { fullname: "", phone: "" };

    if (!fullname.trim()) {
      newErrors.fullname = "Fullname is required";
      hasError = true;
    }
    // if (!address.trim()) {
    //   newErrors.address = "Delivery address is required";
    //   hasError = true;
    // }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
      hasError = true;
    }

    setErrors(newErrors);
    if (hasError) return;

    // Send all cart items to the backend
    try {
      setLoading(true);
      const token = localStorage.getItem("edumart_authToken");

      console.log("the struggle");

      console.log(cartItems);
      
      // Send POST /user/cart for each cart item
await Promise.all(
  cartItems.map((item) =>
    fetch(`${baseUrl}/user/cart`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId: item.id,
        quantity: 1,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to add product ${item.id}: ${res.status}`);
        }
        return res.json();
      })
  )
);

      setLoading(false);
      // Show delivery modal after all cart items are added
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setLoading(false);
      alert("Something went wrong while processing checkout.");
    }
  };

  const closeCheckoutModal = () => {
    navigate("/wallet");
    setIsModalOpen(false);
    localStorage.setItem("cartProducts", JSON.stringify([]));
  };

  return (
    <div className={classes.checkout_body}>
      <div className={classes.checkout_content_wrapper}>
        {cartCount > 0 ? (
          <div>
            <h2>Checkout Items</h2>

              {/* <DeliveryOptionModal/> */}

            {isModalOpen && (
              <DeliveryOptionModal
                fullname={fullname}
                address={address}
                phone={phone}
                onClose={closeCheckoutModal}
              />
            )}

            <div className={classes.items_list}>
              {cartItems.map((item) => (
                <div key={item.id} className={classes.item}>
                  <div className={classes.item_img_wrapper}>
                    <img src={item.img1} alt="cart item" />
                  </div>
                  <div className={classes.item_text_wrapper}>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className={classes.action_area}>
                    <ion-icon
                      name="trash-outline"
                      onClick={() => removeFromCartByName(item.product_name)}
                    ></ion-icon>
                  </div>
                </div>
              ))}

              <div className={classes.checkout_details}>
                <label>Customer's Fullname:</label>
                {errors.fullname && <p className={classes.error}>{errors.fullname}</p>}
                <input
                  type="text"
                  placeholder="Fullname"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />

                <label>Receiver's Phone No.:</label>
                {errors.phone && <p className={classes.error}>{errors.phone}</p>}
                <input
                  type="text"
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />

                {/* <label>Delivery Address:</label>
                {errors.address && <p className={classes.error}>{errors.address}</p>}
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                /> */}
              </div>
            </div>

            <div className={classes.checkout_btn_wrapper}>
              <button onClick={checkoutCart} disabled={loading}>
                {loading ? "Processing..." : "Checkout Products"}
              </button>
            </div>
          </div>
        ) : (
          <div className={classes.empty_cart_notice}>
            <p>Your Cart is Empty, select products to checkout.</p>
            <button onClick={visitShop}>Shop Now</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutBody;