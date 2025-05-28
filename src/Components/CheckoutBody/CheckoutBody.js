import React from 'react'
import classes from "./CheckoutBody.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/prod3.png"

const CheckoutBody = () => {
    const navigate =  useNavigate();

    const visitShop = () => {
        navigate("/shop");
    }
  return (
    <div className={classes.checkout_body}>
      <div className={classes.checkout_content_wrapper}>

        <div>
            <h2>Checkout Items</h2>


            <div className={classes.items_list}>
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
                </div>
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
                </div>
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
                </div>
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
                </div>
            </div>
        </div>

        <div className={classes.empty_cart_notice}>
            <p>Your Cart is Empty, select products to checkout.</p>
            <button onClick={visitShop}>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutBody;