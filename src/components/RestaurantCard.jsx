import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ item }) => {
  const { avgRating, cuisines, costForTwo, name, cloudinaryImageId, sla, id } =
    item.info;
  const { slaString, lastMileTravelString } = sla;
  return (
    <Link to={`/restaurants/${id}`} className="res-card">
      <div className="res-img">
        <img
          src={
            CDN_URL +
            cloudinaryImageId
          }
          alt="res-img"
        />
      </div>
      <div className="res-name">{name}</div>
      <div className="res-cusines">
        {cuisines.map((ele, index) => (
          <span key={index}>{ele}</span>
        ))}
      </div>
      <div className="res-cost">{costForTwo}</div>
      <div className="res-rating">
        <span>
          <span className="star-icon">
            <i className="bi bi-star-fill"></i>
          </span>
          <span>{avgRating}</span>
        </span>
        <span>{lastMileTravelString}</span>
        <span>{slaString}</span>
      </div>
    </Link>
  );
};

export default RestaurantCard;
