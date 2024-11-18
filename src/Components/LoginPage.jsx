// src/LoginPage.js
import React, { useState } from "react";
import ImageUp from "./ImageUp";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (

    <div className="py-20 bg-gray-50 ">
      
        <div className="text-1xl font-bold text-gray-900 mb-12 ">
       
     

 
    <div className="flex items-center justify-center min-h-screen bg-gray-100 grid grid-cols-1 lg:grid-cols-3 gap-8" >
      {/* Small centered box with transitions */}
      <>.</>
      <div className=" bg-white p-6 rounded-lg shadow-lg w-full max-w-sm transform transition-all duration-300 hover:scale-105">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-xl text-gray-600 mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600 mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <a href="#" className="text-blue-600 text-sm hover:underline">
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
    </div>
    <ImageUp/>
    </div>
  );
};

export default LoginPage;
