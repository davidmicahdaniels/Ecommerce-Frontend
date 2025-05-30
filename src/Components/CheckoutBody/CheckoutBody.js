import React, { useEffect } from 'react'
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
    
    useEffect(() => {
        // localStorage.setItem('cartProducts', JSON.stringify([]));
    }, []);


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
                                        <ion-icon name="trash-outline" onClick={() => removeFromCartByName(item.product_name)}>></ion-icon>
                                    </div>
                                </div>
                            })
                        }

                        {/* 
                        <div className={classes.item}>
                            <div className={classes.item_img_wrapper}>
                                <img src={img} alt="cart item" />
                            </div>
                            <div className={classes.item_text_wrapper}>
                                <h3>2 ball of crochet wools</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt et dolore magna aliqua....</p>
                            </div>
                            <div className={classes.action_area}>
                                <ion-icon name="trash-outline"></ion-icon>
                            </div>
                        </div> */}
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