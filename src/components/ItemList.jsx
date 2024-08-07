import React from "react";
import FoodItem from "./FoodItem";


const ItemList = ({ items }) => {
  
  return (
    <div className="flex flex-col gap-6 py-3 relative">
      {items.map((item) => {
        return (
          <FoodItem item={item} key={item?.card?.info?.id} showAddItem = {true} />
        );
      })}
    </div>
  );
};

export default ItemList;
