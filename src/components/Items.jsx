import { IMG_CDN } from "../Services/Endpoints";

const Items = ({
  name,
  cuisines,
  cloudinaryImageId,
  avgRating,
  locality
}) => {
  const imageUrl = cloudinaryImageId ? IMG_CDN + cloudinaryImageId : "/path/to/default/image.jpg";

  const getCircleColor = (rating) => {
    if (rating >= 4.0) {
      return "bg-green-600";
    } else if (rating >= 3.0) {
      return "bg-yellow-600";
    } else {
      return "bg-red-600";
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
      <img 
        src={imageUrl} 
        alt={`Image of ${name}`} 
        className="w-full h-48 object-cover rounded-t-lg" 
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-1 truncate">{name}</h2>

        <div className="flex items-center mb-1">
          <div className={`w-6 h-6 flex items-center justify-center rounded-full ${getCircleColor(avgRating)}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
          <h4 className="text-lg font-medium ml-2">{avgRating}</h4>
        </div>

        <h3 className="text-sm text-gray-600 mb-1 truncate">{cuisines.join(", ")}</h3>
        <h3 className="text-sm text-gray-500">{locality}</h3>
      </div>
    </div>
  );
};

export default Items;
