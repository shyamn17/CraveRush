import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../Services/Endpoints";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (resId) {
            getRestaurantInfo();
        }
    }, [resId]); // Ensures refetching when resId changes

    const CORS_PROXY = "https://api.allorigins.win/raw?url=";

    async function getRestaurantInfo() {
        setIsLoading(true);
        try {
            const response = await fetch(`${CORS_PROXY}${RESTAURANT_MENU}${resId}`);
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
