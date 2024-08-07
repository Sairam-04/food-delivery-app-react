import { CDN_URL, DUMMY_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../services/cartSlice";
import { useState } from "react";

const FoodItem = ({ item, showAddItem }) => {
  const [popupOpen, setPopUpOpen] = useState(false);
  const popUpClick = () => {
    setPopUpOpen(!popupOpen);
  };
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    popUpClick()
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex w-full">
        <div className="w-2/5 relative">
          <img
            src={
              item?.card?.info?.imageId
                ? CDN_URL + item.card.info.imageId
                : DUMMY_IMG
            }
            className="w-4/5 object-cover rounded-lg"
            alt="res-img"
          />
          {showAddItem && (
            <button
              className="px-3 py-1 bg-black text-white shadow-lg absolute top-0 left-16 rounded-lg"
              onClick={popUpClick}
            >
              Add +
            </button>
          )}
        </div>
        <div className="w-4/5">
          <div className="font-semibold text-lg">{item?.card?.info?.name}</div>
          <div className="font-semibold flex gap-1">
            <i className="bi bi-currency-rupee"></i>
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}{" "}
          </div>
          <div className="text-green-600 flex gap-1">
            <i className="bi bi-star-fill"></i>
            {item?.card?.info?.ratings?.aggregatedRating?.rating}
          </div>
          <div>{item?.card?.info?.description}</div>
        </div>
      </div>
      {popupOpen && (
        <div className="flex gap-3 items-center">
          <div>
            {" "}
            Are you Sure you want to Add this Item to the Cart! Please Confirm
          </div>
          <button
            className="px-3 py-1 bg-green-500 text-white shadow-lg rounded-lg"
            onClick={() => handleAddItem(item)}
          >
            Confirm
          </button>
          <button
            className="px-3 py-1 bg-red-500 text-white shadow-lg rounded-lg"
            onClick={popUpClick}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodItem;
