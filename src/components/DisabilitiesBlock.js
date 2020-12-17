import React from "react";
import { Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Button from "./Button";
import { ReactComponent as VolumeOn } from "../icons/SoundOn.svg";
import { ReactComponent as VolumeOff } from "../icons/SoundOff.svg";

const useStyles = makeStyles({
  marginTitle: {
    marginBottom: 10,
  },
});

const SearchBlock = () => {
  const setting = {
    thinBorder: true,
    style: { marginRight: 10, height: 50 },
  };
  const classes = useStyles();
  return (
    <Box style={{ width: "90%", margin: "0 auto" }}>
      <Grid container alignItems="center">
        <Grid container spacing={4} item>
          <Grid item>
            <Typography className={classes.marginTitle} variant="h5">
              Sayt rangi
            </Typography>
            <Button {...setting}>
              <Typography>Standart</Typography>
            </Button>
            <Button {...setting} color="black">
              <Typography>Oq qora</Typography>
            </Button>
          </Grid>
          <Grid item>
            <Typography className={classes.marginTitle} variant="h5">
              Saytda ovoz
            </Typography>
            <Button {...setting}>
              <VolumeOn />
            </Button>
            <Button {...setting} color="black">
              <VolumeOff />
            </Button>
          </Grid>
          <Grid item>
            <Typography className={classes.marginTitle} variant="h5">
              Shrift kattaligi
            </Typography>
            <Button {...setting} color="black">
              <Typography variant="h3">A</Typography>
            </Button>
            <Button {...setting} color="black">
              <Typography variant="h4">A</Typography>
            </Button>
            <Button {...setting}>
              <Typography variant="h5">A</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SearchBlock;
