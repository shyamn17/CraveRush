import { useEffect, useState } from "react";
import { RESTAURANTS } from "../Services/Endpoints";
import Items from "./Items";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";

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
      const data = await fetch(RESTAURANTS);
      const json = await data.json();
      const restaurantsData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
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

  const isOnline = useOnline();

  if (!isOnline) {
    return <h2 className="text-center text-xl text-red-500">⛔ Uh-oh, it looks like you’re offline. Please check your network to explore food options.</h2>;
  }

  if (!restaurants) return null;

  if (filteredRestaurants?.length === 0 && searchtxt !== "")
    return <h1 className="text-center text-xl text-red-500">No restaurants found!!</h1>;

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex justify-center items-center mb-8 space-x-4 px-4 md:px-8">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-full px-6 py-3 text-lg w-80 focus:outline-none focus:ring-2 focus:ring-[#603F83FF] transition-all"
          placeholder="Search for restaurants"
          value={searchtxt}
          onChange={(e) => setSearchtxt(e.target.value)}
        />
        <button
          className="ml-4 bg-[#603F83FF] text-white py-2 px-6 rounded-full text-lg hover:bg-[#4f2e69] transition-colors duration-300"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-12 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <Items {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
