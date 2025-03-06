import React from 'react'
import classes from "./Homepagehero.module.css"

const Homepagehero = () => {
  return (
    <section className={classes.homepage_hero}>
      <h1>CONNECT, BUY, AND SELL WITHIN ABIOLA AJIMOBI TECHNICAL UNIVERSITY</h1>

      <div className={classes.hero_buttons_wrapper}>
        <button>Buy Now</button>
        <button>Become a Seller</button>
      </div>
    </section>
  );
}

export default Homepagehero;