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

const TenderTable = ({ tenderInfoFinalTable }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Table className={classes.marginTable}>
      <TableHead className={classes.headColor}>
        <TableRow>
          {Object.keys(tenderInfoFinalTable).map((key, i) => (
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
          {Object.keys(tenderInfoFinalTable).map((key, i) => (
            <TableCell
              key={i}
              classes={{ root: classes.fontCell }}
              align="center"
              className={clsx(
                key === "Better price" &&
                  (tenderInfoFinalTable["Better price"]
                    ? classes.greenTitle
                    : classes.redTitle)
              )}
            >
              {key !== "Better price"
                ? tenderInfoFinalTable[key]
                : tenderInfoFinalTable["Better price"]
                ? t("tenderDetailInfoTable.notSold")
                : t("tenderDetailInfoTable.sold")}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default TenderTable;
