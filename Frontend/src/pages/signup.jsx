import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const Signup = () => {
  const [data, setdata] = useState([]);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [image, setimage] = useState(null);
  const cell = async () => {
    const comdindata = new FormData();
    comdindata.append("name", name);
    comdindata.append("email", email);
    comdindata.append("password", password);
    comdindata.append("image", image);

    const { data } = await axios.post(
      "http://localhost:5000/signup",
      comdindata,
    );

    toast.success(data);
  };
  const handelfile = (e) => {
    setimage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white p-7 rounded-2xl shadow-xl  max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
          Create Account
        </h1>

        <Toaster />

        {/* Profile Image */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-28 h-28 rounded-full bg-gray-200 border-4 border-blue-500 overflow-hidden flex items-center justify-center"></div>

          <label className="mt-3 bg-blue-600 text-white px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
            Upload Profile
            <input
              type="file"
              accept="image/*"
              onChange={handelfile}
              className="hidden"
            />
          </label>
        </div>

        {/* Name */}
        <label className="block mb-2 font-semibold">Name</label>
        <input
          value={name}
          onChange={(e) => setname(e.target.value)}
          type="text"
          placeholder="Enter your name"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        {/* Email */}
        <label className="block mb-2 font-semibold">Email</label>
        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-3 rounded-lg mb-4 outline-none focus:border-blue-500"
        />

        {/* Password */}
        <label className="block mb-2 font-semibold">Password</label>
        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="w-full border border-gray-300 p-3 rounded-lg mb-6 outline-none focus:border-blue-500"
        />

        <button
          onClick={cell}
          className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Signup;
