import { useEffect, useState } from "react";
import { restaurantList } from "./config.js";
import Items from "./Items";
import Shimmer from "./Shimmer.js";
import "../../Home.css"
import {Link} from "react-router-dom"
function filterData(searchtxt, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchtxt.toLowerCase())
  );
}

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchtxt, setSearchtxt] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json)
      const restaurantsData =
        json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRestaurants(restaurantsData);
      setFilteredRestaurants(restaurantsData); 
    } catch (error) {
      console.error("Failed to fetch restaurants:", error);
    }
  };

  const handleSearch = () => {
    const filteredData = filterData(searchtxt, restaurants);
    setFilteredRestaurants(filteredData);
  };

  if(!restaurants) return null;

if(filteredRestaurants?.length===0)
  return <h1>No restaurants found!!</h1>;

return restaurants?.length === 0 ? (
  <Shimmer />
) : (
    <>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchtxt}
        onChange={(e) => setSearchtxt(e.target.value)}
      />

      <button className="searchbtn" onClick={handleSearch}>
        Search
      </button>

      <div className="lists">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"/restaurant/"+ restaurant.info.id} key={restaurant.info.id}>
            <Items {...restaurant.info}  /></Link>
        ))}
      </div>
    </>
  );
};

export default Body;
