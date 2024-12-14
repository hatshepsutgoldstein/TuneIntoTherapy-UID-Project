import React from "react";
import { Link } from "react-router-dom";
import "./App.css"; 

function Login() {
  return (
    <div className="login-container">
      <h1>Hi, Welcome!</h1>
      <form className="login-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Email address"
            required
            className="login-input"
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
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
      <p className="signup-link">
        Don’t have an account? <Link to="/create-account">Create One</Link>
      </p>
    </div>
  );
}

export default Login;

