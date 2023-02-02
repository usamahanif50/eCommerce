import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState({ id: "00" });

  const [total, setTotal] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  const [totalCartItem, setTotalCartItem] = useState([]);
  const [amount, setAmount] = useState([]);
  const [totalAmount, setTotalAmount] = useState([]);
  console.log("4");
  useEffect(() => {
    // for (let i = 0; i <= total.length; i++) {

    // if (total[i] == undefined || total[i].id !== cart.id) {
    //   console.log("lklkl")
    // } else {

    // }
    // }

    setTotal((total) => [...total, cart]);
    console.log(total, cart.id);
    // console.log("total=> ",total[0])

  }, [cart]);
  useEffect(() => {
    setTotalAmount((totalAmount) => [...totalAmount, amount]);
    setTotalCartItem((totalCartItem) => [...totalCartItem, cartItem]);
  }, [cartItem, amount]);

  // console.log(typeof totalCartItem);
  return (
    <userContext.Provider
      value={{
        cart,
        setCart,
        total,
        setTotal,
        cartItem,
        setCartItem,
        totalCartItem,
        setTotalCartItem,
        amount,
        setAmount,
        totalAmount,
        setTotalAmount,
      }}
    >
      {children}
    </userContext.Provider>
    // <userContext.Provider value="usama">{children}</userContext.Provider>
  );
};
export default Context;
