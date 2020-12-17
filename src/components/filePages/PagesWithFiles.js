import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FileBlock from "components/FileBlock";
import SideMenu from "components/SideMenu";
import Pagination from "components/Pagination";
import BlockLayout from "components/BlockLayout";
import { useTranslation } from "react-i18next";
import {useParams} from "react-router";
import {countPagination} from 'constants/constants';
import * as API from "constants/api";
import PaginationContainer from 'components/PaginationContainer';

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

const categoriesSerializer = (data) => {
  return data.results[0];
}

const PagesWithFiles = ({ data, url,  ...rest }) => {
  const classes = useStyles();
  const results = categoriesSerializer(data);
  const {i18n} = useTranslation();
  const { id, subId } = useParams();

  return (
    <BlockLayout
      title={rest.title}
      breadcrumbNames={[
        "Bosh sahifa",
        ...rest.breadCrumbsTitle,
        rest.title,
        results[`subcategory_${i18n.language}`]
      ]}
    >
      <Typography className={classes.titleMargin} variant="h4" color="primary">
        {results[`subcategory_${i18n.language}`]}
      </Typography>
      <PaginationContainer data={data} url={`/business/tender/${id}/`}>
        <Grid container spacing={3}>
          <Grid
            item
            container
            xs={12}
            md={8}
            lg={9}
            direction="column"
            justify="flex-start"
            className={classes.item1}
          >
            {results.docs.map((fileInfo) => (
              <Box mb={3}>
                <Grid item>
                  <FileBlock fileInfo={fileInfo} />
                </Grid>
              </Box>
            ))}
          </Grid>
          <Grid item xs={12} md={4} lg={3} className={classes.item2}>
            <SideMenu
              activeId={subId}
              title={rest.title}
              url={`${url}/${id}/sub`}
              name="subcategory"
              api={API.SUBCATEGORIES_NAMES + "/" + id}
            />
          </Grid>
        </Grid>
      </PaginationContainer>
    </BlockLayout>
  );
};

export default PagesWithFiles;
