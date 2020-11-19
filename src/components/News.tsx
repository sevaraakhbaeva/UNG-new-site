import React from "react";
import { Grid } from "@material-ui/core";
import Title from "./Title";
import Block from "./Block";
import { default as Card } from "./CusCard";
import { default as Button } from "./Button";
import { newsBriefInfo } from "../constants/newsInfo";

const News = () => {
  return (
    <Block withBackground>
      <Title>Yangiliklar</Title>
      <Grid container spacing={2}>
        {[1, 2, 3, 4, 5, 6].map((el) => (
          <Grid
            item
            key={el}
            lg={4}
            md={6}
            xs={12}
            style={{
              marginTop: "10px",
            }}
          >
            <Card newsInfo={newsBriefInfo[el]} />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="flex-end">
        <Grid item>
          <Button style={{ marginTop: "30px", alignSelf: "right" }}>
            Barcha yangiliklar
          </Button>
        </Grid>
      </Grid>
    </Block>
  );
};

export default News;
