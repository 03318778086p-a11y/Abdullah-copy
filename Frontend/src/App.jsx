import React from "react";
import { Routes, Route } from "react-router-dom"
import Signup from "./pages/signup.jsx"
import LoginAccount from "./pages/LoginAccount.jsx"
import Product from "./pages/Product.jsx"
import Users from "./pages/Users.jsx";

const App = () => {
  return (
    <div>
      <Routes>
       
        <Route path="/" element={<Signup />} />
        <Route path="loginAccount"element={<LoginAccount/>}/>
        <Route path="/product"element={<Product/>}/>
        < Route path="Users"element={<Users/>}/>
      </Routes>
    </div>
  );
};

export default App;