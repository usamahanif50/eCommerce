import React, { useState, useEffect } from "react";

const ViewUser = () => {
  const [Data, setData] = useState("");
  const [password, setPassword] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  const chk = (ternary) => !ternary;

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body table-responsive p-0">
                <table className="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Number</th>
                      <th>E-Mail</th>
                      <th>Password</th>
                      <th>Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Data && Data.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.number}</td>
                          <td>{item.email}</td>
                          <td>
                            <input
                              type="password"
                              value={item.password}
                              style={{ border: "none" }}
                            ></input>
                            {chk == true ? (
                              <i className="fa fa-eye" aria-hidden="true"></i>
                            ) : (
                              <i
                                className="fa fa-eye-slash"
                                aria-hidden="true"
                                onClick={(e) => {}}
                              ></i>
                            )}
                          </td>
                          <td>{item.category}</td>
                          <td></td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
