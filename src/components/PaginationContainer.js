import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Pagination from "components/Pagination";
import * as API from "constants/api";

const PaginationContainer = ({ results, apiChange, children }) => {
  const numberOfPages = Math.ceil(results.data.count / 9);

  const onPaginationChange = (event, page) => {
    apiChange(API.NEWS_LIST + "?page=" + page);
    // console.log("Page: " + page);
    // return <Redirect push to={"/press/news/" + page} />;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [results]);

  return (
    <Box>
      {children}
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination onChange={onPaginationChange} count={numberOfPages} />
      </Box>
    </Box>
  );
};

export default PaginationContainer;
