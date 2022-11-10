import { useReducer } from "react";

export const ACTION = {
  ADDTOCART: "add",
  REMOVEFROMCART: "remove",
  CHANGECARTQUANTITY: "changequantity",
};

export const reduce = (total, action) => {
  console.log(total);
};
