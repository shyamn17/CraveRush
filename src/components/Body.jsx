import { useEffect, useState } from "react";
import { RESTAURANTS } from "../Services/Endpoints";
import Items from "./Items";
import Shimmer from "./Shimmer/Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../Hooks/useOnline";
import { HomeSection } from "./HomeSection"; 

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

  const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/"; 

  const getRestaurants = async () => {
    try {
   const data = await fetch(`${CORS_PROXY}${encodeURIComponent(RESTAURANTS)}`);
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

  if (restaurants.length === 0) return <Shimmer />;

  if (filteredRestaurants.length === 0 && searchtxt !== "")
    return <h1 className="text-center text-xl text-red-500">No restaurants found!!</h1>;

  return (
    <>
      {/* HomeSection in Body */}
      <HomeSection 
  searchtxt={searchtxt} 
  setSearchtxt={setSearchtxt} 
  handleSearch={handleSearch} 
/>

      
      {/* Search Bar */}
      <div className="flex justify-center items-center mb-4 px-4 md:px-8 w-full mt-10">
  <input
    type="text"
    className="border-2 border-gray-300 rounded-full px-6 py-3 text-lg w-80 focus:outline-none focus:ring-2 focus:ring-white transition-all"
    placeholder="Search for restaurants"
    value={searchtxt}
    onChange={(e) => setSearchtxt(e.target.value)}
  />
  <button
    className="bg-white text-[#603F83FF] p-3 rounded-full ml-2 hover:bg-gray-200 transition-colors duration-300"
    onClick={handleSearch}
  >
    {/* Inline SVG for Search Icon */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-4.35-4.35M17 10a7 7 0 10-14 0 7 7 0 0014 0z"
      />
    </svg>
  </button>
</div>

      <h1 className="text-2xl font-bold font-Inter tracking-tight  grid gap-8 gap-y-12 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-6">
  Top restaurant chains in Bangalore
</h1>



      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 gap-y-12 px-8 md:px-16 lg:px-24 max-w-screen-xl mx-auto py-6 mb-16">
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
