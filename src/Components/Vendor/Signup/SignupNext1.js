import React from 'react'
import classes from "./Signup.module.css"
import vendor from "../../../Assets/Images/vendor.jpg";
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";



const SignupNext1 = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/vendorlogin");
  };

  return (
    <>
      <Navbar />
      <section className={classes.signup_form_section}>
        <div className={classes.from_content_wrapper}>
          <div className={classes.form_img_wrapper}>
            <img src={vendor} alt="" className={classes.form_img} />
          </div>
          <div className={classes.form_action_box}>
            <h2>University Details</h2>

            <div className={classes.input_box}>
              <p>Matric Number:</p>
              <input type="text" placeholder="Enter your Fullname" />
            </div>

            <div className={classes.input_box}>
              <p>Faculty / Department:</p>
              <input type="text" placeholder="Enter your phone number" />
            </div>

            <div className={classes.input_box}>
              <p>Level / Year of Study:</p>
              <input type="text" placeholder="Enter your email" />
            </div>

            <div className={classes.input_box}>
              <p>Delivery Location:</p>
              <input type="text" placeholder="Enter your password" />
            </div>

            <div className={classes.input_box}>
              <p>Hostel or Block Name:</p>
              <input type="text" placeholder="Confirm your password" />
            </div>
            <div className={classes.input_box}>
              <p>Preferred Delivery Method:</p>
              <select name="" id="" className={classes.delivery_options}>
                <option value="">Pickup</option>
                <option value="">Delivery</option>
                <option value="">Both</option>
              </select>
            </div>

            <button>Sign Up</button>

            <small className={classes.login_action}>
              Already have an account?{" "}
              <a href="#" onClick={handleLogin}>
                Login
              </a>
            </small>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default SignupNext1
