import RestraunCard from "./RestraunCard";
import { useEffect, useState, useContext } from "react";
import { restaurant } from "../constants/restaurant";
import ShimmerUI from "./ShimmerUI";
import useIsonline from "../utils/useIsonline";
import userContext from "../utils/Usercontext";

const Body = () => {
  const user = useContext(userContext);
  function handelclick(restaurant, searcttext) {
    const data = restaurant.filter((res) => {
      return res.data.name.toLowerCase().includes(searcttext);
    });

    setFilterRestaurantlist(data);
  }

  useEffect(() => {
    getRestaurantData();
  }, []);
  // fetching the data from swiggy's api
  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=29.9456906&lng=78.16424780000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    console.error();
    if (json?.data?.cards[2]) {
      setRestaurantlist(json?.data?.cards[2]?.data?.data?.cards);
      setFilterRestaurantlist(json?.data?.cards[2]?.data?.data?.cards);
    } else if (json?.data?.cards[1]) {
      setRestaurantlist(json?.data?.cards[1]?.data?.data?.cards);
      setFilterRestaurantlist(json?.data?.cards[1]?.data?.data?.cards);
    } else {
      setRestaurantlist(json?.data?.cards[0]?.data?.data?.cards);
      setFilterRestaurantlist(json?.data?.cards[0]?.data?.data?.cards);
    }
    console.log(filterrestaurantlist);
  }

  const [search, setSearch] = useState("");
  const [restaurantlist, setRestaurantlist] = useState(null);
  const [filterrestaurantlist, setFilterRestaurantlist] = useState(null);
  const isOnline = useIsonline(); //if there is no internet
  if (!isOnline) {
    return (
      <h1 className="text-red-600 font-bold">
        Please, check your internet connection
      </h1>
    );
  }
  if (restaurantlist == null && filterrestaurantlist == null) {
    return (
      <>
        <div>
          <input
            type="text"
            className="border-solid border-2 border-black-100 shadow-lg m-3 rounded-md"
          ></input>

          <button
            className="border-solid border-2 border-black-100 shadow-lg m-3 rounded-md"
            onClick={() => {
              handelclick(restaurantlist, search.toLowerCase());
            }}
          >
            Search
          </button>
        </div>
        <div className="m-3 bg-white">
          <ShimmerUI />
        </div>
      </>
    );
  } else
    return (
      <>
        <div className="m-3">
          <input
            type="text"
            className="border-solid border-2 border-black-100 shadow-lg m-3 rounded-md"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>

          <button
            className="border-solid border-2 border-black-100 shadow-lg m-3 rounded-md"
            onClick={() => {
              handelclick(restaurantlist, search.toLowerCase());
            }}
          >
            Search
          </button>
        </div>
        <div className="flex flex-wrap justify-center border-solid border-2 border-black-100 shadow-lg m-3 p-3 rounded-md">
          {filterrestaurantlist.map((el) => {
            console.log(el.data);
            return <RestraunCard {...el.data} key={el.data.id} />;
          })}
        </div>
      </>
    );
};
export default Body;
