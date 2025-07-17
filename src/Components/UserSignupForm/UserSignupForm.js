// import React from 'react'
// import classes from "./UserSignupForm.module.css"
// import { Link, useNavigate } from 'react-router-dom';
// import img from "../../Assets/Images/signup.jpg"

// const UserSignupForm = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/userlogin");
//   };
  
//   return (
//     <section className={classes.signup_form_section}>
//       <div className={classes.from_content_wrapper}>
//         <div className={classes.form_img_wrapper}>
//           <img
//             src={img}
//             alt=""
//             className={classes.form_img}
//           />
//         </div>
//         <div className={classes.form_action_box}>
//           <h2>Sign Up</h2>

//           <div className={classes.input_box}>
//             <p>Full Name:</p>
//             <input type="text" placeholder="Enter your Fullname" />
//           </div>

//           <div className={classes.input_box}>
//             <p>Phone number:</p>
//             <input type="text" placeholder="Enter your phone number" />
//           </div>

//           <div className={classes.input_box}>
//             <p>Email:</p>
//             <input type="text" placeholder="Enter your email" />
//           </div>

//           <div className={classes.input_box}>
//             <p>Password:</p>
//             <input type="text" placeholder="Enter your password" />
//           </div>

//           <div className={classes.input_box}>
//             <p>Confirm Password:</p>
//             <input type="text" placeholder="Confirm your password" />
//           </div>

//           <button>Sign Up</button>

//           <small className={classes.login_action}>
//             Already have an account?{" "}
//             <a href="#" onClick={handleLogin}>
//               Login
//             </a>
//           </small>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default UserSignupForm;


import React, { useState } from 'react';
import classes from "./UserSignupForm.module.css";
import { useNavigate } from 'react-router-dom';
import img from "../../Assets/Images/signup.jpg";

const UserSignupForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: '',
    phone_number: '',
    email: '',
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

  const handleSignUp = () => {
    const { fullname, phone_number, email, password, confirmPassword } = formData;

    // Basic validation
    if (!fullname || !phone_number || !email || !password || !confirmPassword) {
      setMessage({ text: 'All fields are required.', type: 'error' });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ text: 'Passwords do not match.', type: 'error' });
      return;
    }

    const newUser = { fullname, phone_number, email, password };

    const existingData = JSON.parse(localStorage.getItem('UserSignupData')) || [];
    existingData.push(newUser);
    localStorage.setItem('UserSignupData', JSON.stringify(existingData));

    setMessage({ text: 'Signup successful!', type: 'success' });

    
      setTimeout(() => {
        navigate("/userlogin");
      }, 3000);

    // Optional: Reset form after signup
    setFormData({
      fullname: '',
      phone_number: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
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
            <p>Full Name:</p>
            <input
              type="text"
              name="fullname"
              value={formData.fullname}
              onChange={handleChange}
              placeholder="Enter your Fullname"
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
