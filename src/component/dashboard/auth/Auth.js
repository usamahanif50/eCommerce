import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../login/Login";

const Auth = () => {
  let authToken = localStorage.getItem("loginToken");
  console.log(authToken);
  return (
    <div>{authToken ? <Outlet /> : <Navigate to={"/login"}></Navigate>}</div>
  );
};

export default Auth;
