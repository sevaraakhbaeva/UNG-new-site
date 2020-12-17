import React, { useState } from "react";
import useGetList from "hooks/crud/useGetList";
import Loader from "components/Loader";

const LoadingContainer = ({ api, component: Component, ...rest }) => {
  const newsList = useGetList(api);
  const { isLoaded, isLoading, data } = newsList;
  const [isCurrentlyLoading, setIsCurrentlyLoading] = useState(true);

  React.useEffect(() => {
    if (isLoaded && !isLoading) {
      setIsCurrentlyLoading(false);
    }
  });

  // console.log(api);
  // console.log("data:");
  // console.log(data);

  return isCurrentlyLoading ? <Loader /> : <Component data={data} {...rest} />;
};

export default LoadingContainer;
