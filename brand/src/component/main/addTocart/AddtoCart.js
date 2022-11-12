import React, { useContext, useState, useEffect } from "react";
import "./AddtoCart.css";
import { useSelector, useDispatch } from "react-redux"
import { inCrement, deCrement } from "../../../Ducks/action/index"
import { userContext } from "../../../Context"

export const AddtoCart = () => {
  const [Del, setDel] = useState(false)
  const [Data, setData] = useState([])
  const [ItemQuantity, setItemQuantity]=useState(0)
  const { cart, setCart, total, setTotal, cartItem, setCartItem, totalCartItem, setTotalCartItem } = useContext(userContext);

  const number = useSelector((state) => state.changeQunatity)
  const dispatch = useDispatch()


  const deleteHandle = (e) => {
    const index = totalCartItem.indexOf(e);
    if (index > -1) {
      totalCartItem.splice(index, 1);
    }
    setDel(false);
  };
  useEffect(() => {
    setDel(true);
    setData(totalCartItem);
    setItemQuantity(Data.length)
  }, [Del]);

  return (
    <>
      <div className="cart-wrap">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="main-heading">Shopping Cart</div>
              <div className="main-heading"><h4>Total Item {ItemQuantity}</h4></div>
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
                    {Data && Data.map((item, index) => (
                      < tr key={index}>
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
                            <div className="qtyminus" onClick={() => { dispatch(deCrement(Number(1))) }}>-</div>
                            <input
                              type="text"
                              name="quantity"
                              value={number}
                              className="qty"
                            />
                            <div className="qtyplus" onClick={() => { dispatch(inCrement(Number(1))) }}>+</div>
                          </form>
                        </td>
                        <td>
                          <div className="total">${item.price * number}</div>
                        </td>
                        <td width="10%" class="text-center" onClick={(e) => deleteHandle(item) }>
                          <a
                            class="trash-icon"

                          >
                            <i class="far fa-trash-alt"></i>
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
