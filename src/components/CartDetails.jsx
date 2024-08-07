import React from "react";
import FoodItem from "./FoodItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../services/cartSlice";

const CartDetails = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex-col gap-10 w-3/5 mx-auto py-5 my-4 bg-gray-100 p-4 rounded-lg">
      <div className="flex justify-between pb-6 pt-4 items-center">
        <div className="invisible">cartitems</div>
        <div className="text-xl font-semibold text-center">
          Cart - ({cartItems && cartItems.length} items)
        </div>
        {cartItems && cartItems.length === 0 ? (
          <div className="invisible">showcart</div>
        ) : (
          <button
            onClick={clearCartItems}
            className="px-4 py-2 bg-red-500 text-white rounded shadow-xl"
          >
            Clear Cart
          </button>
        )}
      </div>

      <div className="flex flex-col gap-4">
        {cartItems && cartItems.length > 0 ? (
          cartItems.map((item) => (
            <>
              <FoodItem
                showAddItem={false}
                item={item}
                key={item?.card?.info?.id}
              />
              <hr />
            </>
          ))
        ) : (
          <div className="text-lg font-semibold text-center py-5">
            {" "}
            There are no items please add some items
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDetails;
