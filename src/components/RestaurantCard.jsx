import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ item }) => {
  const { avgRating, cuisines, costForTwo, name, cloudinaryImageId, sla } =
    item.info;
  const { slaString, lastMileTravelString } = sla;
  return (
    <>
      <div className="w-full h-[200px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={CDN_URL + cloudinaryImageId}
          alt="res-img"
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-lg font-semibold">{name}</div>
        <div className="bg-green-500 text-white flex gap-1 text-xs px-1 py-0.5 rounded">
          <span>{avgRating}</span>

          <i className="bi bi-star-fill"></i>
        </div>
      </div>
      <div className="flex gap-x-3 gap-y-1 flex-wrap">
        {cuisines.map((ele, index) => (
          <span key={index} className="bg-gray-200 px-1 py-0.5 rounded text-xs">
            {ele}
          </span>
        ))}
      </div>
      <div className="res-cost">{costForTwo}</div>
      <div className="res-rating">
        <span>{lastMileTravelString}</span>
        <span>{slaString}</span>
      </div>
      </>
  );
};

export default RestaurantCard;
