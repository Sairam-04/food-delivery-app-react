import React from "react";

const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const {item} = props;
    const { aggregatedDiscountInfoV3 } = item?.info;
    return (
      <div className="relative">
        {aggregatedDiscountInfoV3 && (
          <div className="absolute top-0 left-0 bg-black text-white font-semibold px-2 py-1 rounded-lg">
            {aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}
          </div>
        )}
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default WithPromotedLabel;
