import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Product.css";
const products = () => {
  const [Data, setData] = useState("");
  const [currenceyIcon, setcurrenceyIcon] = useState("$");
  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  const productHeader = {};

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 productHeader">
            <h2>Category Name</h2>
            <h5>Category desciption</h5>
          </div>
        </div>
      </div>
      <div className="container mainProducts">
        <div className="row"></div>
        <div className="row">
          {Data &&
            Data.map((item, index) => (
              <Link to={`/product/${item.id}`}>
                <div className="card col-md-12" style={{ width: "15rem" }}>
                  <img
                    style={{ width: "230px", height: "230px" }}
                    className="card-img-top"
                    src={item.image}
                    alt="Card image cap"
                  />
                  <div className="card-body">
                    <p className="card-text name">{item.title}</p>
                    <p className="card-text price">
                      {currenceyIcon}
                      {item.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default products;
