import React from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import Title from "components/Title";
import Block from "components/Block";
import Card from "components/CusCard";
import Button from "components/Button";

import * as API from "constants/api";
import LoadingContainer from "components/LoadingContainer";
import { useTranslation } from "react-i18next";
import { useTheme } from "@material-ui/styles";

const News = () => {
  const { t } = useTranslation();
  return (
    <Block withBackground>
      <Title>{t("News")}</Title>
      <LoadingContainer api={API.NEWS_LIST} component={RecentNewsContainer} />
    </Block>
  );
};

const RecentNewsContainer = ({ data }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <>
      <Grid container spacing={!isMobile ? 2 : 0}>
        {[0, 1, 2, 3, 4, 5].map((el) => (
          <Grid item key={el} lg={4} sm={6} xs={12}>
            <Card newsInfo={data.results[el]} />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="flex-end">
        <Grid item>
          <Button
            href="/press"
            style={{ marginTop: "30px", alignSelf: "right" }}
          >
            {t("All news")}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default News;
