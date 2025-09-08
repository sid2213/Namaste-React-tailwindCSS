import React from "react";

const MenuDetailContainer = ({ items }) => {
  return (
    <div className="menu-detail-container">
      {items.map((item, index) => (
        <React.Fragment key={item?.card?.info?.id || index}>
          <div className="menu-detail-box">
            <div className="menu-detail-left">
              <div className="menu-detail-bestseller">
                <div className="veg-icon">
                  {item?.card?.info?.itemAttribute?.vegClassifier === 'VEG' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="#008300"
                      aria-label="Veg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="#008300" strokeWidth="2" fill="#008300" />
                    </svg>
                  )}
                  {item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG' && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="#d60000"
                      aria-label="Non-Veg"
                    >
                      <circle cx="12" cy="12" r="10" stroke="#d60000" strokeWidth="2" fill="#d60000" />
                    </svg>
                  )}
                  <span>{item?.card?.info?.itemAttribute?.vegClassifier}</span>
                </div>
              </div>

              <div className="menu-detail-name">{item?.card?.info?.name}</div>
              <div className="menu-detail-price">Rs {Number(item?.card?.info?.defaultPrice ? item?.card?.info?.defaultPrice : item?.card?.info?.price) / 100}</div>
              <div className="menu-detail-rating">
                {item?.card?.info?.ratings?.aggregatedRating?.rating}
              </div>
              <div className="menu-detail-description">
                <p>{item?.card?.info?.description}</p>
              </div>
            </div>

            <div className="menu-detail-right-image">
              <button className="menu-detail-right-image-button">
                <img
                  className="menu-detail-right-image-button-inimg"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${item?.card?.info?.imageId}`}
                  alt={item?.card?.info?.name}
                />
              </button>
            </div>
          </div>
          <div className="menu-detail-box-end"></div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default MenuDetailContainer;
