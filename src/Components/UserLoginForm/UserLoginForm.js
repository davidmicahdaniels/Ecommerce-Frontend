import React from 'react'
import classes from "../UserSignupForm/UserSignupForm.module.css"
import { useNavigate } from 'react-router-dom';

const UserLoginForm = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/usersignup");
  };


  return (
    <section className={classes.signup_form_section}>
      <div className={`${classes.from_content_wrapper} ${classes.alinged}`}>
        <div className={classes.signup_form_img_wrapper}>
          <img
            src="https://i.pinimg.com/736x/65/83/01/658301cd6282bde41788d8e8bdfbce77.jpg"
            alt=""
            className={classes.form_img}
          />
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