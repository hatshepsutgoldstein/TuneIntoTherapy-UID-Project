import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // To display errors
  const navigate = useNavigate(); // For navigation

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }
  
    try {
      const response = await fetch("http://127.0.0.1:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (response.ok) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));
        // Navigate to the index page ("/") instead of "/home"
        navigate("/", { replace: true });
      } else {
        setError(result.error || "Invalid email or password");
      }
    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  
  
  

  return (
    <div className="login-container">
      <h1>Hi, Welcome!</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="login-input"
          />
        </div>
        <div className="login-options">
          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me"> Remember me</label>
          </div>
          <Link to="/forgot-password" className="forgot-password">
            Forgot password?
          </Link>
        </div>
        <button type="submit" className="login-button">
          Log In
        </button>
      </form>
      {error && <p className="error-message">{error}</p>} {/* Display error */}
      <p className="signup-link">
        Don’t have an account? <Link to="/create-account">Create One</Link>
      </p>
    </div>
  );
}

export default Login;
