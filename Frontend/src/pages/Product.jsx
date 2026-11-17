
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Product = () => {
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [updata, setupdata] = useState("");
  const [data, setdata] = useState([]);

  const navigeta=useNavigate()

  const cell = async () => {
    if (updata) {
      await axios.post("http://localhost:5000/updata", {
        fname,
        lname,
        _id: updata._id,
      });
    } else {
      await axios.post("http://localhost:5000/data", { fname, lname });
    }
    setfname("");
    setlname("");
  };

  const book = async () => {
    const { data } = await axios.get("http://localhost:5000/product");
    setdata(data);
  };

  const eidat = async (masssg) => {
    setfname(masssg.fname);
    setlname(masssg.lname);
    setupdata(masssg);
  };

  const api = async (name) => {
    await axios.post("http://localhost:5000/delete", {
      _id: name._id,
    });

    book();
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-white p-6 hidden md:block">

        <h1 className="text-2xl font-bold mb-12">
          Abdullah<span className="text-blue-500">Shop</span>
        </h1>

        <p className="text-xs text-slate-400 font-semibold mb-5 tracking-widest">
          MAIN MENU
        </p>

        <div className="flex flex-col gap-3">

          <Link to="/product" className="bg-blue-600 p-3 rounded-xl font-medium">
            ◈ Dashboard
          </Link>

          <Link to="/products" className="p-3 rounded-xl hover:bg-slate-800 transition">
            ▣ Products
          </Link>

          <Link to="/categories" className="p-3 rounded-xl hover:bg-slate-800 transition">
            ▤ Categories
          </Link>

          <Link to="/orders" className="p-3 rounded-xl hover:bg-slate-800 transition">
            ◷ Orders
          </Link>

          <Link to="/customers" className="p-3 rounded-xl hover:bg-slate-800 transition">
            ♙ Customers
          </Link>

          <Link to="/settings" className="p-3 rounded-xl hover:bg-slate-800 transition">
            ⚙ Settings
          </Link>

        </div>

        <div className="mt-20 border-t border-slate-700 pt-6">
          <p className="text-slate-400 text-sm">Logged in as</p>
          <h3 className="font-semibold mt-2">Admin Abdullah</h3>
        </div>

      </aside>

      {/* Main */}
      <div className="flex-1 min-w-0">

        {/* Navbar */}
        <div className="bg-white px-6 py-5 shadow-sm flex justify-between items-center">

          <div>
            <h2 className="text-2xl font-bold text-slate-800">
              Dashboard
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Welcome to your admin panel
            </p>
          </div>

          <div className="flex items-center gap-3">
           
            <button   onClick={  ()=>navigeta("/LoginAccount")}  className="w-27 h-11  rounded    bg-blue-600 text-white flex items-center justify-center ">
              loginAccount
            </button>
          </div>

        </div>

        {/* Content */}
        <div className="p-5 md:p-8">

          <div className="mb-7">
            <h2 className="text-2xl font-bold text-slate-800">
              Welcome Back, Admin!
            </h2>
            <p className="text-slate-500 mt-2">
              Here's what's happening with your store.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-slate-500 font-medium">Total Products</p>
              <h1 className="text-3xl font-bold text-slate-800 mt-3">120</h1>
              <p className="text-green-600 text-sm mt-2">Products Available</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-slate-500 font-medium">Total Orders</p>
              <h1 className="text-3xl font-bold text-slate-800 mt-3">85</h1>
              <p className="text-green-600 text-sm mt-2">Orders Received</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-slate-500 font-medium">Customers</p>
              <h1 className="text-3xl font-bold text-slate-800 mt-3">64</h1>
              <p className="text-purple-600 text-sm mt-2">Total Customers</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <p className="text-slate-500 font-medium">Total Revenue</p>
              <h1 className="text-3xl font-bold text-slate-800 mt-3">Rs. 50K</h1>
              <p className="text-orange-600 text-sm mt-2">Total Sales</p>
            </div>

          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-8 p-6">

            <div className="mb-6">
              <h2 className="text-xl font-bold text-slate-800">
                {updata ? "Update User" : "Add New User"}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Enter user information below
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => {
                    setfname(e.target.value);
                  }}
                  value={fname}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full border border-slate-300 rounded-xl p-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  onChange={(e) => {
                    setlname(e.target.value);
                  }}
                  value={lname}
                />
              </div>

            </div>

            <div className="flex gap-3 mt-6">

              <button
                onClick={cell}
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold transition shadow-sm"
              >
                {updata ? "Update User" : "+ Add User"}
              </button>

            </div>

          </div>

          {/* Table Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 mt-8 p-6">

            <div className="flex flex-wrap justify-between items-center gap-4 mb-6">

              <div>
                <h2 className="text-xl font-bold text-slate-800">
                  Recent Users
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  View and manage your users
                </p>
              </div>

              <button
                onClick={book}
                className="bg-slate-900 hover:bg-slate-700 text-white px-5 py-2.5 rounded-xl font-medium transition"
              >
                ↻ Show Data
              </button>

            </div>

            <div className="overflow-x-auto">

              <table className="w-full text-left">

                <thead>
                  <tr className="bg-slate-100 text-slate-600 text-sm">
                    <th className="p-4 rounded-l-lg">ID</th>
                    <th className="p-4">First Name</th>
                    <th className="p-4">Last Name</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 rounded-r-lg">Actions</th>
                  </tr>
                </thead>

                <tbody>

                  {data.map((name, index) => {
                    return (
                      <tr key={name._id} className="border-b border-slate-100 hover:bg-slate-50 transition">

                        <td className="p-4 text-slate-500">
                          {index + 1}
                        </td>

                        <td className="p-4 font-semibold text-slate-800">
                          {name.fname}
                        </td>

                        <td className="p-4 text-slate-600">
                          {name.lname}
                        </td>

                        <td className="p-4">
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">
                            Active
                          </span>
                        </td>

                        <td className="p-4">
                          <div className="flex gap-3">

                            <button
                              onClick={() => eidat(name)}
                              className="bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                            >
                              Edit
                            </button>

                            <button
                              onClick={() => api(name)}
                              className="bg-red-50 text-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded-lg text-sm font-semibold transition"
                            >
                              Delete
                            </button>

                          </div>
                        </td>

                      </tr>
                    );
                  })}

                  {data.length === 0 && (
                    <tr>
                      <td colSpan="5" className="text-center p-8 text-slate-400">
                        No Data Found. Click Show Data.
                      </td>
                    </tr>
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Product;
