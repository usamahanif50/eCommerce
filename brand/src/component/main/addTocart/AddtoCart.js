import React from "react";
import "./AddtoCart.css";

export const AddtoCart = () => {
  return (
    <>
      <div className="cart-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-heading">Shopping Cart</div>
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
                    <tr>
                      <td>
                        <div className="display-flex align-center">
                          <div className="img-product">
                            <img
                              src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg"
                              alt
                              className="mCS_img_loaded"
                            />
                          </div>
                          <div className="name-product">
                            Apple iPad Mini
                            <br />
                            G2356
                          </div>
                          <div className="price">$1,250.00</div>
                        </div>
                      </td>
                      <td className="product-count">
                        <form action="#" className="count-inlineflex">
                          <div className="qtyminus">-</div>
                          <input
                            type="text"
                            name="quantity"
                            defaultValue={1}
                            className="qty"
                          />
                          <div className="qtyplus">+</div>
                        </form>
                      </td>
                      <td>
                        <div className="total">$6,250.00</div>
                      </td>
                      <td>
                        <a href="#" title>
                          <img
                            src="images/icons/delete.png"
                            alt
                            className="mCS_img_loaded"
                          />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="display-flex align-center">
                          <div className="img-product">
                            <img
                              src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg"
                              alt
                              className="mCS_img_loaded"
                            />
                          </div>
                          <div className="name-product">
                            Apple iPad Mini
                            <br />
                            G2356
                          </div>
                          <div className="price">$1,250.00</div>
                        </div>
                      </td>
                      <td className="product-count">
                        <form action="#" className="count-inlineflex">
                          <div className="qtyminus">-</div>
                          <input
                            type="text"
                            name="quantity"
                            defaultValue={1}
                            className="qty"
                          />
                          <div className="qtyplus">+</div>
                        </form>
                      </td>
                      <td>
                        <div className="total">$6,250.00</div>
                      </td>
                      <td>
                        <a href="#" title>
                          <img
                            src="images/icons/delete.png"
                            alt
                            className="mCS_img_loaded"
                          />
                        </a>
                      </td>
                    </tr>
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
                  {/* /.btn-cart-totals */}
                </form>
                {/* /form */}
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
