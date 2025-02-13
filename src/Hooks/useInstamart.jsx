import { useEffect, useState } from "react";
import { instamart_api } from "../Services/instamart_api"; // Import local API file

const useInstamart = () => {
    const [items, setItems] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getMart();
    }, []);

    function getMart() {
        try {
            setItems(instamart_api); // Use local data
            console.log("Instamart Data:", instamart_api);
            setIsError(false);
        } catch (error) {
            console.error("Error fetching Instamart:", error);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return { items, isLoading, isError };
};

export default useInstamart;
