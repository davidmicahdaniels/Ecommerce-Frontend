import React from 'react'
import classes from "./Features.module.css"

const Features = () => {
  return (
    <section className={classes.features_section}>
      <div className={classes.features_cards_wrapper}>
        <div className={classes.fature_card}>
          <ion-icon name="card-outline"></ion-icon>
          <h3>Secure Payments</h3>
          <p>Your payment is always safe, secure and protected at all times.</p>
        </div>
        <div className={classes.fature_card}>
          <ion-icon name="headset-outline"></ion-icon>
          <h3>Support Online 24/7</h3>
          <p>
            We are available 24/7 to assist you with all your questions and
            issues you may have.
          </p>
        </div>
        <div className={classes.fature_card}>
          <ion-icon name="ribbon-outline"></ion-icon>
          <h3>Trusted Vendors</h3>
          <p>
            We ensure all vendors are verified, providing you with quality
            products and services.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;