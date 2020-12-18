import React from "react";
import { structSubData, midUrl } from "../constants/subStructData";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import StructuralBlock from "./StructuralBlock";
import BlockLayout from "./BlockLayout";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  gridItem: {
    margin: 8,
    flex: "0 1 calc(20% - 16px)",
    minWidth: 216,
  },
  blockStyle: {
    marginBottom: 40,
    [theme.breakpoints.down("md")]: {
      marginBottom: 30,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 25,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 20,
    },
  },
  titleStyle: {
    marginBottom: 35,
    [theme.breakpoints.down("md")]: {
      marginBottom: 25,
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: 15,
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: 10,
    },
  },
}));

const StructSubContainer = () => {
  const classes = useStyles();
  let { url } = useRouteMatch();

  return (
    <BlockLayout
      title="Tizim tarkibiga kiruvchi jamiyatlar"
      breadcrumbNames={[
        "Bosh sahifa",
        "Kompaniya haqida",
        "Tizim tarkibiga kiruvchi jamiyatlar",
      ]}
    >
      {structSubData.map((divisionBlock) => (
        <Box className={classes.blockStyle}>
          <Typography
            className={classes.titleStyle}
            variant={"h4"}
            color="primary"
          >
            {divisionBlock.title}
          </Typography>
          <Box className={classes.gridContainer}>
            {divisionBlock.data.map((dataItem) => (
              <Box className={classes.gridItem}>
                <StructuralBlock
                  dataItem={dataItem}
                  picName={divisionBlock.imgName}
                  parentUrl={url + midUrl[divisionBlock.id]}
                />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </BlockLayout>
  );
};

export default StructSubContainer;
