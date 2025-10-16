import React from 'react'
import classes from "./VendorProductCard.module.css"
import img from "../../Assets/Images/prod2.png"

const VendorProductCard = (props) => {
  // console.log(props.images[0]);
  
  return (
            <div className={classes.product_card}>
              <div className={classes.product_card_img_wrapper}>
                <img
                  src={props.images[0]}
                  alt=""
                  className={classes.product_img}
                />
              </div>
              <div className={classes.product_body}>
                <div className={classes.product_nmae_wrapper}>
                  <h3>{props.name}</h3>
    
                  <div className={classes.star_wrapper}>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>
                </div>
                {/* <p>Perfume</p> */}
                <p>{props.description}</p>
    
                <div className={classes.card_bottom}>
                  <p className={classes.price}>#2,500</p>
                  <button className={classes.card_btn}>View Product</button>
                </div>
              </div>
            </div>
  )
}

export default VendorProductCard
