import React from "react";
import { Link } from "react-router-dom";
import './App.css';


function CreateAccount() {
  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <p>Fill up your details</p>
      <form className="account-form">
        <div className="form-group">
          <input type="text" placeholder="Enter your Name" required />
        </div>
        <div className="form-group">
          <input type="date" placeholder="Enter your Date of Birth" required />
        </div>
        <div className="form-group">
          <input type="tel" placeholder="Enter your Phone Number" required />
        </div>
        <div className="form-group">
          <input type="email" placeholder="Enter your Email" required />
        </div>
        <div className="form-group">
          <input type="password" placeholder="Enter your Password" required />
        </div>
        <button type="submit" className="create-account-button">
          CREATE ACCOUNT
        </button>
      </form>
      <p className="login-link">
        You already have an Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default CreateAccount;
