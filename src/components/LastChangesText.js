import React from "react";
import { Typography } from "@material-ui/core";

const LastChangesText = ({ children, styles }) => {
  return (
    <Typography
      style={{ marginTop: 30, fontSize: 14, ...styles }}
      align="right"
      color="secondary"
    >
      {children}
    </Typography>
  );
};

LastChangesText.defaultProps = {
  styles: {},
};

export default LastChangesText;
