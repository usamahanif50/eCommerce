import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setusername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [Disabled, setDisabled] = useState(true);

  let navigate = useNavigate();

  const validation = (e) => {
    if (email == "" || password == "" || username == "" || number == "") {
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

  const signupHandle = (e) => {
    fetch("http://localhost:3000/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        console.log("true");
        navigate("/login");
      })
      .catch((err) => {
        console.log("error");
      });
    e.preventDefault();
  };
  return (
    <div>
      <div className="container-fluid">
        <div className="row login">
          <div className="col-md-6">
            <div className="card ">
              <div className="card-header">
                <h2 className="card-title">Signup</h2>
              </div>
              <form id="quickForm" noValidate="novalidate">
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInput">Username</label>
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      id="exampleInput"
                      placeholder="Enter Username"
                      onChange={(e) => {
                        setusername(e.target.value);
                      }}
                      onBlur={() => {
                        validation();
                      }}
                    />
                  </div>

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
                      placeholder="Enter New Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      onBlur={() => {
                        validation();
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">
                      Retype-Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Retype-Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      onBlur={() => {
                        validation();
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Number</label>
                    <input
                      type="number"
                      name="number"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter Number Phone"
                      onChange={(e) => {
                        setNumber(e.target.value);
                      }}
                      onBlur={() => {
                        validation();
                      }}
                    />
                  </div>
                  <div className="form-group mb-0"></div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn loginBtn"
                    disabled={Disabled}
                    onClick={(e) => {
                      signupHandle(e);
                    }}
                  >
                    Signup
                  </button>
                  <br />
                  <Link to="/login">Already have an Account?</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
