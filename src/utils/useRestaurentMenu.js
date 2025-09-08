import React, { useEffect, useState } from "react";
import { SWIGGY_MENU_API_BASE } from "./constants";

const useRestaurentMenu = (resId) => {
  const [restaurentData, setRestaurentData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${SWIGGY_MENU_API_BASE}${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setRestaurentData(json);
  };

  return restaurentData;
};

export default useRestaurentMenu;
