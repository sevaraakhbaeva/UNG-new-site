import React from "react";
import { Grid } from "@material-ui/core";
import Title from "components/Title";
import Block from "components/Block";
import Card from "components/CusCard";
import Button from "components/Button";

import * as API from "constants/api";
import LoadingContainer from "components/LoadingContainer";

const News = () => {
  return (
    <Block withBackground>
      <Title>Yangiliklar</Title>
      <LoadingContainer api={API.NEWS_LIST} component={RecentNewsContainer} />
    </Block>
  );
};

const RecentNewsContainer = ({ results }) => {
  return (
    <>
      <Grid container spacing={2}>
        {[0, 1, 2, 3, 4, 5].map((el) => (
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
            <Card newsInfo={results.data.results[el]} />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            href="/press/news"
            style={{ marginTop: "30px", alignSelf: "right" }}
          >
            Barcha yangiliklar
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default News;
