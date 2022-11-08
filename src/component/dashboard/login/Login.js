import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../login/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Disabled, setDisabled] = useState(true);

  let Navigate = useNavigate();

  const validation = (e) => {
    if (email == "" || password == "") {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
    let mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    if (email.match(mailformat)) {
      alert("Valid email address!");
    } else {
      console.log("object");
    }
  };

  const loginHandle = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/auth/register", {
      method:'POST',
      headers:{'content-type':'application/json'},
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((res) => {
        Navigate("/dashboard")
        let ok=localStorage.setItem("loginToken", Math.random());

      })
      .catch((err) => {
        let ok=localStorage.setItem("loginToken", Math.random());
        Navigate("/dashboard");
      });
  };

  return (
    <div>
      <div className="container-fluid">
        <div className="row login">
          <div className="col-md-6">
            <div className="card ">
              <div className="card-header">
                <h2 className="card-title">Login</h2>
              </div>
              <form id="quickForm" noValidate="novalidate">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      placeholder="Enter email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onBlur={() => {
                        validation();
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      onBlur={() => {
                        validation();
                      }}
                    />
                  </div>
                  <div className="form-group mb-0"></div>
                </div>
                <div className="card-footer login-footer">
                  <button
                    className="btn loginBtn"
                    disabled={Disabled}
                    onClick={(e) => {
                      loginHandle(e);
                    }}
                  >
                    Login
                  </button>
                  <br></br>
                  <Link to="/signup">Register Now?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
