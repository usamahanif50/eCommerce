import React, { useState, useEffect } from "react";
import "./AddtoCart.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../../store/CartSlice";

export const AddtoCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeHandle = (product) => {
    dispatch(remove(product));
  };

  const deleteHandle = (e) => {};

  useEffect(() => {}, []);

  // console.log("AMount => " + amount);
  return (
    <>
      <div className="cart-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-heading">Shopping Cart</div>
              <div className="main-heading">
                <h4>Total Item {cart.length}</h4>
              </div>
              <div className="table-cart">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cart &&
                      cart.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <div className="display-flex align-center">
                              <div className="img-product">
                                <img
                                  src={item.image}
                                  alt
                                  className="mCS_img_loaded"
                                />
                              </div>
                              <div className="name-product">
                                {item.title}
                                <br />
                                G2356
                              </div>
                              <div className="price">${item.price}</div>
                            </div>
                          </td>
                          <td className="product-count">
                            <form action="#" className="count-inlineflex">
                              <div
                                className="qtyminus"
                                // ======================REDUX===================
                                onClick={() => {
                                  // console.log(Number(ok[index]) - 1);
                                }}
                              >
                                -
                              </div>

                              <div className="qtyplus">+</div>
                            </form>
                          </td>
                          <td>
                            <div className="total">
                              {item.price}
                            </div>
                          </td>
                          <td
                            width="10%"
                            class="text-center"
                            onClick={(e) => deleteHandle(item)}
                          >
                            <a class="trash-icon">
                              <i
                                class="far fa-trash-alt"
                                onClick={(e) => {
                                  removeHandle(item.id);
                                }}
                              ></i>
                            </a>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="coupon-box">
                  <form action="#" method="get" acceptCharset="utf-8">
                    <div className="coupon-input">
                      <input
                        type="text"
                        name="coupon code"
                        placeholder="Coupon Code"
                      />
                      <button type="submit" className="round-black-btn">
                        Apply Coupon
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              {/* /.table-cart */}
            </div>
            {/* /.col-lg-8 */}
            <div className="col-lg-4">
              <div className="cart-totals">
                <h3>Cart Totals</h3>
                <form action="#" method="get" acceptCharset="utf-8">
                  <table>
                    <tbody>
                      <tr>
                        <td>Subtotal</td>
                        <td className="subtotal">$2,589.00</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td className="free-shipping">Free Shipping</td>
                      </tr>
                      <tr className="total-row">
                        <td>Total</td>
                        <td className="price-total">$1,591.00</td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="btn-cart-totals">
                    <a href="#" className="update round-black-btn" title>
                      Update Cart
                    </a>
                    <a href="#" className="checkout round-black-btn" title>
                      Proceed to Checkout
                    </a>
                  </div>
                </form>
              </div>
              {/* /.cart-totals */}
            </div>
            {/* /.col-lg-4 */}
          </div>
        </div>
      </div>
    </>
  );
};
