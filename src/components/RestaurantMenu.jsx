import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);  
  if (resInfo === null) return <Shimmer />;
  const { itemCards } =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const resData = resInfo?.data?.cards[2]?.card?.card?.info;
  const { name, costForTwoMessage, cuisines } = resData;
  return (
    <div>
      {resData && (
        <div>
          <h4>{name}</h4>
          <h5>{costForTwoMessage}</h5>
          <h5>{cuisines.join(", ")}</h5>
        </div>
      )}
      {itemCards.map((ele) => {
        return <div key={ele?.card?.info?.id}>{ele?.card?.info?.name}</div>;
      })}
    </div>
  );
};

export default RestaurantMenu;
