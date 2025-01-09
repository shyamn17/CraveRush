import { useEffect, useState } from "react";
import Error from "../components/Error";
import {RESTAURANT_MENU} from "../Services/Endpoints";
const useRestaurant=(resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    const [isError, setIsError] = useState(false);
  
    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      try {
        const data = await fetch(RESTAURANT_MENU + resId);
        const json = await data.json();
        console.log(json);
        if (json.data) {
          setRestaurant(json.data);
        } else {
          setIsError(true);
        }
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    }
  
    if (isError) {
      return <Error message="Restaurant data is currently unavailable" />;
    }

    return restaurant;
}

export default useRestaurant;