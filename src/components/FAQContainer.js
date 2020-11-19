import React from "react";
import {
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ReactComponent as ArrowDownIcon } from "../icons/chevron-down.svg";

import BlockLayout from "./BlockLayout";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bolder",
  },
});

const LocalizationContainer = () => {
  const classes = useStyles();

  return (
    <BlockLayout
      title="Frequently Asked Questions"
      breadcrumbNames={["Bosh sahifa", "Frequently Asked Questions"]}
    >
      <Box className={classes.root}>
        {[1, 2, 3, 4, 5, 6].map((number) => (
          <Accordion>
            <AccordionSummary
              expandIcon={<ArrowDownIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <Typography
                  className={classes.titleStyle}
                  component="span"
                  color="primary"
                >
                  {number + ". "}
                </Typography>
                Как можно принять участие в конкурсах?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                “O‘zbekneftgaz” AJ “Muborak” gazni qayta ishlash zavodida yirik
                investision loyiha amalga oshirildi. “O‘zbekneftgaz” AJ
                “Muborak” gazni qayta ishlash zavodida yirik investision loyiha
                amalga oshirildi. “O‘zbekneftgaz” AJ “Muborak” gazni qayta
                ishlash zavodida yirik investision loyiha amalga oshirildi.
                “O‘zbekneftgaz” AJ “Muborak” gazni qayta ishlash zavodida yirik
                investision loyiha amalga oshirildi.
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </BlockLayout>
  );
};

export default LocalizationContainer;
