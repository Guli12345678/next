import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../../../components/Navigation";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-sm border border-gray-200">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login Form
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 " />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 "
            />
          </div>

          <button className="w-full py-2 px-4 bg-[#f7c8e0] hover:bg-[#f5b3d5] text-white font-semibold rounded-md transition duration-300">
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?
          <a href="#" className="text-blue-500">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
