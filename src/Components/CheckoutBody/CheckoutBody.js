import React, { useEffect, useState } from 'react'
import classes from "./CheckoutBody.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/prod3.png"
import { useCartCount } from '../../App';



const CheckoutBody = () => {
    const navigate =  useNavigate();

    const visitShop = () => {
        navigate("/shop");
    }

    const cartCount = useCartCount(); 

    console.log(cartCount);
    
    const [isModalOpen, SetisModalOpen] = useState(false);
    
    // const checkoutCart = () => {
    //     SetisModalOpen(true)
    // }

    const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const [errors, setErrors] = useState({
    fullname: '',
    address: '',
    phone: '',
  });

  const checkoutCart = () => {
    let hasError = false;
    const newErrors = {
      fullname: '',
      address: '',
      phone: '',
    };

    if (!fullname.trim()) {
      newErrors.fullname = 'Fullname is required';
      hasError = true;
    }

    if (!address.trim()) {
      newErrors.address = 'Delivery address is required';
      hasError = true;
    }

    if (!phone.trim()) {
      newErrors.phone = 'Phone number is required';
      hasError = true;
    }

    setErrors(newErrors);

    if (!hasError) {
      SetisModalOpen(true);
    }
  };

    const closeCheckoutModal = () => {
        navigate("/wallet") 
        SetisModalOpen(false)
        localStorage.setItem('cartProducts', JSON.stringify([]));
        console.log(isModalOpen);
        
    }

    console.log(cartCount === 0, typeof cartCount);
    
    const cartItems = JSON.parse(localStorage.getItem('cartProducts') || '[]');


    console.log(cartItems);
    
    function removeFromCartByName(productName) {
        const cartItems = JSON.parse(localStorage.getItem('cartProducts') || '[]');
        const updatedCart = cartItems.filter(item => item.product_name !== productName);
        localStorage.setItem('cartProducts', JSON.stringify(updatedCart));
    }

  return (
    <div className={classes.checkout_body}>
      <div className={classes.checkout_content_wrapper}>

        {
            cartCount > 0 ? 
                <div>
                    <h2>Checkout Items</h2>

                    {
                        isModalOpen === true ?
                            <div className={classes.checkout_modal}>
                                <div className={classes.modal_content_wrapper}>
                                    <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    <h2>Checkout Successful</h2>
                                    <p>Your order has been processed and would be delivered to you within 3 days.</p>
                                    <button onClick={closeCheckoutModal}>Done</button>
                                </div>
                            </div>
                        : ""
                    }


                    <div className={classes.items_list}>
                        {
                            cartItems.map((item) => {
                                return <div className={classes.item}>
                                    <div className={classes.item_img_wrapper}>
                                        <img src={item.img1} alt="cart item" />
                                    </div>
                                    <div className={classes.item_text_wrapper}>
                                        <h3>{item.product_name}</h3>
                                        <p>{item.p1}</p>
                                    </div>
                                    <div className={classes.action_area}>
                                        <ion-icon name="trash-outline" onClick={() => removeFromCartByName(item.product_name)}></ion-icon>
                                    </div>
                                </div>
                            })
                        }

                        
                        {/* <div className={classes.checkout_details}>
                            <label>Customer's Fullname</label>
                            <input type='text' placeholder='Fullname'/>
                            <label>Delivery Address</label>
                            <input type='text' placeholder='Delivery Address'/>
                            <label>Reciever's Phone NO.</label>
                            <input type='text' placeholder='Phone number'/>
                        </div> */}

                        <div className={classes.checkout_details}>
                        <label>Customer's Fullname:</label>
                        {errors.fullname && <p className={classes.error}>{errors.fullname}</p>}
                        <input
                        type='text'
                        placeholder='Fullname'
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        />

                        <label>Delivery Address:</label>
                        {errors.address && <p className={classes.error}>{errors.address}</p>}
                        <input
                        type='text'
                        placeholder='Delivery Address'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        />

                        <label>Receiver's Phone No.:</label>
                        {errors.phone && <p className={classes.error}>{errors.phone}</p>}
                        <input
                        type='text'
                        placeholder='Phone number'
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    </div>

                    <div className={classes.checkout_btn_wrapper}>
                        <button onClick={checkoutCart}>Checkout Products</button>
                    </div>
                </div>
            : 
                <div className={classes.empty_cart_notice}>
                    <p>Your Cart is Empty, select products to checkout.</p>
                    <button onClick={visitShop}>Shop Now</button>
                </div>
        }

      </div>
    </div>
  )
}

export default CheckoutBody;