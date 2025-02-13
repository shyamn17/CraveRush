import { useEffect, useState } from "react";
import { INSTAMART } from "../Services/Endpoints";

const CORS_PROXY = "https://thingproxy.freeboard.io/fetch/";

const useInstamart = () => {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const delayFetch = setTimeout(() => {
      getMart();
    }, 2000); // Delay API call by 2 seconds

    return () => clearTimeout(delayFetch); // Cleanup timeout if component unmounts
  }, []);

  async function getMart() {
    setIsLoading(true);
    try {
      const response = await fetch(`${CORS_PROXY}${encodeURIComponent(INSTAMART)}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log("Fetched Data:", json);

      if (json) {
        setItems(json);
        setIsError(false);
      } else {
        throw new Error("Empty response from API");
      }
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
