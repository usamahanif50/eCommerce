import React, { useState, useContext } from "react"
import { userContext } from "../../../Context"
import "./wishlist.css"



const WishList = () => {
    const [Items, setItems] = useState()
    const { cart, setCart, total, setTotal } = useContext(userContext)
    console.log(total)
    return (
        <div className="container">
            <div className="row">
                <div class="cart-wrap col-md-12">

                    <div >
                        <div class="main-heading mb-10">My wishlist</div>
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


                                {
                                    total.map((item, index) => (
                                        <tbody>
                                            <tr>
                                                <td width="45%">
                                                    <div class="display-flex align-center">
                                                        <div class="img-product">
                                                            <img src={item.image} />
                                                        </div>
                                                        <div class="name-product">
                                                           {item.title}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td width="15%" class="price">${item.price}</td>
                                                <td width="15%"><span class="in-stock-box">In Stock</span></td>
                                                <td width="15%"><button class="round-black-btn small-btn">Add to Cart</button></td>
                                                <td width="10%" class="text-center"><a href="#" class="trash-icon"><i class="far fa-trash-alt"></i></a></td>
                                            </tr>
                                           
                                        </tbody>



                                    ))
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishList
