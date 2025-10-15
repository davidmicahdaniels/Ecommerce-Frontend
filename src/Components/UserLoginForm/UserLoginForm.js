import React, { useState } from 'react';
import classes from "../UserSignupForm/UserSignupForm.module.css";
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/signup.jpg";
import { baseUrl, getAppLocalStorage } from '../../App';

const UserLoginForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState("");

  const handleSignup = () => {
    navigate("/usersignup");
  };

  const validateEmailFormat = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    let valid = true;

    setEmailError("");
    setPasswordError("");
    setGeneralError("");
    setLoginSuccess("");

    if (!email.trim()) {
      setEmailError("Email is required");
      valid = false;
    } else if (!validateEmailFormat(email.trim())) {
      setEmailError("Enter a valid email address");
      valid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (!valid) return;

    try {
      const res = await fetch(`${baseUrl}/auth/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const data = await res.json();
      console.log("Login Response:", data);

      if (!res.ok) {
        // Handle API error response
        setGeneralError(data?.message || "Invalid email or password");
        return;
      }

      // Save user info and token if returned
      if (data?.token) {
        localStorage.setItem("isUserLoggedIn", "true");
        localStorage.setItem("authToken", data.token);
      }

      localStorage.setItem("loggedinUserData", JSON.stringify({
        email: email.trim(),
        password: password,
      }));

      console.log("LocalStorage Snapshot:", getAppLocalStorage());

      setLoginSuccess("Login successful! Redirecting...");
      setTimeout(() => {
        navigate("/shop");
      }, 2000);

    } catch (error) {
      console.error("Login Error:", error);
      setGeneralError("Something went wrong. Please check your connection.");
    }
  };

  return (
    <section className={classes.signup_form_section}>
      <div className={`${classes.from_content_wrapper} ${classes.alinged}`}>
        <div className={classes.signup_form_img_wrapper}>
          <img src={img} alt="Signup Illustration" className={classes.form_img} />
        </div>
        <form className={classes.form_action_box} onSubmit={handleLogin} noValidate>
          <h2>Login</h2>

          {/* Message Centered Block */}
          {(generalError || loginSuccess) && (
            <p style={{
              color: generalError ? "red" : "green",
              textAlign: "center",
              marginBottom: "1rem",
              fontWeight: "500"
            }}>
              {generalError || loginSuccess}
            </p>
          )}

          <div className={classes.input_box}>
            <p>Email:</p>
            {emailError && <p style={{ color: "red", margin: 0 }}>{emailError}</p>}
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError("");
                setGeneralError("");
                setLoginSuccess("");
              }}
            />
          </div>

          <div className={classes.input_box}>
            <p>Password:</p>
            {passwordError && <p style={{ color: "red", margin: 0 }}>{passwordError}</p>}
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
                setGeneralError("");
                setLoginSuccess("");
              }}
            />
          </div>

          <button type="submit">Login</button>

          <small className={classes.login_action}>
            Don't have an account yet?{" "}
            <a href="#" onClick={handleSignup}>
              Signup
            </a>
          </small>
        </form>
      </div>
    </section>
  );
};

export default UserLoginForm;
