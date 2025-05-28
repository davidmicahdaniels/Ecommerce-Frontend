import React from 'react'
import classes from "./CheckoutBody.module.css"

const CheckoutBody = () => {
  return (
    <div className={classes.checkout_body}>
      <div className={classes.checkout_content_wrapper}>
        <h2>Checkout Items</h2>

        <div className={classes.empty_cart_notice}>
            <p>Your Cart is Empty, select products to checkout</p>
            <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutBody;