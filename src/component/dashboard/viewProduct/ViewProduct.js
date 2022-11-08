import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OpenImage from "../openImage/OpenImage";



const ViewProduct = () => {
  const [Data, setData] = useState("");
  const [update, setupdate] = useState("");
  const [OpenImages, setOpenImage] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        console.log(data)
      });
    console.log(Data[8])

  }, [update]);

  const deletehandle = (id) => {
    setupdate("refetch");
    fetch(`http://localhost:3000/products/${id}`, { method: "DELETE" })
      .then((res) => setupdate("updated"))
      .catch((error) => console.log(error));
  };

  const OpenImageHandle = (e) => {
    setOpenImage(e);
  };

  let desCSS = {
    maxWidth: "200px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: " nowrap",
  };

  let x = 12345678;
  x = x.toString();
  let lastThree = x.substring(x.length - 3);
  let otherNumbers = x.substring(0, x.length - 3);
  if (otherNumbers != "") lastThree = "," + lastThree;
  let res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <table className="table table-hover text-nowrap">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {Data &&
                  Data.map((item, index) => {
                    return (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>
                          <Link
                            className="img-fluid z-depth-1"
                            data-toggle="modal"
                            data-target="#modal1"
                            target="_blank"
                            to="/ok"
                            onClick={(e) => {
                              OpenImageHandle(item.image)
                              //upload image
                              // OpenImageHandle(item.image[0].replace("blob:",""));
                            }}
                          >
                            View Image
                          </Link>
                        </td>
                        <td>{item.price} PKR</td>
                        <td>{item.category}</td>
                        <td style={desCSS}>{item.description}</td>
                        <td>
                          <Link to={`/dashboard/editproduct/${item.id}`}>
                            <button className="btn loginBtn" style={{ width: "25%" }}>Edit</button>
                          </Link>

                          <button
                            className="btn btn-danger ml-3"
                            onClick={() => {
                              deletehandle(item.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {OpenImages && <OpenImage imagesrc={OpenImages} />}
    </>

  );
};

export default ViewProduct;
