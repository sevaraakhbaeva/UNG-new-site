import { useEffect, useState, useCallback } from "react";
import axios from "axios-api";
import { assoc, propOr, prop } from "ramda";

const getDataFromResponse = (res) => {
  const data = prop("data", res);
  const results = propOr([], "results", data);

  return assoc("results", results, data);
};

const useGetList = (api, autoSend = true) => {
  const initialData = { results: [] };
  const [data, setData] = useState(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const getList = useCallback(() => {
    setIsLoading(true);
    axios
      .get(api)
      .then((res) => {
        setData(getDataFromResponse(res));
        setIsLoaded(true);
        return Promise.resolve(res);
      })
      .catch((error) => {
        console.log(error);
        return Promise.reject(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [api]);

  useEffect(() => {
    if (autoSend) {
      getList();
    }
  }, [autoSend, getList]);

  return { data, isLoading, isLoaded, getList };
};

export default useGetList;
