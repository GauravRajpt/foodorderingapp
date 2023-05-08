import { useEffect, useState } from "react";
import { FETCH_URL } from "../constants/restaurant";
const useRestaurant = (resID) => {
  const [restauantData, setrestaurantData] = useState(null);
  useEffect(() => {
    getrestaurant();
  }, []);

  async function getrestaurant() {
    console.log(resID);
    const data = await fetch(`${FETCH_URL}${resID}`);
    console.log(data);
    const json = await data.json();
    setrestaurantData(json);
  }
  console.log(restauantData);
  return restauantData;
};
export default useRestaurant;
