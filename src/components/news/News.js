import React, { useEffect } from "react";
import { Grid, Box } from "@material-ui/core";
import Card from "components/CusCard";
import Pagination from "components/Pagination";
import useGetList from "hooks/crud/useGetList";
import * as API from "constants/api";
import PaginationContainer from "components/PaginationContainer";

const News = ({ results, apiChange }) => {
  return (
    <PaginationContainer results={results} apiChange={apiChange}>
      <Grid container spacing={2}>
        {results.data.results.map((newsItem, i) => (
          <Grid item key={i} lg={4} md={6} xs={12}>
            <Card newsInfo={newsItem} />
          </Grid>
        ))}
      </Grid>
    </PaginationContainer>
  );
};

News.defaultProps = {
  apiChange: () => {},
};

export default News;
