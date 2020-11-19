import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BlockLayout from "./BlockLayout";
import { newsBriefInfo } from "../constants/newsInfo";
import { default as Card } from "./CusCard";
import Pagination from "./Pagination";

const useStyles = makeStyles({
  paginationItemStyle: {
    fontSize: 20,
    borderRadius: 0,
  },
  selectedPaginationItem: {
    borderBottom: "3px solid #03A3DF",
    backgroundColor: "transparent !important",
  },
});

const NewsContainer = () => {
  const classes = useStyles();
  return (
    <BlockLayout
      title="Yangiliklar"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi", "Yangiliklar"]}
    >
      <Grid container spacing={2}>
        {newsBriefInfo.map((newsItem, i) => (
          <Grid item key={i} lg={4} md={6} xs={12}>
            <Card newsInfo={newsItem} />
          </Grid>
        ))}
      </Grid>
      <Box mt={4} display="flex" justifyContent="center">
        <Pagination />
      </Box>
    </BlockLayout>
  );
};

export default NewsContainer;
