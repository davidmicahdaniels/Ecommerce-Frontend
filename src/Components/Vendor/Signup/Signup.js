import React, { useState } from "react";
import classes from "./Signup.module.css";
import { useNavigate } from "react-router-dom";
import vendorImg from "../../../Assets/Images/vendor.jpg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { baseUrl } from "../../../App";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    business_name: "",
    business_address: "",
    business_phone: "",
    contact_person: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async () => {
    const {
      business_name,
      business_address,
      business_phone,
      contact_person,
      email,
      password,
      confirmPassword
    } = formData;

    if (
      !business_name ||
      !business_address ||
      !business_phone ||
      !contact_person ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setMessage({ type: "error", text: "Please fill all fields." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    const vendor = {
      business_name,
      business_address,
      business_phone,
      contact_person,
      email,
      password
    };

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch(`${baseUrl}/auth/vendors/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(vendor)
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({
          type: "success",
          text: "Registration successful! Redirecting to login..."
        });
        localStorage.setItem("currentVendorSignup", JSON.stringify(vendor));

        setTimeout(() => navigate("/vendorlogin"), 2500);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Registration failed. Try again."
        });
      }
    } catch (err) {
      console.error(err);
      setMessage({
        type: "error",
        text: "Network error. Please try again later."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className={classes.signup_form_section}>
        <div className={classes.from_content_wrapper}>
          <div className={classes.form_img_wrapper}>
            <img src={vendorImg} alt="Vendor" className={classes.form_img} />
          </div>

          <div className={classes.form_action_box}>
            <h2>Vendor Sign Up</h2>

            {message.text && (
              <div
                className={`${classes.message_box} ${
                  message.type === "error"
                    ? classes.error_message
                    : classes.success_message
                }`}
              >
                {message.text}
              </div>
            )}

            {[
              { label: "Business Name", name: "business_name" },
              { label: "Business Address", name: "business_address" },
              { label: "Business Phone", name: "business_phone" },
              { label: "Contact Person", name: "contact_person" },
              { label: "Email", name: "email" },
              { label: "Password", name: "password", type: "password" },
              {
                label: "Confirm Password",
                name: "confirmPassword",
                type: "password"
              }
            ].map((field, index) => (
              <div className={classes.input_box} key={index}>
                <p>{field.label}:</p>
                <input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  value={formData[field.name]}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>
            ))}

            <button onClick={handleRegister} disabled={loading}>
              {loading ? "Registering..." : "Sign Up"}
            </button>

            <small className={classes.login_action}>
              Already have an account?{" "}
              <a href="#" onClick={() => navigate("/vendorlogin")}>
                Login
              </a>
            </small>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Signup;
