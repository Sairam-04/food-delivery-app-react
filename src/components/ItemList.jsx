import React from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log(items)
  return (
    <div className="flex flex-col gap-6 py-3">
      {items.map((item) => {
        return (
          <div key={item?.card?.info?.id} className="flex w-full">
            <div className="w-2/5">
              <img src={CDN_URL + item?.card?.info?.imageId} className="w-4/5 object-cover rounded-lg" alt="res-img" />
            </div>
            <div className="w-4/5">
              <div className="font-semibold text-lg">{item?.card?.info?.name}</div>
              <div className="font-semibold flex gap-1"><i className="bi bi-currency-rupee"></i>{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100} </div>
              <div className="text-green-600 flex gap-1"><i className="bi bi-star-fill"></i>{item?.card?.info?.ratings?.aggregatedRating?.rating}</div>
              <div>{item?.card?.info?.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;