import React, { useState } from 'react';
import Lottie from "react-lottie"; 
import animation from "../assets/login-animation.json"
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";

const SignUpPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [errors, setErrors] = useState({ username: "", password: "", cpassword: "" });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCPasswordChange = (e) => {
    setCPassword(e.target.value);
  };

  const emailSchema = z.string().email("Invalid email address");
  const passwordSchema = z.string().min(8, "Password must be at least 8 characters long");
  const confirmPasswordSchema = z.string().min(8, "Confirm password must be at least 8 characters long");

  const validateForm = () => {
    const newErrors = { username: "", password: "", cpassword: "" };

    try {
      emailSchema.parse(username);
    } catch (e) {
      newErrors.username = e.errors[0].message;
    }

    try {
      passwordSchema.parse(password);
    } catch (e) {
      newErrors.password = e.errors[0].message;
    }

    try {
      confirmPasswordSchema.parse(cpassword);
    } catch (e) {
      newErrors.cpassword = e.errors[0].message;
    }

    if (password !== cpassword) {
      newErrors.cpassword = "Passwords do not match";
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return newErrors.username === "" && newErrors.password === "" && newErrors.cpassword === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form is valid");
    }
  };
  return (
    <div className="w-full h-screen bg-gradient4 flex truncate overflow-hidden">
      <div className="hidden w-0 md:flex justify-center items-center md:w-2/5 lg:w-5/12">
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <div className="w-full md:w-3/5 lg:w-5/12 sm:m-12 flex justify-center items-center">
        <div className="w-4/5 m-5 border-2 border-blue-500 rounded-xl flex shadow-2xl">
          <form
            className="w-full bg-transparent p-4 gap-1 sm:py-3 sm:px-14 sm:gap-1 md:py-1 md:px-4 md:gap-1 lg:py-2 lg:px-12 flex flex-col lg:gap-1 justify-center items-center"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-semibold text-center text-white mb-1">Register</h1>
            <div className="mb-4 w-full">
              <label htmlFor="username" className="ml-2 block text-white">
                Email
              </label>
              <input
                type="text"
                id="username"
                className="rounded-3xl w-full px-3 py-1.5 sm:py-2 mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={handleUsernameChange}
              />
              {errors.username && (
                <p className="text-red-500 text-xs lg:text-sm mt-1">{errors.username}</p>
              )}
            </div>
            <div className="mb-6 w-full">
              <label htmlFor="password" className="ml-2 block text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="rounded-3xl w-full px-3 py-1.5 sm:py-2 border-b mt-1 border-gray-300 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={handlePasswordChange}
              />
              {errors.password && (
                <p className="text-red-500 text-wrap sm:text-nowrap text-xs lg:text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mb-6 w-full">
              <label htmlFor="cpassword" className="ml-2 block text-white">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className="rounded-3xl w-full px-3 py-1.5 sm:py-2 text-xs lg:text-sm mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
                value={cpassword}
                onChange={handleCPasswordChange}
              />
              {errors.cpassword && (
                <p className="text-red-500 text-wrap  text-sm mt-1">{errors.cpassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="rounded-3xl w-full py-1.5 sm:py-2 bg-orange-600 text-white hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
            >
              Register
            </button>
            <div className="w-full mt-1 flex justify-end items-end text-white">
              <p className="text-sm">
                Already Registered? <Link to="/login">Click here</Link>
              </p>
            </div>
            <div className="w-full mt-2">
              <hr />
            </div>
            <p className="text-white">Or</p>
            <div className="flex gap-6">
              <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
              <FcGoogle className="text-3xl cursor-pointer" />
              <FaTwitter className="text-sky-400 text-3xl cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
