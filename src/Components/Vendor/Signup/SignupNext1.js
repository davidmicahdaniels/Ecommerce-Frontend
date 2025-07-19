// import React from 'react'
// import classes from "./Signup.module.css"
// import vendor from "../../../Assets/Images/vendor.jpg";
// import Navbar from '../../Navbar/Navbar';
// import Footer from '../../Footer/Footer';
// import { Link, useNavigate } from "react-router-dom";



// const SignupNext1 = () => {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     navigate("/vendorlogin");
//   };

//   const handleNext = () => {
//     navigate("/SignupNext2");
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
//             <h2>University Details</h2>

//             <div className={classes.input_box}>
//               <p>Matric Number:</p>
//               <input type="text" placeholder="Matric Number" />
//             </div>

//             <div className={classes.input_box}>
//               <p>Faculty / Department:</p>
//               <input type="text" placeholder="Faculty / Department" />
//             </div>

//             <div className={classes.input_box}>
//               <p>Level / Year of Study:</p>
//               <input type="text" placeholder="Level / Year of Study" />
//             </div>

//             <div className={classes.input_box}>
//               <p>Delivery Location:</p>
//               <input type="text" placeholder="Delivery Location" />
//             </div>

//             <div className={classes.input_box}>
//               <p>Hostel or Block Name:</p>
//               <input type="text" placeholder="Hostel or Block Name" />
//             </div>
//             <div className={classes.input_box}>
//               <p>Preferred Delivery Method:</p>
//               <select name="" id="" className={classes.delivery_options}>
//                 <option value="">Pickup</option>
//                 <option value="">Delivery</option>
//                 <option value="">Both</option>
//               </select>
//             </div>

//             <button onClick={handleNext}>Next</button>

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

// export default SignupNext1


import React, { useState } from "react";
import classes from "./Signup.module.css";
import vendor from "../../../Assets/Images/vendor.jpg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { useNavigate } from "react-router-dom";

const SignupNext1 = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    matricNumber: "",
    faculty: "",
    level: "",
    location: "",
    hostel: "",
    deliveryMethod: ""
  });


  const [message, setMessage] = useState({ type: "", text: "" });

  const handleNext = () => {
  if (Object.values(formData).some((val) => !val)) {
    setMessage({ type: "error", text: "Please fill all fields." });
    return;
  }

  const current = JSON.parse(localStorage.getItem("currentVendorSignup")) || {};
  const updatedVendor = { ...current, ...formData };

  localStorage.setItem("currentVendorSignup", JSON.stringify(updatedVendor));
  setMessage({ type: "success", text: "Step 2 completed. Proceeding to next page..." });

  setTimeout(() => navigate("/SignupNext2"), 3000);
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

            {message.text && (
            <p style={{
                color: message.type === "error" ? "red" : "green",
                fontWeight: 500,
                marginBottom: "1rem"
            }}>
                {message.text}
            </p>
            )}


            {[
              { key: "matricNumber", label: "Matric Number" },
              { key: "faculty", label: "Faculty / Department" },
              { key: "level", label: "Level / Year of Study" },
              { key: "location", label: "Delivery Location" },
              { key: "hostel", label: "Hostel or Block Name" },
            ].map(({ key, label }) => (
              <div className={classes.input_box} key={key}>
                <p>{label}:</p>
                <input
                  type="text"
                  placeholder={label}
                  value={formData[key]}
                  onChange={(e) => setFormData((prev) => ({ ...prev, [key]: e.target.value }))}
                />
              </div>
            ))}

            <div className={classes.input_box}>
              <p>Preferred Delivery Method:</p>
              <select
                className={classes.delivery_options}
                value={formData.deliveryMethod}
                onChange={(e) => setFormData((prev) => ({ ...prev, deliveryMethod: e.target.value }))}
              >
                <option value="">-- Select --</option>
                <option value="Pickup">Pickup</option>
                <option value="Delivery">Delivery</option>
                <option value="Both">Both</option>
              </select>
            </div>

            <button onClick={handleNext}>Next</button>
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

export default SignupNext1;
