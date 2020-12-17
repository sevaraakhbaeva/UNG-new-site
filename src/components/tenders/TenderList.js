import React from "react";
import { Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink, useParams, useRouteMatch } from "react-router-dom";

import BlockLayout from "components/BlockLayout";
import ShortDescriptionBlock from "components/ShortDescriptionBlock";
import SideMenu from "components/SideMenu";
import { useTranslation } from "react-i18next";
import PaginationContainer from "components/PaginationContainer";
import * as API from 'constants/api';

const useStyles = makeStyles((theme) => ({
  titleMargin: {
    marginTop: 40,
    marginBottom: 40,
  },
  item1: {
    order: 1,
    [theme.breakpoints.down("sm")]: {
      order: 2,
    },
  },
  item2: {
    order: 2,
    [theme.breakpoints.down("sm")]: {
      order: 1,
    },
  },
}));

const TenderList = ({ data }) => {
  const classes = useStyles();
  const { id } = useParams();
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const tenderResults = data.results;

  return (
    <BlockLayout
      title="Tenderlar"
      breadcrumbNames={[
        "Bosh sahifa",
        "Biznesga oid",
        "Tenderlar",
        tenderResults[0]["company"][`name_${currentLanguage}`],
      ]}
    >
      <Typography className={classes.titleMargin} variant="h4" color="primary">
        {tenderResults[0]["company"][`name_${currentLanguage}`]}
      </Typography>
      <PaginationContainer data={data} url={`/business/tender/${id}/`}>
        <Grid container spacing={3}>
          <Grid
            item
            xs={12}
            md={9}
            container
            spacing={3}
            className={classes.item1}
          >
            {tenderResults.map((tender) => (
              <Grid item xs={12} md={6}>
                <ButtonBase
                  component={RouterLink}
                  to={`/business/tender/detail/${tender.slug}`}
                >
                  <ShortDescriptionBlock objectInfo={tender} />
                </ButtonBase>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sm={6} md={3} className={classes.item2}>
            <SideMenu api={API.TENDER_COMPANIES} url="/business/tender" title="Tenderlar" activeId={id} />
          </Grid>
        </Grid>
      </PaginationContainer>
    </BlockLayout>
  );
};

export default TenderList;
