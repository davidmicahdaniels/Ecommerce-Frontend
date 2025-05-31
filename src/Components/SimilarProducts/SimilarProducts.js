import React from 'react'
import classes from "../ProductCard/ProductCard.module.css"
import img from "../../Assets/Images/prod2.png"

const SimilarProducts = (props) => {
  return (
    <div className={classes.product_card}>
      <div className={classes.product_card_img_wrapper}>
        <img
          src={props.product_image}
          alt=""
          className={classes.product_img}
        />
      </div>
      <div className={classes.product_body}>
        <div className={classes.product_nmae_wrapper}>
          <h4>{props.product_name}</h4>

          <div className={classes.star_wrapper}>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
          </div>
        </div>
        {/* <p>Perfume</p>
        <p>25ml Mousuf Perfume</p> */}

        <div className={classes.card_bottom}>
          <p className={classes.price}>{props.product_price}</p>
          <button className={classes.card_btn}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default SimilarProducts
