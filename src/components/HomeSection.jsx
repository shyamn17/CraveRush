import { Link } from "react-router-dom";
import food from "../Assets/food.png";
import instamart from "../Assets/instamart.png";
import faq from "../Assets/faq.png";
import about from "../Assets/about.png";

export const HomeSection = ({ searchtxt, setSearchtxt, handleSearch }) => {
  return (
    <div className="bg-[#603F83FF] py-4 relative flex flex-col justify-center items-center">

      {/* Top Section with Images and Text */}
      <div className="flex justify-between items-center mt-[-20px] w-full">
        
        {/* Left Image */}
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt="Veggies"
          className="h-[480px] w-[270px]"
        />

        {/* Central Text */}
        <div className="text-center mx-4 z-10 flex-grow mb-24">
          <h1 className="text-5xl font-bold text-white mb-4 text-center p-6">
            <span className="block p-6">Hungry for something new?</span> 
            Discover with <span className="text-yellow-300">CraveRush!</span>
          </h1>

          {/* Search Bar */}
          <div className="flex justify-center items-center mb-6 px-4 md:px-8 w-full">
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
              {/* Search Icon */}
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
        </div>

        {/* Right Image */}
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt="Sushi"
          className="h-[480px] w-[270px]"
        />
      </div>

      {/* Navigation Cards Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-[-40px] mb-12 px-4 md:px-12 lg:px-24 justify-center">
        {[ 
          { link: "/", img: food },
          { link: "/about", img: about },
          { link: "/instamart", img: instamart },
          { link: "/faq", img: faq }
        ].map((card, index) => (
          <Link
          key={index}
          to={card.link}
          className="bg-white rounded-xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center h-72 w-64 "
        >
          <img src={card.img} alt="" className="h-auto w-auto object-cover rounded-lg p-2" />
        </Link>
        ))}
      </div>

    </div>
  );
};
