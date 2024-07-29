import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import WithPromotedLabel from "./HOC/WithPromotedLabel"

const Body = () => {
  const resListItems = useRestaurant();
  const [searchText, setSearchText] = useState("");
  const [filteredRes, setFilteredRes] = useState(resListItems);
  useEffect(() => {
    setFilteredRes(resListItems);
  }, [resListItems]);
  const filterTopRated = () => {
    const filteredItems = resListItems.filter((res) => res.info.avgRating > 4);
    setFilteredRes(filteredItems);
  };
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };
  const searchClick = () => {
    const filterItems = resListItems.filter((res) =>
      res.info.name.toLowerCase().includes(searchText)
    );
    setFilteredRes(filterItems);
  };
  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        {" "}
        Looks like you are offline!! Please Check your internet Connection
      </h1>
    );
  return (
    <div className="flex flex-col sm:my-4">
      <div className="flex gap-5 items-center">
        {/* <div className="search-div">
          <input
            type="text"
            name="search"
            placeholder="Search Restaurant"
            value={searchText}
            onChange={handleChange}
          />
          <button onClick={() => searchClick()}>Search</button>
        </div> */}
        <div>Filters</div>
        <button
          className="border-2 px-2 py-1 rounded-md hover:bg-red-500 hover:text-white"
          onClick={() => filterTopRated()}
        >
          Top Rated Restaurants
        </button>
      </div>
      {resListItems.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="flex gap-x-12 gap-y-6 py-2 flex-wrap">
          {filteredRes.map((item, index) => {
            return (
              <Link
                to={`/restaurants/${item.info.id}`}
                key={item.info.id}
                className="flex flex-col gap-2 bg-slate-50 rounded-lg w-[250px] p-2 max-w-[250px] min-h-[350px] hover:shadow-2xl hover:border-2"
              >
                {item?.info?.aggregatedDiscountInfoV3 && Object.keys(item?.info?.aggregatedDiscountInfoV3).length === 0 ? 
                  <RestaurantCard item={item} />: 
                  <RestaurantCardPromoted item={item} /> 
                }
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Body;
