import React from "react";
import { structSubData, midUrl } from "../constants/subStructData";
import { Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import StructuralBlock from "./StructuralBlock";
import BlockLayout from "./BlockLayout";
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles({
  gridContainer: {
    width: "100%",
    display: "flex",
    flexFlow: "row wrap",
  },
  gridItem: {
    margin: 8,
    flex: "0 1 calc(20% - 16px)",
  },
});

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
        <Box style={{ marginBottom: 40 }}>
          <Typography variant="h4" style={{ marginBottom: 40 }} color="primary">
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
