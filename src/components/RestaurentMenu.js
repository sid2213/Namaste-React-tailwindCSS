import React, { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import RestaurentContainer from "./RestaurentMenuItems/RestaurentContainer";
import DealsContainer from "./RestaurentMenuItems/DealsContainer";
import MenuTitleContainer from "./RestaurentMenuItems/MenuTitleContainer";
import MenuDetailContainer from "./RestaurentMenuItems/MenuDetailContainer";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const RestaurentMenu = () => {
  const { resId } = useParams();
  const restaurentData = useRestaurentMenu(resId);

  if (restaurentData === null) return <Shimmer />;

  const { avgRating, totalRatingsString, costForTwoMessage } =
    restaurentData?.data?.cards[2]?.card?.card?.info;

  const deals =
    restaurentData?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
      ?.offers || [];

  // Find the first REGULAR.cards entry with itemCards
  const regularCards =
    restaurentData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards ||
    [];
  const menuSection = regularCards.find(
    (c) => c?.card?.card?.itemCards && Array.isArray(c.card.card.itemCards)
  );
  const itemCards = menuSection?.card?.card?.itemCards || [];

  return (
    <div className="restaurentMenu">
      <div className="restaurentMenuName">
        {restaurentData?.data?.cards[0]?.card?.card?.text}
      </div>

      <RestaurentContainer
        avgRating={avgRating}
        totalRatingsString={totalRatingsString}
        costForTwoMessage={costForTwoMessage}
      />

      <DealsContainer deals={deals} />

      <MenuTitleContainer />

      <MenuDetailContainer items={itemCards} />
    </div>
  );
};

export default RestaurentMenu;
