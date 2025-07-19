import React from 'react'
import classes from "./Signup.module.css"
import vendor from "../../../Assets/Images/vendor.jpg";
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { Link, useNavigate } from "react-router-dom";


const SignupNext2 = () => {
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
            <h2>Verification/Compliance</h2>

            <div className={classes.input_box}>
              <p>Upload Valid ID (Student ID card):</p>
              <div className={classes.id_upload_area}>
                <ion-icon name="cloud-upload-outline"></ion-icon>
              </div>
            </div>

            <div className={classes.input_box}>
              <p>Instagram or Social Handle:</p>
              <input type="text" placeholder="Instagram or Social Handle" />
            </div>

            <div className={classes.input_box}>
              <p>WhatsApp Number:</p>
              <input type="text" placeholder="WhatsApp Number" />
            </div>

            {/* <div className={classes.input_box}>
              <p>Password:</p>
              <input type="text" placeholder="Enter your password" />
            </div>

            <div className={classes.input_box}>
              <p>Confirm Password:</p>
              <input type="text" placeholder="Confirm your password" />
            </div> */}

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

export default SignupNext2
