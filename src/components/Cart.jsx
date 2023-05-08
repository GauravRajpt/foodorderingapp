import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

export default function Cart() {
  const store = useSelector((store) => store.cart.item);
  console.log(store);
  const dispatch = useDispatch();
  return (
    <div className="cartpage">
      <button
        className="bg-gray-200"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Clear Cart
      </button>
      <div className="flex">
        {store.map((item) => {
          return (
            <div className="border-solid border-2 border-gray-300 w-48 h-56 m-2 ">
              <img
                src={
                  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                  item.cloudinaryImageId
                }
              ></img>
              <h1 className="text-xl font-bold">{item.name}</h1>
              <h1>rupees: {item.price / 100}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
