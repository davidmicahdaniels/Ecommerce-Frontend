import React from 'react'
import classes from "./UserSignupForm.module.css"
import { Link } from 'react-router-dom';

const UserSignupForm = () => {
  return (
    <section className={classes.signup_form_section}>
      <div className={classes.from_content_wrapper}>
        <div className={classes.form_img_wrapper}>
          <img
            src="https://i.pinimg.com/736x/65/83/01/658301cd6282bde41788d8e8bdfbce77.jpg"
            alt=""
            className={classes.form_img}
          />
        </div>
        <div className={classes.form_action_box}>
          <h2>Sign Up</h2>

          <div className={classes.input_box}>
            <p>Full Name:</p>
            <input type="text" placeholder="Enter your Fullname" />
          </div>

          <div className={classes.input_box}>
            <p>Phone number:</p>
            <input type="text" placeholder="Enter your phone number" />
          </div>

          <div className={classes.input_box}>
            <p>Email:</p>
            <input type="text" placeholder="Enter your email" />
          </div>

          <div className={classes.input_box}>
            <p>Password:</p>
            <input type="text" placeholder="Enter your password" />
          </div>

          <div className={classes.input_box}>
            <p>Confirm Password:</p>
            <input type="text" placeholder="Confirm your password" />
          </div>

          <button>Sign Up</button>

          <small className={classes.login_action}>
            Already have an account? <a href="#">Login</a>
          </small>
        </div>
      </div>
    </section>
  );
}

export default UserSignupForm;