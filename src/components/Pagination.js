import React from "react";
import { makeStyles } from "@material-ui/styles";

import {
  Pagination as MaterialPagination,
  PaginationItem,
} from "@material-ui/lab";

const useStyles = makeStyles({
  paginationItemStyle: {
    fontSize: 20,
    borderRadius: 0,
  },
  selectedPaginationItem: {
    borderBottom: "3px solid #03A3DF",
    backgroundColor: "transparent !important",
  },
});

const Pagination = () => {
  const classes = useStyles();
  return (
    <MaterialPagination
      count={10}
      color="primary"
      showFirstButton
      showLastButton
      renderItem={(item) => (
        <PaginationItem
          classes={{
            root: classes.paginationItemStyle,
            selected: classes.selectedPaginationItem,
          }}
          {...item}
        />
      )}
    />
  );
};

export default Pagination;
