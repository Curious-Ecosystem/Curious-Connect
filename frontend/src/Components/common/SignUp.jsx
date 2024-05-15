import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import signimg from "../../assets/Landing-Page-Assets/coversign.jpg";

// please call the signup component which is available in "/frontend/src/Components/common/SignUp.jsx"

// this is root page

const SignUp = () => {
  const navigate = useNavigate();

  function handleLogin() {
    navigate("/signin");
  }

  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    // Handle form submission
    console.log("Form Data:", formData);
  };

  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-cover bg-center p-4"
      style={{ backgroundImage: `url(${signimg})` }}
    >
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Username"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 border 
			  border-transparent rounded-md shadow-sm text-sm
			   font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
				focus:ring-indigo-500"
          >
            Sign Up
          </button>
          <div className="flex items-center justify-center mt-4">
            <span className="text-sm font-medium text-gray-700">
              Already have an account?
            </span>
            <button
              type="button"
              className="ml-2 bg-transparent text-blue-500 border-none 
					shadow-none text-sm font-medium hover:underline focus:outline-none
					focus:ring-0 underline"
              onClick={handleLogin}
            >
              Click here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
