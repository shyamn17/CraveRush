import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../Services/Endpoints";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true); // Add isLoading
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getRestaurantInfo();
    }, []);
    
    async function getRestaurantInfo() {
        setIsLoading(true); // Set loading to true
        try {
            const data = await fetch(`/api/restaurant-menu/${resId}`);
            const json = await data.json();
            console.log(json);
            if (json?.data) { // Use optional chaining
                setRestaurant(json.data);
                setIsError(false);
            } else {
                setIsError(true);
                setRestaurant(null); // Reset restaurant data
            }
        } catch (error) {
            console.error(error);
            setIsError(true);
            setRestaurant(null); // Reset restaurant data
        } finally {
            setIsLoading(false); // Set loading to false
        }
    }

    return { restaurant, isLoading, isError }; // Return an object
};

export default useRestaurant;
