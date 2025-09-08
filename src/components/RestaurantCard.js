import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData?.info;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      {console.log(CDN_URL, "dshvchj")}
      {resData?.info?.cloudinaryImageId && (
        <img
          className="res-logo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="Biryani"
        />
      )}

      {/* <h3 className= "card-name">{name}</h3>
      <h4 style={{color:"grey", fontSize:"12px"}}>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{sla?.slaString}</h4> */}
      <div></div>
      <div className="res-card new-res-card">
        <div className="res-card-content">
          <div className="res-card-header">
            <span className="res-card-title">{name}</span>
          </div>
          <div className="res-card-row">
            <span className="res-card-rating">
              <span className="res-card-rating-icon">★</span> {avgRating}
            </span>
            <span className="res-card-dot">•</span>
            <span className="res-card-time">{sla?.slaString}</span>
          </div>
          <div className="res-card-cuisines">{cuisines.join(", ")}</div>
          {/* <div className="res-card-area">{areaName || locality}</div> */}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
