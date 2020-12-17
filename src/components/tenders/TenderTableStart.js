import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

const useStyles = makeStyles({
  headBold: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#FFFFFF",
  },
  marginTable: {
    marginTop: 20,
  },
  fontCell: { fontSize: 16 },

  headColor: {
    backgroundColor: "#03A3DF",
    opacity: "50%",
  },
  greenTitle: {
    color: "#27AE60",
  },
  redTitle: {
    color: "#EB5757",
  },
});

const keysOfTable = {
  uz: {
    numberOfUnits: "number",
    unit: "unit_uz",
    price: "price",
    statusOfUnit: "status",
  },
  ru: {
    numberOfUnits: "number",
    unit: "unit_ru",
    price: "price",
    statusOfUnit: "status",
  },
  en: {
    numberOfUnits: "number",
    unit: "unit_en",
    price: "price",
    statusOfUnit: "status",
  },
};

const TenderTableStart = ({ item }) => {
  const classes = useStyles();
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Table className={classes.marginTable}>
      <TableHead className={classes.headColor}>
        <TableRow>
          {Object.keys(keysOfTable[currentLanguage]).map((key, i) => (
            <TableCell
              key={i}
              classes={{ root: classes.headBold }}
              align="center"
            >
              {t(`tenderDetailInfoTable.${key}`)}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          {Object.values(keysOfTable[currentLanguage]).map((value, i) => (
            <TableCell
              key={i}
              classes={{ root: classes.fontCell }}
              align="center"
              className={clsx(
                value === "status" &&
                  (item["status"] === "open"
                    ? classes.greenTitle
                    : classes.redTitle)
              )}
            >
              {value !== "status"
                ? item[value]
                : item["status"] === "open"
                ? t("tenderDetailInfoTable.notSold")
                : t("tenderDetailInfoTable.sold")}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TenderTableStart;
