import React from 'react'
import classes from "./Homepagehero.module.css"
import { useNavigate } from 'react-router-dom';

const Homepagehero = () => {
  const navigate = useNavigate();

  const vendorSignupAction = () => {
    navigate("/vendorsignup")
  }
  

  const shopAction = () => {
    navigate("/shop")
  }
  
  return (
    <section className={classes.homepage_hero}>
      <div className={classes.hero_content_wrapper}>
        <h1>
          CONNECT, BUY, <br /> AND SELL WITHIN <br /> ABIOLA AJIMOBI TECHNICAL
          UNIVERSITY
        </h1>

        <div className={classes.hero_buttons_wrapper}>
          <button className={classes.colored_btn} onClick={shopAction}>Buy Now</button>
          <button className={classes.btn} onClick={vendorSignupAction}>
            <p>Become a Seller</p>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Homepagehero;