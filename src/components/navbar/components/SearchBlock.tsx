import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Box, Grid, InputBase, Button } from "@material-ui/core";

import { ReactComponent as GraySearchIcon } from "../../../icons/searchGray.svg";

const useStyles = makeStyles({
  closeButton: {
    padding: 0,
  },

  crossPosition: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1000,
  },
  searchForm: {
    width: "90%",
    minHeight: 60,
    background: "#FAFAFA",
    borderRadius: 4,
    display: "flex",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  containerPosition: {
    // position: "absolute",
    width: "90%",
    margin: "0 auto",
  },
});

const SearchBlock = () => {
  const classes = useStyles();
  return (
    <Box className={classes.containerPosition}>
      <Grid container alignItems="center">
        <Box component="form" className={classes.searchForm}>
          <GraySearchIcon />
          <InputBase
            style={{ flex: 1, margin: "0 10px" }}
            placeholder="Sayt bo’yicha izlash..."
            inputProps={{ "aria-label": "site search" }}
          />
          <Button color="primary">
            <Typography>Qidirish</Typography>
          </Button>
        </Box>
      </Grid>

      <Box style={{ marginTop: 20 }}>
        <Typography color="secondary">Qidiruv natijalari</Typography>
        <Typography style={{ marginTop: 10 }}>
          «O‘zbekneftgaz» AJ: Portlovchi atmosferada ishlash uchun jihozlarning
          xavfsizligi to‘g‘risida me’yoriy hujjat
        </Typography>
        <Typography style={{ marginTop: 10 }}>
          «O‘zbekneftgaz» AJ: Portlovchi atmosferada ishlash uchun jihozlarning
          xavfsizligi to‘g‘risida me’yoriy hujjat
        </Typography>
      </Box>
    </Box>
  );
};

export default SearchBlock;
