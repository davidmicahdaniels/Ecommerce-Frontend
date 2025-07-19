import React, { useState } from "react";
import classes from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import vendor from "../../../Assets/Images/vendor.jpg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  
  const [message, setMessage] = useState({ type: "", text: "" });

const handleNext = () => {
  const { fullname, phone, email, password, confirmPassword } = formData;

  if (!fullname || !phone || !email || !password || !confirmPassword) {
    setMessage({ type: "error", text: "Please fill all fields." });
    return;
  }

  if (password !== confirmPassword) {
    setMessage({ type: "error", text: "Passwords do not match." });
    return;
  }

  const vendor = { fullname, phone, email, password };

  localStorage.setItem("currentVendorSignup", JSON.stringify(vendor));
  setMessage({ type: "success", text: "Step 1 completed. Proceeding to next page..." });

  setTimeout(() => navigate("/SignupNext1"), 3000);
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
            <h2>Vendor SignUp</h2>

            {message.text && (
              <p style={{
                color: message.type === "error" ? "red" : "green",
                fontWeight: 500,
                marginBottom: "1rem"
              }}>
                {message.text}
              </p>
            )}


            {["fullname", "phone", "email", "password", "confirmPassword"].map((field, index) => (
              <div className={classes.input_box} key={index}>
                <p>{field === "confirmPassword" ? "Confirm Password" : field.charAt(0).toUpperCase() + field.slice(1)}:</p>
                <input
                  type={field.includes("password") ? "password" : "text"}
                  placeholder={`Enter your ${field}`}
                  value={formData[field]}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
                  }
                />
              </div>
            ))}

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

export default Signup;
