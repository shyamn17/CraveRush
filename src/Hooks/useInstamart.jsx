import { useEffect, useState } from "react";

const API_URL = "/.netlify/functions/instamart"; // Netlify Function URL

const useInstamart = () => {
    const [items, setItems] = useState(null);

    useEffect(() => {
        getMart();
    }, []);

    async function getMart() {
        try {
            const response = await fetch(API_URL);
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const json = await response.json();
            console.log(json);
            setItems(json);
        } catch (error) {
            console.error("Error fetching Instamart:", error);
        }
    }

    return items;
};

export default useInstamart;
