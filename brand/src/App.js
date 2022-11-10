import React from "react";
import Main from "./component/main/Main";
import DashboardHome from "./component/dashboard/home/Home";
import { Routes, Route, Link } from "react-router-dom";
import OpenImage from "./component/dashboard/openImage/OpenImage";
import Login from "./component/dashboard/login/Login";
import Signup from "./component/dashboard/signup/Signup";
import Auth from "./component/dashboard/auth/Auth";
import { Home } from "./component/main/home/Home";
import Navbar from "./component/main/navbar/Navbar";
import { AddtoCart } from "./component/main/addTocart/AddtoCart";

function App() {
  return (
    <div className="App">
      <AddtoCart/>
      {/* <Main></Main>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
      <Routes>
        <Route path={"/login"} element={<Login />}></Route>
        <Route path={"/signup"} element={<Signup />}></Route>
        <Route element={<Auth />}>
          <Route path={"/dashboard/*"} element={<DashboardHome />}></Route>
        </Route>
      </Routes> */}
    </div>
  );
}

export default App;
