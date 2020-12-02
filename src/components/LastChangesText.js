import React from "react";
import { Typography } from "@material-ui/core";
import { Trans } from "react-i18next";

const LastChangesText = ({ children, styles }) => {
  return (
    <Typography
      style={{ marginTop: 30, fontSize: 14, ...styles }}
      align="right"
      color="secondary"
    >
      <Trans>lastChanges</Trans>: {children}
    </Typography>
  );
};

LastChangesText.defaultProps = {
  styles: {},
};

export default LastChangesText;
