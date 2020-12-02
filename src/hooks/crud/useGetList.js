import { useEffect, useState } from "react";
import axios from "../../axios-api";

const useGetList = (api) => {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(api)
      .then((results) => {
        setResults(results);
        setIsLoaded(true);
      })
      .catch((error) => console.log("Error: " + error))
      .finally(() => {
        setIsLoading(false);
      });
  }, [api]);

  return { results, isLoading, isLoaded };
};

export default useGetList;
