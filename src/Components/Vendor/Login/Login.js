// import React, { useState } from "react";
// import classes from "./Login.module.css";
// import { useNavigate } from "react-router-dom";
// import vendor from "../../../Assets/Images/vendor.jpg";
// import Navbar from "../../../Components/Navbar/Navbar";
// import Footer from "../../../Components/Footer/Footer";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState({ type: "", text: "" });

//   const handleSignup = () => {
//     navigate("/vendorsignup");
//   };

//   const handleLogin = () => {
//     if (!email || !password) {
//       setMessage({ type: "error", text: "Please fill in all fields." });
//       return;
//     }

//     const vendors = JSON.parse(localStorage.getItem("vendorSignupData")) || [];

//     const matchedVendor = vendors.find(
//       (v) => v.email === email && v.password === password
//     );

//     if (matchedVendor) {
//       setMessage({ type: "success", text: "Login successful! Redirecting..." });
//       setTimeout(() => navigate("/VendorDashboard"), 2000);
//     } else {
//       setMessage({ type: "error", text: "Invalid email or password." });
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <section className={classes.signup_form_section}>
//         <div className={`${classes.from_content_wrapper} ${classes.alinged}`}>
//           <div className={classes.signup_form_img_wrapper}>
//             <img src={vendor} alt="" className={classes.form_img} />
//           </div>
//           <div className={classes.form_action_box}>
//             <h2>Vendor Login</h2>

//             {message.text && (
//               <p
//                 style={{
//                   color: message.type === "error" ? "red" : "green",
//                   marginBottom: "1rem",
//                   fontWeight: 500,
//                 }}
//               >
//                 {message.text}
//               </p>
//             )}

//             <div className={classes.input_box}>
//               <p>Email:</p>
//               <input
//                 type="text"
//                 placeholder="Enter your email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className={classes.input_box}>
//               <p>Password:</p>
//               <input
//                 type="password"
//                 placeholder="Enter your password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>

//             <button onClick={handleLogin}>Login</button>

//             <small className={classes.login_action}>
//               Don't have an account yet?{" "}
//               <a href="#" onClick={handleSignup}>
//                 Signup
//               </a>
//             </small>
//           </div>
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default Login;

import React, { useState } from "react";
import classes from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import vendorImg from "../../../Assets/Images/vendor.jpg";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import { baseUrl } from "../../../App";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    navigate("/vendorsignup");
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setMessage({ type: "error", text: "Please fill in all fields." });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch(`${baseUrl}/auth/vendors/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Login successful! Redirecting..." });

        // Save vendor token or info
        localStorage.setItem("vendorToken", data.token);

        setTimeout(() => navigate("/VendorDashboard"), 2000);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Invalid email or password.",
        });
      }
    } catch (err) {
      console.error(err);
      setMessage({
        type: "error",
        text: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <section className={classes.signup_form_section}>
        <div className={`${classes.from_content_wrapper} ${classes.alinged}`}>
          <div className={classes.signup_form_img_wrapper}>
            <img src={vendorImg} alt="Vendor" className={classes.form_img} />
          </div>

          <div className={classes.form_action_box}>
            <h2>Vendor Login</h2>

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

            <div className={classes.input_box}>
              <p>Email:</p>
              <input
                type="text"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>

            <div className={classes.input_box}>
              <p>Password:</p>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            <button onClick={handleLogin} disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

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
