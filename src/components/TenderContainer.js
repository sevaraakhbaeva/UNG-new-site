import React from "react";
import { Grid, Typography, ButtonBase } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link as RouterLink, useParams, useRouteMatch } from "react-router-dom";

import BlockLayout from "./BlockLayout";
import { tenderCategories } from "../constants/tenderCompanies";
import { tenderInfo } from "../constants/tenderInfo";
import ShortDescriptionBlock from "./ShortDescriptionBlock";
import SideMenu from "./SideMenu";

const useStyles = makeStyles({
  titleMargin: {
    marginTop: 40,
    marginBottom: 40,
  },
});

const TenderContainer = () => {
  const classes = useStyles();
  let { id } = useParams();
  let { url } = useRouteMatch();

  const nameOfCompany = tenderCategories[id];
  return (
    <BlockLayout
      title="Tenderlar"
      breadcrumbNames={[
        "Bosh sahifa",
        "Biznesga oid",
        "Tenderlar",
        nameOfCompany,
      ]}
    >
      <Typography className={classes.titleMargin} variant="h4" color="primary">
        {nameOfCompany}
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={9} container spacing={3}>
          {tenderInfo.map((tender) => (
            <Grid item xs={12} md={6}>
              <ButtonBase component={RouterLink} to={`${url}/${tender.url}`}>
                <ShortDescriptionBlock objectInfo={tender} />
              </ButtonBase>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <SideMenu
            url="/business/tender"
            title="Tenderlar"
            listOfMenu={tenderCategories}
            activeId={id}
          />
        </Grid>
      </Grid>
    </BlockLayout>
  );
};

export default TenderContainer;
