
import React, { useRef } from "react";

const DealsContainer = ({ deals }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 260;
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="deals-container">
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <div className="deals-title">Deals for you</div>
        <div>
          <button className="deals-scroll-btn" onClick={() => scroll("left")} aria-label="Scroll left">&#8592;</button>
          <button className="deals-scroll-btn" onClick={() => scroll("right")} aria-label="Scroll right">&#8594;</button>
        </div>
      </div>
      <div className="deals-column-scroll" ref={scrollRef}>
        {deals.map((deal, index) => (
          <div className="deals-items" key={deal?.info?.offerIds?.[0] || deal?.info?.header || index}>
            <div className="deals-item-row">
              <div className="deals-item-row-icon">
                <img
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${deal?.info?.offerLogo}`}
                  alt={deal?.info?.header}
                  width="48px"
                />
              </div>
              <div className="deals-item-detail">
                <div className="deals-item-row-detail1">{deal?.info?.header}</div>
                <div className="deals-item-row-detail2">{deal?.info?.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsContainer;
