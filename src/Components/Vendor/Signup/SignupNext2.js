// import React from 'react'
// import classes from "./Signup.module.css"
// import vendor from "../../../Assets/Images/vendor.jpg";
// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';
// import { Link, useNavigate } from "react-router-dom";


// const SignupNext2 = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/vendorlogin");
//   };

//   return (
//     <>
//       <Navbar />
//       <section className={classes.signup_form_section}>
//         <div className={classes.from_content_wrapper}>
//           <div className={classes.form_img_wrapper}>
//             <img src={vendor} alt="" className={classes.form_img} />
//           </div>
//           <div className={classes.form_action_box}>
//             <h2>Verification/Compliance</h2>

//             <div className={classes.input_box}>
//               <p>Upload Valid ID (Student ID card):</p>
//               <div className={classes.id_upload_area}>
//                 <ion-icon name="cloud-upload-outline"></ion-icon>
//               </div>
//             </div>

//             <div className={classes.input_box}>
//               <p>Instagram or Social Handle:</p>
//               <input type="text" placeholder="Instagram or Social Handle" />
//             </div>

//             <div className={classes.input_box}>
//               <p>WhatsApp Number:</p>
//               <input type="text" placeholder="WhatsApp Number" />
//             </div>

//             {/* <div className={classes.input_box}>
//               <p>Password:</p>
//               <input type="text" placeholder="Enter your password" />
//             </div>

//             <div className={classes.input_box}>
//               <p>Confirm Password:</p>
//               <input type="text" placeholder="Confirm your password" />
//             </div> */}

//             <button>Sign Up</button>

//             <small className={classes.login_action}>
//               Already have an account?{" "}
//               <a href="#" onClick={handleLogin}>
//                 Login
//               </a>
//             </small>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   )
// }

// export default SignupNext2


import React, { useState } from "react";
import classes from "./Signup.module.css";
import vendor from "../../../Assets/Images/vendor.jpg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

const SignupNext2 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    socialHandle: "",
    whatsapp: "",
    idImage: null
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, idImage: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [message, setMessage] = useState({ type: "", text: "" });


  const handleSubmit = () => {
    if (!formData.socialHandle || !formData.whatsapp || !formData.idImage) {
        setMessage({ type: "error", text: "Please complete all fields and upload your ID." });
        return;
    }

    const current = JSON.parse(localStorage.getItem("currentVendorSignup")) || {};
    const fullVendor = { ...current, ...formData };

    const allVendors = JSON.parse(localStorage.getItem("vendorSignupData")) || [];
    allVendors.push(fullVendor);
    localStorage.setItem("vendorSignupData", JSON.stringify(allVendors));
    localStorage.removeItem("currentVendorSignup");

    setMessage({ type: "success", text: "Signup successful! Redirecting to login..." });

    setTimeout(() => navigate("/vendorlogin"), 3000);
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
            {message.text && (
            <p style={{
                color: message.type === "error" ? "red" : "green",
                fontWeight: 500,
                marginBottom: "1rem"
            }}>
                {message.text}
            </p>
            )}

            <div className={classes.input_box}>
              <p>Upload Valid ID (Student ID card):</p>
              <input type="file" accept="image/*" onChange={handleFileChange} />
              {formData.idImage && <img src={formData.idImage} alt="Preview" width="100" />}
            </div>

            <div className={classes.input_box}>
              <p>Instagram or Social Handle:</p>
              <input
                type="text"
                placeholder="Instagram or Social Handle"
                value={formData.socialHandle}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, socialHandle: e.target.value }))
                }
              />
            </div>

            <div className={classes.input_box}>
              <p>WhatsApp Number:</p>
              <input
                type="text"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, whatsapp: e.target.value }))
                }
              />
            </div>

            <button onClick={handleSubmit}>Sign Up</button>
            <small className={classes.login_action}>
              Already have an account? <a href="#" onClick={() => navigate("/vendorlogin")}>Login</a>
            </small>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default SignupNext2;
