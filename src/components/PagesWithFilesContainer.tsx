import React, { FC } from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useParams } from "react-router-dom";

import FileBlock from "./FileBlock";
import SideMenu from "./SideMenu";
import BlockLayout from "./BlockLayout";
import Pagination from "./Pagination";

const useStyles = makeStyles({
  titleMargin: {
    marginTop: 40,
    marginBottom: 40,
  },
});

interface PagesWithFilesContainerProps {
  filesInfo: { [index: number]: { [index: string]: string }[] };
  submenus: { [index: number]: string };
  title: string;
  url: string;
  breadCrumbsTitle: string[];
}

const PagesWithFilesContainer: FC<PagesWithFilesContainerProps> = ({
  filesInfo,
  submenus,
  title,
  breadCrumbsTitle,
  url,
}) => {
  const classes = useStyles();
  let { id }: any = useParams();
  const nameOfSubmenu = submenus[id];
  const filesOfSubmenu = filesInfo[id];

  return (
    <BlockLayout
      title={title}
      breadcrumbNames={[
        "Bosh sahifa",
        ...breadCrumbsTitle,
        title,
        nameOfSubmenu,
      ]}
    >
      <Typography className={classes.titleMargin} variant="h4" color="primary">
        {nameOfSubmenu}
      </Typography>
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
          {filesOfSubmenu.map((fileInfo: { [index: string]: string }) => (
            <Box mb={3}>
              <Grid item>
                <FileBlock fileInfo={fileInfo} />
              </Grid>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <SideMenu
            title={title}
            listOfMenu={submenus}
            activeId={id}
            url={url}
          />
        </Grid>
        <Grid item container justify="center">
          {filesOfSubmenu.length > 5 && <Pagination />}
        </Grid>
      </Grid>
    </BlockLayout>
  );
};

export default PagesWithFilesContainer;
