import React from 'react'
import classes from "./Homepagehero.module.css"

const Homepagehero = () => {
  return (
    <section className={classes.homepage_hero}>
      <div className={classes.hero_content_wrapper}>
        <h1>
          CONNECT, BUY, <br /> AND SELL WITHIN <br /> ABIOLA AJIMOBI TECHNICAL
          UNIVERSITY
        </h1>

        <div className={classes.hero_buttons_wrapper}>
          <button className={classes.colored_btn}>Buy Now</button>
          <button className={classes.btn}>
            <p>Become a Seller</p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Homepagehero;