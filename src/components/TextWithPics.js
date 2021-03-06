import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  imgStyle: {
    maxWidth: 380,
    width: "100%",
  },
});

const TextWithPics = ({ children, images }) => {
  const classes = useStyles();
  const isMorePic = images.length > 1;

  return (
    <Grid spacing={2} container style={{ marginTop: 10 }}>
      <Grid
        item
        xs={12}
        md={4}
        container
        justify="center"
        alignItems="flex-start"
      >
        <img
          className={classes.imgStyle}
          alt="UNG history"
          src={`/images/history/${images[0]}`}
        />
      </Grid>
      <Grid item xs={12} md={isMorePic ? 4 : 8}>
        {children}
      </Grid>
      {isMorePic && (
        <Grid
          item
          xs={12}
          md={4}
          container
          justify="center"
          alignItems="flex-start"
        >
          <img
            className={classes.imgStyle}
            alt="UNG history"
            src={`/images/history/${images[1]}`}
          />
        </Grid>
      )}
    </Grid>
  );
};

export default TextWithPics;
