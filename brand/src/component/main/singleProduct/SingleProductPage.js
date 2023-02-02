import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../singleProduct/SingleProductPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../../../store/CartSlice";
import { wishAdd } from "../../../store/wishlistSlice";

export default function ProductPage() {
  const [Quantity, setQuantity] = useState(1);
  const [Data, setData] = useState(0);

  const cartChk = useSelector((state) => state.cart);

  const { id } = useParams();
  // console.log(id);

  const dispatch = useDispatch();

  const addHandle = (product) => {
    dispatch(add(product));
  };

  const addwishlisthandle = (e) => {
    dispatch(wishAdd(e));
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

  const cartHandle = (e, a) => {
    // setCartItem(e);
    // setAmount(a);
    setQuantity(1);
    console.log(e, a);
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
                <button
                  className="wishlist"
                  onClick={(e) => addwishlisthandle(Data)}
                >
                  Wishlist <i class="fa fa-heart-o"></i>
                </button>
                <br></br>

                <button className="addToCart" onClick={(e) => addHandle(Data)}>
                  Add to cart
                </button>
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
