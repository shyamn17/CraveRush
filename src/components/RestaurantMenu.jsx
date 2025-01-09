import { useParams } from "react-router-dom";
import { IMG_CDN } from "../Services/Endpoints";
import Shimmer from "./Shimmer";
import useRestaurant from "../Hooks/useRestaurant"

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurant(resId);

  if (!restaurant) {
    return <Shimmer />;
  }

  const restaurantInfo = restaurant?.cards?.[2]?.card?.card?.info;
  const menuItems = restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  return (
    <div>
      <div>
        <h1>Restaurant id: {resId}</h1>
        <h2>{restaurantInfo?.name}</h2>
        <img src={IMG_CDN + restaurantInfo?.cloudinaryImageId} alt={restaurantInfo?.name} />
        <h3>{restaurantInfo?.locality}</h3>
        <h3>{restaurantInfo?.costForTwoMessage}</h3>
        <h3>{restaurantInfo?.sla?.deliveryTime} mins</h3>
      </div>
      <div>
        <h1>Menu Items</h1>
        <ul>
          {menuItems ? (
            Object.values(menuItems).map((itemCards) => (
              <li key={itemCards?.card?.info?.id}>{itemCards?.card?.info?.name}</li>
            ))
          ) : (
            <li>No menu items available</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
