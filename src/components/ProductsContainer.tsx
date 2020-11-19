import React, { FC } from "react";
import {
  Grid,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as ArrowDownIcon } from "../icons/chevron-down.svg";
import { productsData } from "../constants/productsData";

import BlockLayout from "./BlockLayout";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  titleStyle: {
    fontSize: 18,
    // fontWeight: "bolder",
  },
  listStyles: {
    fontFamily: "LabGrotesque, Calibri, sans-serif",
    fontSize: 16,
    "& > li": {
      lineHeight: "160%",
      fontSize: 16,
      fontWeight: "normal",
      margin: "10px 0",
    },
  },
});

const ProductsContainer = () => {
  const classes = useStyles();

  return (
    <BlockLayout
      title="Маҳсулотлар"
      breadcrumbNames={["Bosh sahifa", "Бизнесга оид", "Маҳсулотлар"]}
    >
      <Box className={classes.root}>
        {productsData.map((product) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.titleStyle}>
                {product.name}
              </Typography>
            </AccordionSummary>
            <Divider />
            <AccordionDetails>
              <div
                className={classes.listStyles}
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </BlockLayout>
  );
};

export default ProductsContainer;
