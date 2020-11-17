import React, { FC } from "react";
import { Typography } from "@material-ui/core";

interface LastChangesTextProps {
  children: string | React.ReactElement<any, string> | React.ReactNodeArray;
  styles?: React.CSSProperties;
}

const LastChangesText: FC<LastChangesTextProps> = ({ children, styles }) => {
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
