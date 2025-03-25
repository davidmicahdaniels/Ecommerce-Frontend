import React from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import vendor from "../../../Assets/Images/vendor.jpg";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";

const Login = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/vendorsignup");
  };

  return (
    <>
      <Navbar />
      <section className={classes.signup_form_section}>
        <div className={`${classes.from_content_wrapper} ${classes.alinged}`}>
          <div className={classes.signup_form_img_wrapper}>
            <img src={vendor} alt="" className={classes.form_img} />
          </div>
          <div className={classes.form_action_box}>
            <h2>Vendor Login</h2>

            <div className={classes.input_box}>
              <p>Email:</p>
              <input type="text" placeholder="Enter your email" />
            </div>

            <div className={classes.input_box}>
              <p>Password:</p>
              <input type="text" placeholder="Enter your password" />
            </div>

            <button>Login</button>

            <small className={classes.login_action}>
              Don't have an account yet?{" "}
              <a href="#" onClick={handleSignup}>
                Signup
              </a>
            </small>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Login;
