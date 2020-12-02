import React, { useState } from "react";
import useGetList from "hooks/crud/useGetList";
import Loader from "components/Loader";

const LoadingContainer = ({ api, component: Component }) => {
  const [apiState, setApiState] = useState(api);
  const newsList = useGetList(apiState);
  const { isLoaded, isLoading, results } = newsList;
  const [isCurrentlyLoading, setIsCurrentlyLoading] = useState(true);

  const apiChange = (newApi) => {
    setApiState(newApi);
  };

  React.useEffect(() => {
    if (isLoaded && !isLoading) {
      setIsCurrentlyLoading(false);
    }
  });

  return isCurrentlyLoading ? (
    <Loader />
  ) : (
    <Component apiChange={apiChange} results={results} />
  );
};

export default LoadingContainer;
