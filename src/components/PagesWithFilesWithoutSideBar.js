import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import FileBlock from "./FileBlock";
import BlockLayout from "./BlockLayout";
import Pagination from "./Pagination";

const useStyles = makeStyles({
  titleMargin: {
    marginTop: 40,
    marginBottom: 40,
  },
});

const PagesWithFilesWithoutSideBar = ({
  filesInfo,
  title,
  breadCrumbsTitle,
}) => {
  const classes = useStyles();

  return (
    <BlockLayout
      title={title}
      breadcrumbNames={["Bosh sahifa", ...breadCrumbsTitle, title]}
    >
      <Grid container spacing={3}>
        <Grid
          item
          container
          xs={12}
          md={8}
          lg={9}
          direction="column"
          justify="flex-start"
        >
          {filesInfo.map((item) => (
            <Box mb={3}>
              <Grid item>
                <FileBlock fileInfo={item} />
              </Grid>
            </Box>
          ))}
        </Grid>

        <Grid item container justify="center">
          {filesInfo.length > 5 && <Pagination />}
        </Grid>
      </Grid>
    </BlockLayout>
  );
};

export default PagesWithFilesWithoutSideBar;
