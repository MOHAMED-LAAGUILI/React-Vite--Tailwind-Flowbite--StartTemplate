import React, { useState } from "react";
import { motion } from "framer-motion";
import login_img from "../../assets/image/login.jpg"
import signup_img from "../../assets/image/sign-up.jpg"

const AuthForm = () => {
  const [activeTab, setActiveTab] = useState("login");

  const switchTab = (tab) => setActiveTab(tab);

  return (
    <div className=" flex items-center justify-center ">
      <div className="w-full max-w-4xl backdrop-blur-lg rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden flex flex-col md:flex-row rounded-lg"
        >
          {/* Side Image */}
          <div className="hidden md:block md:w-1/2">
            <img
              src={activeTab === "login" ? login_img : signup_img}
              alt={`${activeTab} illustration`}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/2 bg-white p-6">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              <button
                onClick={() => switchTab("login")}
                className={`w-1/2 py-2 text-sm font-medium ${
                  activeTab === "login"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => switchTab("signup")}
                className={`w-1/2 py-2 text-sm font-medium ${
                  activeTab === "signup"
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: activeTab === "login" ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: activeTab === "login" ? 20 : -20 }}
              transition={{ duration: 0.3 }}
              role="tabpanel"
            >
              {activeTab === "login" ? <LoginForm /> : <SignupForm />}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const LoginForm = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
        Your email
      </label>
      <input
        type="email"
        id="email"
        className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Sign in
    </button>
  </form>
);

const SignupForm = () => (
  <form className="space-y-4">
    <div>
      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">
        Your name
      </label>
      <input
        type="text"
        id="name"
        className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="John Doe"
        required
      />
    </div>
    <div>
      <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">
        Your email
      </label>
      <input
        type="email"
        id="email"
        className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="name@company.com"
        required
      />
    </div>
    <div>
      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-700">
        Password
      </label>
      <input
        type="password"
        id="password"
        className="w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="••••••••"
        required
      />
    </div>
    <button
      type="submit"
      className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
    >
      Create an account
    </button>
  </form>
);

export default AuthForm;
