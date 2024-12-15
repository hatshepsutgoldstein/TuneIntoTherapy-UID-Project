import React, { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';


function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    password: ""
  });

  
  const [message, setMessage] = useState("");

  // input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const API_URL = process.env.REACT_APP_API_URL;

    try {
      // API call to Flask backend
      const response = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("Account created successfully!"); // Success message
        setFormData({ name: "", dob: "", phone: "", email: "", password: "" }); // Clear form
      } else {
        setMessage(result.error || "Failed to create account."); // Error message
      }
    } catch (error) {
      console.error("Error creating account:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="create-account-container">
      <h1>Create Account</h1>
      <p>Fill up your details</p>
      <form className="account-form">
        <div className="form-group" onSubmit={handleSubmit}>
        <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            placeholder="Enter your Date of Birth"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your Password"
            required
          />
          </div>
        <button type="submit" className="create-account-button">
          CREATE ACCOUNT
        </button>
      </form>
      {message && <p className="message">{message}</p>} 
      <p className="login-link">
        You already have an Account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default CreateAccount;
