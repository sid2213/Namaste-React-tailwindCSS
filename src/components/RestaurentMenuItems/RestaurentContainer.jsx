import React from "react";

const RestaurentContainer = ({ name, avgRating, totalRatingsString, costForTwoMessage }) => {
  return (
    <div className="restaurent-container">
      Order Online
      <div className="restaurentMenuDetail1">
        <div className="restaurentMenuDetail2">
          {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </div>

        <div className="restaurentdiv">
          <div className="restaurentdivflex">
            <div className="restaurentdivflex1"> </div>
            <div className="restaurentdivflex2"> </div>
            <div className="restaurentdivflex3"> </div>
          </div>
          <div className="restaurentdet">
            <div className="restaurentMenuDetail3">
              <div className="restaurentMenuDetail31"> Outlet </div>
              <div className="restaurentMenuDetail32" style={{ color: "grey" }}>
                Navrangpura ▾
              </div>
            </div>
            <div className="restaurentMenuDetail4">15-20 mins</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurentContainer;
