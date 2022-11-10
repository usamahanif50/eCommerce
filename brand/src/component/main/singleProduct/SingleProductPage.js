import React, { useEffect, useState, useContext } from "react";
import { userContext } from "../../../Context";
import { Link } from "react-router-dom";

import "../singleProduct/SingleProductPage.css";
import { useParams } from "react-router-dom";

export default function ProductPage() {
  const [Quantity, setQuantity] = useState(1);
  const [Data, setData] = useState("");
  const { cart, setCart, total, setTotal } = useContext(userContext);

  const { id } = useParams();
  console.log(id);

  const ok = (e) => {
    setCart(e);
  };

  useEffect(() => {
    fetch(`http://localhost:3000/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  const plusQuantity = () => {
    setQuantity(Quantity + 1);
  };
  const minusQuantity = () => {
    if (Quantity > 1) {
      setQuantity(Quantity - 1);
    }
  };

  return (
    <>
      <div className="mainProduct">
        <div className="container productPage">
          <div className="row">
            <div className="col-md-6 left">
              <img src={Data.image}></img>
            </div>
            <div className="col-md-6 right">
              <div>
                <strong>
                  <h3 className="pName">{Data.title}</h3>
                </strong>
                <h4>${Data.price}</h4>
              </div>
              <div className="reviews">
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>
                <i class="fa fa-star-o"></i>

                <p>Reviews</p>
              </div>
              <p>Usually ships within 5 to 7 working days</p>
              <div className="quantity">
                <button onClick={(e) => minusQuantity(e)}>
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                <h3>{Quantity}</h3>
                <button onClick={(e) => plusQuantity(e)}>
                  <i class="fa fa-plus" aria-hidden="true"></i>
                </button>
              </div>

              <div>
                <button className="wishlist" onClick={(e) => ok(Data)}>
                  Wishlist <i class="fa fa-heart-o"></i>
                </button>
                <br></br>
                <Link to="">
                  <button className="addToCart">Add to cart</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="container description">
          <div className="row">
            <h2>Description</h2>

            <div className="col-md-12">
              <h5>{Data.description}</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
