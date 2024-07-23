import { useEffect, useState } from "react";
import { API_ENDPOINT } from "./constants";

const useRestaurant = () => {
  const [resListItems, setResListItems] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_ENDPOINT);
    const json = await data.json();
    setResListItems(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  return resListItems;
};

export default useRestaurant;
