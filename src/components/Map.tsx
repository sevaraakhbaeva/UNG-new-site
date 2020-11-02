import React from "react";
import { Grid } from "@material-ui/core";
import Block from "./Block";
import Title from "./Title";

const Map = () => {
  return (
    <Block withBackground>
      <Title>Bizning zavodlar</Title>
      <Grid container justify="center">
        <img alt="Map UNG" style={{ width: "70%" }} src="/images/Map.png" />
      </Grid>
    </Block>
  );
};

export default Map;
