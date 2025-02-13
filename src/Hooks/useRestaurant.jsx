import { useEffect, useState } from "react";

const BACKEND_URL = "https://your-backend-url.https://craverush.vercel.app/restaurant";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (resId) {
            getRestaurantInfo();
        }
    }, [resId]);
    async function getRestaurantInfo() {
        setIsLoading(true);
        try {
            const response = await fetch(`${BACKEND_URL}/restaurant?resId=${resId}`);

            console.log("HTTP Status:", response.status);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

            const json = await response.json();
            console.log("API Response:", json);

            if (json?.data) {
                setRestaurant(json.data);
                setIsError(false);
            } else {
                throw new Error("Invalid API response structure");
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
