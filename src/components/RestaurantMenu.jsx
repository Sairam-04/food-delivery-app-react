import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);
  const showIndexClick = (index) => {
    setShowIndex(index);
  };
  if (resInfo === null) return <Shimmer />;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const resData = resInfo?.data?.cards[2]?.card?.card?.info;
  const {
    name,
    costForTwoMessage,
    cuisines,
    city,
    areaName,
    totalRatingsString,
    sla,
    isOpen,
    locality,
    avgRating,
  } = resData;
  const { lastMileTravelString, slaString } = sla;
  return (
    <div className="w-3/5 mx-auto my-4 p-5 shadow-2xl bg-slate-100 rounded-lg">
      {resData && (
        <div className="flex justify-between py-5">
          <div className="flex flex-col">
            <h3 className="font-semibold text-2xl">{name}</h3>
            <div className="flex gap-2">
              {cuisines.map((ele, index) => (
                <span key={index}>
                  {ele}
                  {index < cuisines.length - 1 && ", "}
                </span>
              ))}
            </div>

            <h5>
              {areaName}, {locality}, {city}
            </h5>
            <div className="flex gap-4">
              <span className="flex gap-2">
                <i className="bi bi-pin-map-fill text-gray-500"></i>
                <span>{lastMileTravelString}</span>
              </span>
              <span className="flex gap-2">
                <i className="bi bi-clock-fill text-gray-500"></i>
                <span>{slaString}</span>
              </span>
              <span>{costForTwoMessage}</span>
            </div>
          </div>
          <div className="text-center">
            <div className="rounded-lg flex flex-col gap-2 px-2 py-3 shadow-md text-center bg-slate-200">
              <div className="flex gap-2 text-green-600 text-center border-b border-gray-400">
                <i className="bi bi-star-fill"></i>
                <span>{avgRating}</span>
              </div>
              <div className="text-xs text-gray-600">{totalRatingsString}</div>
            </div>
          </div>
        </div>
      )}
      <hr />
      <div className="flex flex-col gap-6 py-3">
        {categories.map((ele, index) => {
          return (
            <RestaurantCategory
              key={ele?.card?.card?.title }
              index={index}
              category={ele}
              showItems = {index === showIndex ? true : false}
              showIndexClick = {showIndexClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
