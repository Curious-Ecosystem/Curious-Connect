import React, { useState } from 'react';
import Lottie from "react-lottie";
import animation from "../assets/login-animation.json";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import { z } from "zod";

// please call the signin component which is available in "/frontend/src/Components/common/SignIn.jsx"

// this is root page
const SignInPage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const passSchema = z.string().min(8, "Password must be at least 8 characters long");
  const userSchema = z.string().email("Invalid email address");

  const validateForm = () => {
    const newErrors = { username: "", password: "" };

    try {
      userSchema.parse(username);
    } catch (e) {
      newErrors.username = e.errors[0].message;
    }

    try {
      passSchema.parse(password);
    } catch (e) {
      newErrors.password = e.errors[0].message;
    }

    setErrors(newErrors);

    // Return true if there are no errors
    return newErrors.username === "" && newErrors.password === "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Proceed with form submission
      console.log("Form is valid");
    }
  };
  return <div className="w-full h-screen bg-gradient4 flex truncate overflow-hidden">
  <div className="hidden w-0 md:flex justify-center items-center md:w-2/5 lg:w-5/12">
    <Lottie options={defaultOptions} height={300} width={300} />
  </div>
  <div className="w-full md:w-3/5 lg:w-5/12 sm:m-12 flex justify-center items-center">
    <div className="w-4/5 m-5 border-2 border-blue-500 rounded-xl flex shadow-2xl">
      <form
        className="w-full bg-transparent py-2 px-6 gap-2 sm:py-3 sm:px-16 sm:gap-2 md:py-2 md:px-4 md:gap-1 lg:py-4 lg:px-12 flex flex-col lg:gap-2 justify-center items-center"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-semibold text-center text-white mb-2 lg:mb-1">Login
        </h1>
        <div className="mb-4 w-full">
          <label htmlFor="username" className="ml-2 block text-white">
            Email
          </label>
          <input
            type="email"
            id="username"
            className="rounded-3xl w-full px-3 py-1 md:py-2 mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={handleUsernameChange}
            // required
          />
          {errors.username && (
            <p className="text-red-500 text-xs sm:text-sm  mt-1">{errors.username}</p>
          )}
        </div>
        <div className="mb-6 w-full">
          <label htmlFor="password" className="ml-2 block text-white">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="rounded-3xl w-full px-3 py-1 md:py-2 mt-1 border-b border-gray-300 focus:outline-none focus:border-blue-500"
            value={password}
            onChange={handlePasswordChange}
            // required
          />
          {errors.password && (
            <p className="text-red-500 text-xs sm:text-sm mt-1 text-wrap">{errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="rounded-3xl w-full py-2 bg-orange-600 text-white hover:bg-orange-500 focus:outline-none focus:bg-orange-500"
        >
          Login
        </button>
        <div className="w-full mt-2 flex justify-end items-end text-white">
          <p className="text-sm">Forgot Password?</p>
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
        <Link to="/register" className="text-white text-sm mt-2">
          New user? Click here
        </Link>
      </form>
    </div>
  </div>
</div>
}

export default SignInPage;









 