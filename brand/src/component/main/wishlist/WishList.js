import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { wishRemove } from "../../../store/wishlistSlice";

import "./wishlist.css";

const WishList = () => {
  const [Items, setItems] = useState();
  const [Data, setData] = useState("");
  const [Del, setDel] = useState(true);
  const [totalItem, setTotalItem] = useState(Data.length);

  const wishProduct = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  const deleteHandle = (e) => {
    dispatch(wishRemove(e));
  };
  // useEffect(() => {
  //   setDel(true);
  //   setData(total);
  //   setTotalItem(Data.length);
  // }, [Del]);

  return (
    <div className="container">
      <div className="row">
        <div class="cart-wrap col-md-12">
          <div>
            <div class="main-heading mb-10">My wishlist</div>
            <h2>{wishProduct.length}</h2>
            <div class="table-wishlist">
              <table cellpadding="0" cellspacing="0" border="0" width="100%">
                <thead>
                  <tr>
                    <th width="45%">Product Name</th>
                    <th width="15%">Unit Price</th>
                    <th width="15%">Stock Status</th>
                    <th width="15%"></th>
                    <th width="10%"></th>
                  </tr>
                </thead>

                {wishProduct &&
                  wishProduct.map((item, index) => (
                    <tbody>
                      <tr>
                        <td width="45%">
                          <div class="display-flex align-center">
                            <div class="img-product">
                              <img src={item.image} />
                            </div>
                            <div class="name-product">{item.title}</div>
                          </div>
                        </td>
                        <td width="15%" class="price">
                          ${item.price}
                        </td>
                        <td width="15%">
                          <span class="in-stock-box">In Stock</span>
                        </td>
                        <td width="15%">
                          <button class="round-black-btn small-btn">
                            Add to Cart
                          </button>
                        </td>
                        <td width="10%" class="text-center">
                          <a
                            class="trash-icon"
                            onClick={(e) => deleteHandle(item.id)}
                          >
                            <i class="far fa-trash-alt"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
