import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const LoginupAccount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const cell = async () => {
    const { data } = await axios.post("http://localhost:5000/loginup", {
      email,
      password,
    });
    toast.success(data.msg);
    console.log(data);

    
    if (data.success) {
      navigate('/Product');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white w-96 p-10 rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">
          Login Account
        </h1>
        <Toaster />
        <label className="block text-gray-700 font-semibold mb-2">
          Email Address
        </label>

        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg mb-5 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="block text-gray-700 font-semibold mb-2">
          Password
        </label>

        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          className="w-full p-3 border border-gray-300 rounded-lg mb-7 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={cell}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginupAccount
