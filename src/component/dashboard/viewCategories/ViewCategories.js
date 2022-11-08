import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../viewCategories/viewCategories.css";
const ViewCategories = () => {
  const [Data, setData] = useState();
  const [Update, setUpdate] = useState();

  let desCSS = {
    maxWidth: "250px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: " nowrap",
  };

  useEffect(() => {
    fetch("http://localhost:3000/category")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [Update]);

  const deletehandle = (id) => {
    setUpdate("");
    fetch(`http://localhost:3000/category/${id}`, { method: "DELETE" })
      .then((response) => {
        setUpdate("updated");
        console.log(response);
      })
      .catch((error) => {});
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Category</th>
                  <th>Sub Category</th>
                  <th>Category Description</th>
                </tr>
              </thead>
              <tbody>
                {Data &&
                  Data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.categoryName}</td>
                      <td>{item.subcategory}</td>
                      <td style={desCSS}>{item.categoryDescription}</td>

                      <td>
                        <Link to={`/dashboard/editcategory/${item.id}`}>
                          <button className="btn loginBtn" style={{width:"20%"}}>Edit</button>
                        </Link>

                        <button
                          className="btn btn-danger ml-3"
                          onClick={(e) => {
                            deletehandle(item.id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewCategories;
