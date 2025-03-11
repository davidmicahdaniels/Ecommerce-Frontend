import React from "react";
import classes from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={classes.newsletter_section}>
      <div className={classes.newsletter_content_wrapper}>
        <input
          type="text"
          placeholder="youremail@gmail.com"
          required
          className={classes.email_inout}
        /> 
        <button>Subscribe</button>
      </div>
    </section>
  );
};

export default Newsletter;
