import React from "react";
import classes from "./Cta.module.css";

const Cta = () => {
  return (
    <section className={classes.cta_section}>
      <div className={classes.cta_contentwrapper}>
        <h1>Up to 20% off on Digital items</h1>
        <p>
          The exact percentage of the discount may vary depending on the
          specific product or promotion being offered.
        </p>
        <button>Buy Now</button>
      </div>
    </section>
  );
};

export default Cta;
