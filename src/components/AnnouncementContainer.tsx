import React, { FC } from "react";
import { Grid, Typography, Box, Paper } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paperStyle: {
    padding: "15px 20px",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "rgb(3, 163, 223, 0.37)",
      "& > h4": { color: "#FFFFFF" },
    },
  },
});

const AnnouncementContainer = () => {
  const classes = useStyles();

  return (
    <BlockLayout
      title="AUY Xabarlari"
      breadcrumbNames={[
        "Bosh sahifa",
        "Aksiadorlar",
        "Aksiadorlar yig’ilishi",
        "AUY Xabarlari",
      ]}
    >
      <Grid spacing={2} container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Grid item xs={12} md={6} lg={4}>
            <Paper elevation={2} className={classes.paperStyle}>
              <Typography variant="h4" color="primary">
                05.10.2020
              </Typography>
              <Typography>
                “O‘zbekneftgaz” AJ “Muborak” gazni qayta ishlash zavodida yirik
                investision loyiha amalga oshirildi
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </BlockLayout>
  );
};

export default AnnouncementContainer;
