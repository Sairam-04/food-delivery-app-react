import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category }) => {
  const { card } = category?.card;
  const { title, itemCards } = card;
  return (
    <div className="flex flex-col gap-2 border-b-8 border-gray-200 py-3">
      <div className="flex justify-between">
        <h1 className="text-lg font-semibold">
            {title} ({itemCards.length})
        </h1>
        <div>
          <i className="bi bi-caret-down-fill"></i>
        </div>
      </div>
      <ItemList items={itemCards} />
    </div>
  );
};

export default RestaurantCategory;
