import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Shimmer } from "react-shimmer";
import { addItem } from "../utils/cartSlice";
import useRestaurant from "./useRestauant";

const RestaurantMenu = () => {
  const dispatch = useDispatch();

  const handleAdditem = (item) => {
    dispatch(addItem(item));
  };
  const param = useParams();
  const resdata = useRestaurant(param.id);
  console.log(resdata);

  console.log(param);
  if (resdata == null) {
    return <Shimmer />;
  } else
    return (
      <div className="m-3 sm:flex">
        <div className="mr-4 p-4 border-solid border-2 border-black-100 mt-3 shadow-lg  rounded-md h-fit">
          <h2>restaurant id:{param.id}</h2>
          <br></br>
          <h1 className="text-xl font-bold text-amber-500">
            {resdata?.data?.name}
          </h1>
          {/* <img
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              resdata.data?.cloudinaryImageId
            }
          /> */}
          <h2>{resdata?.data?.area}</h2>
          <h2>
            {resdata?.data?.areaSlug}({resdata?.data?.city})
          </h2>
        </div>
        <div>
          <ul>
            <h2 className="font-bold text-xl text-[#e68a3f]">Menu</h2>
            {Object.values(resdata?.data?.menu?.items).map((e) => {
              return (
                <ul className="restaurantmenuitem" key={e.id}>
                  <li
                    key={e.id}
                    className="border-solid border-2 border-black-100 mt-3 shadow-lg  rounded-md"
                  >
                    <span className="font-bold ">{e.name}:</span>{" "}
                    <b>{e.description}</b>
                    <p>{e.price / 100}rs</p>
                    {console.log(e)}
                    <button
                      className="bg-gray-200 rounded-md m-1 border-solid border-gray-300 border-2"
                      onClick={() => handleAdditem(e)}
                    >
                      Add Item
                    </button>
                  </li>
                </ul>
              );
            })}
          </ul>
        </div>
      </div>
    );
};
export default RestaurantMenu;
