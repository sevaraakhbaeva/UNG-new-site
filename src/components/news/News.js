import React from "react";
import { Grid } from "@material-ui/core";
import Card from "components/CusCard";
import PaginationContainer from "components/PaginationContainer";

const News = ({ data }) => {
  return (
    <PaginationContainer data={data} url="/press/">
      <Grid container spacing={2}>
        {data.results.map((newsItem, i) => (
          <Grid item key={i} lg={4} md={6} xs={12}>
            <Card newsInfo={newsItem} />
          </Grid>
        ))}
      </Grid>
    </PaginationContainer>
  );
};

News.defaultProps = {
  count: 18,
};

export default News;
