import React, { FC } from "react";
import { Grid, Typography } from "@material-ui/core";
import Block from "./Block";
import { ReactComponent as ProfitIcon } from "../icons/rating1.svg";
import { ReactComponent as WorkerIcon } from "../icons/rating2.svg";
import { ReactComponent as GazIcon } from "../icons/rating3.svg";

export interface CaptionProps {
  text: string;
  number: number;
}

const Caption: FC<CaptionProps> = ({ text, number }) => {
  return (
    <>
      <Typography align="center" style={{ marginTop: "30px" }} variant="h4">
        {text}
      </Typography>
      <Typography
        align="center"
        style={{ fontWeight: "bold", marginTop: "10px", fontSize: "44px" }}
      >
        {number}
      </Typography>
    </>
  );
};

const Ratings = () => {
  return (
    <Block withBackground>
      <Grid container spacing={2} alignContent="center">
        <Grid
          item
          md={4}
          xs={12}
          container
          direction="column"
          alignItems="center"
        >
          <ProfitIcon />
          <Caption text="O'zbekistonda O'zbekneftgaz YaIM" number={10946} />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          container
          direction="column"
          alignItems="center"
        >
          <WorkerIcon />
          <Caption text="Jami hodimlar" number={20043} />
        </Grid>
        <Grid
          item
          md={4}
          xs={12}
          container
          direction="column"
          alignItems="center"
        >
          <GazIcon />
          <Caption text="Yiliga ishlab chiqariladigan gaz" number={498095} />
        </Grid>
      </Grid>
      <Grid style={{ marginTop: "30px" }} container justify="flex-end">
        <Grid item>
          <Typography variant="caption" style={{ color: "#999999" }}>
            [2019 yil 31-dekabr holatiga]
          </Typography>
        </Grid>
      </Grid>
    </Block>
  );
};

export default Ratings;
