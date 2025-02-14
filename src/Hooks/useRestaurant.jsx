import { useEffect, useState } from "react";
import { RESTAURANT_MENU } from "../Services/Endpoints";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (resId) {
            getRestaurantInfo();
        }
    }, [resId]);

    async function getRestaurantInfo() {
        setIsLoading(true);
        setErrorMessage('');
        setIsError(false);

        try {
            const response = await fetch(RESTAURANT_MENU + `${resId}`);

            console.log("HTTP Status:", response.status);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

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
            setErrorMessage(error.message || "An error occurred while fetching data.");
        } finally {
            setIsLoading(false);
        }
    }

    return { restaurant, isLoading, isError, errorMessage };
};

export default useRestaurant;
