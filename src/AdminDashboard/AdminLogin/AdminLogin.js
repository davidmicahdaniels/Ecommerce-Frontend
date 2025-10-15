import React, { useState } from "react";
import classes from "./AdminLogin.module.css";
import { baseUrl } from "../../App";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  
        const navigate = useNavigate();
        
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setMessage({ type: "error", text: "Please fill in both fields." });
      return;
    }

    setLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const res = await fetch(`${baseUrl}/auth/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Login successful!" });

        // Save token in localStorage
        localStorage.setItem("edumart_admin_token", data.token);
        console.log("edumart_admin_token:", data.token);

        // You could redirect to an admin dashboard here
        

        setTimeout(() => navigate("/AdminDashboard"), 2000);
      } else {
        setMessage({
          type: "error",
          text: data.message || "Invalid credentials.",
        });
      }
    } catch (error) {
      console.error(error);
      setMessage({
        type: "error",
        text: "Network error. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={classes.loginContainer}>
      <form className={classes.loginBox} onSubmit={handleLogin}>
        <h2>Admin Login</h2>

        {message.text && (
          <div
            className={`${classes.message} ${
              message.type === "error" ? classes.error : classes.success
            }`}
          >
            {message.text}
          </div>
        )}

        <div className={classes.inputGroup}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
        </div>

        <div className={classes.inputGroup}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={loading}
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
