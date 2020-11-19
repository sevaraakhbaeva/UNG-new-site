import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import BlockLayout from "./BlockLayout";

const useStyles = makeStyles({});

const NewsDetailContainer = () => {
  const classes = useStyles();
  return (
    <BlockLayout
      title="Yangiliklar"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi", "Yangiliklar"]}
    >
      <Grid container spacing={2}>
        <Typography>NOTHING</Typography>
      </Grid>
    </BlockLayout>
  );
};

export default NewsDetailContainer;
