import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core";

import Block from "./Block";
import Title from "./Title";

const useStyles = makeStyles({
  table: {
    width: "100%",
  },
  tableCell: {
    fontSize: "16px",
    lineHeight: "160%",
    color: "#777777",
  },
  tableHeadTitle: {
    fontSize: "16px",
    color: "#777777",
    textTransform: "uppercase",
    fontWeight: "bolder",
  },
});

function createData(
  title,
  name,
  unit,
  price,
  increase,
  increasePercent,
  date,
  time
) {
  return {
    thTitle: { title, name },
    unit,
    price,
    increase,
    increasePercent,
    date,
    time,
  };
}

const rows = [
  createData(
    "CL1:Com",
    "WTI Crude Oil (Nymex)",
    "USD/bbl.",
    43.31,
    "+0.70",
    "+1.64%",
    "Oct 2020",
    "10:54 AM"
  ),
  createData(
    "CO1:Com",
    "WTI Crude Oil (Nymex)",
    "USD/bbl.",
    43.31,
    "+0.70",
    "+1.64%",
    "Oct 2020",
    "10:54 AM"
  ),
  createData(
    "CP1:Com",
    "WTI Crude Oil (Nymex)",
    "USD/bbl.",
    43.31,
    "+0.70",
    "+1.64%",
    "Oct 2020",
    "10:54 AM"
  ),
  createData(
    "NG1:Com",
    "WTI Crude Oil (Nymex)",
    "USD/bbl.",
    43.31,
    "+0.70",
    "+1.64%",
    "Oct 2020",
    "10:54 AM"
  ),
  createData(
    "CK1:Com",
    "WTI Crude Oil (Nymex)",
    "USD/bbl.",
    43.31,
    "+0.70",
    "+1.64%",
    "Oct 2020",
    "10:54 AM"
  ),
];

const tableHead = [
  "Indeks",
  "Birliklar",
  "Narx",
  "O’zgarish",
  "%O’zgarish",
  "Shartnoma",
  "Vaqt",
];

const CusTable = () => {
  const classes = useStyles();

  return (
    <Block withBackground>
      <Title>Xom neft va tabiiy gaz ko’rsatkichlari</Title>
      <TableContainer>
        <Table
          className={classes.table}
          style={{ fontSize: 24, lineHeight: "160%" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              {tableHead.map((item, i) =>
                i !== 0 ? (
                  <TableCell className={classes.tableHeadTitle} align="right">
                    {item}
                  </TableCell>
                ) : (
                  <TableCell className={classes.tableHeadTitle}>
                    {item}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.thTitle.title}>
                <TableCell
                  className={classes.tableCell}
                  component="th"
                  scope="row"
                >
                  <Box className={classes.tableHeadTitle} component="span">
                    {row.thTitle.title}
                    <br />
                  </Box>
                  <Box
                    style={{ color: "black", fontWeight: "bolder" }}
                    component="span"
                  >
                    {row.thTitle.name}
                  </Box>
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {row.unit}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {row.price}
                </TableCell>
                <TableCell
                  style={{ color: "#27AE60" }}
                  className={classes.tableCell}
                  align="right"
                >
                  {row.increase}
                </TableCell>
                <TableCell
                  style={{ color: "#27AE60" }}
                  className={classes.tableCell}
                  align="right"
                >
                  {row.increasePercent}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {row.date}
                </TableCell>
                <TableCell className={classes.tableCell} align="right">
                  {row.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Block>
  );
};

CusTable.defaultProps = {};

export default CusTable;
