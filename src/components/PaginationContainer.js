import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import Pagination from "components/Pagination";
import { useHistory, useParams } from "react-router-dom";
import { countPagination } from "constants/constants";

const PaginationContainer = ({ data, children, url }) => {
  const numberOfPages = Math.ceil(data.count / countPagination);
  const history = useHistory();
  const { page } = useParams();

  const onPaginationChange = (event, page) => {
    // console.log(url + page);
    history.push(url + page);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <Box>
      {children}
      {numberOfPages > 1 && (
        <Box mt={4} display="flex" justifyContent="center">
          <Pagination
            page={parseInt(page)}
            onChange={onPaginationChange}
            count={numberOfPages}
          />
        </Box>
      )}
    </Box>
  );
};

export default PaginationContainer;
