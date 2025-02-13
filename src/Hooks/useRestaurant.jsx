import { useEffect, useState } from "react";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (resId) {
            getRestaurantInfo();
        }
    }, [resId]);

    const API_URL = "/.netlify/functions/restaurant-menu"; // Use Netlify function

    async function getRestaurantInfo() {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}?id=${resId}`);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const json = await response.json();
            console.log("API Response:", json);

            if (json?.data) {
                setRestaurant(json.data);
                setIsError(false);
            } else {
                setIsError(true);
                setRestaurant(null);
            }
        } catch (error) {
            console.error("Error fetching restaurant:", error);
            setIsError(true);
            setRestaurant(null);
        } finally {
            setIsLoading(false);
        }
    }

    return { restaurant, isLoading, isError };
};

export default useRestaurant;
