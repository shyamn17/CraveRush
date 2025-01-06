import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {IMG_CDN} from "./config";

const RestaurantMenu=()=>{
    const {resId}= useParams();

    const [restaurant, setRestaurant]=useState({});
    
    useEffect(()=>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=10575")
        const json=await data.json();
        console.log(json);
        setRestaurant(json.data);
    }

    return(
      <div>
          <div>
            <h1>Restaurant id: {resId}</h1>
            <h2>{restaurant?.data?.cards[2]?.card?.card?.info?.name}</h2>
            <img src={IMG_CDN + restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId}/>
            <h3>{restaurant?.cards?.[2]?.card?.card?.info?.locality}</h3>
            <h3>{restaurant?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h3>
            <h3>{restaurant?.cards?.[2]?.card?.card?.info?.sla?.deliveryTime}mins</h3>
        </div>
        <div>
        <h1>Menu Items</h1>
        {console.log(Object.values(restaurant?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards))}

           

        </div>
      </div>
    )
}

export default RestaurantMenu;