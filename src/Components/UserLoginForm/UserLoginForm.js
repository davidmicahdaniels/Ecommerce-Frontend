import React from 'react'
import classes from "../UserSignupForm/UserSignupForm.module.css"
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/signup.jpg"

const UserLoginForm = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/usersignup");
  };


  return (
    <section className={classes.signup_form_section}>
      <div className={`${classes.from_content_wrapper} ${classes.alinged}`}>
        <div className={classes.signup_form_img_wrapper}>
          <img src={img} alt="" className={classes.form_img} />
        </div>
        <div className={classes.form_action_box}>
          <h2>Login</h2>

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
  );
}

export default UserLoginForm;