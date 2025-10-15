import React, { useState } from 'react';
import classes from "./UserSignupForm.module.css";
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/signup.jpg";
import { baseUrl } from '../../App';

const UserSignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone_number: '',
    email: '',
    address: '',
    password: '',
    confirmPassword: '',
  });

  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignUp = async () => {
    const { firstname, lastname, phone_number, email, address, password, confirmPassword } = formData;

    // Basic validation
    if (!firstname || !lastname || !phone_number || !email || !address || !password || !confirmPassword) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/auth/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          first_name: firstname,
          last_name: lastname,
          phone: phone_number,
          address: address,
        }),
      });

      const data = await res.json();
      console.log("Signup Response:", data);

      if (!res.ok) {
        // API returned an error
        setMessage({
          text: data?.message || "Signup failed. Please try again.",
          type: "error",
        });
        return;
      }

      // Success
      setMessage({
        text: "Signup successful! Redirecting to login...",
        type: "success",
      });

      setTimeout(() => {
        navigate("/userlogin");
      }, 3000);

      // Reset form
      setFormData({
        firstname: '',
        lastname: '',
        phone_number: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
      });

    } catch (error) {
      console.error("Signup Error:", error);
      setMessage({
        text: "Something went wrong. Please check your connection.",
        type: "error",
      });
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/userlogin");
  };

  return (
    <section className={classes.signup_form_section}>
      <div className={classes.from_content_wrapper}>
        <div className={classes.form_img_wrapper}>
          <img src={img} alt="" className={classes.form_img} />
        </div>

        <div className={classes.form_action_box}>
          <h2>Sign Up</h2>

          {message.text && (
            <div
              style={{
                backgroundColor: message.type === 'error' ? '#ffcdd2' : '#c8e6c9',
                color: message.type === 'error' ? '#c62828' : '#2e7d32',
                padding: '10px',
                borderRadius: '5px',
                marginBottom: '15px',
              }}
            >
              {message.text}
            </div>
          )}

          <div className={classes.input_box}>
            <p>First Name:</p>
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder="Enter your First Name"
            />
          </div>

          <div className={classes.input_box}>
            <p>Last Name:</p>
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder="Enter your Last Name"
            />
          </div>

          <div className={classes.input_box}>
            <p>Phone number:</p>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>

          <div className={classes.input_box}>
            <p>Address:</p>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
            />
          </div>

          <div className={classes.input_box}>
            <p>Email:</p>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>

          <div className={classes.input_box}>
            <p>Password:</p>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </div>

          <div className={classes.input_box}>
            <p>Confirm Password:</p>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            />
          </div>

          <button onClick={handleSignUp}>Sign Up</button>

          <small className={classes.login_action}>
            Already have an account?{" "}
            <a href="#" onClick={handleLogin}>
              Login
            </a>
          </small>
        </div>
      </div>
    </section>
  );
};

export default UserSignupForm;
