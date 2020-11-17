import React, { FC, ReactNode } from "react";
import { Box, Grid } from "@material-ui/core";

interface IconInCircleProps {
  Icon: ReactNode;
  scale?: number;
  borderWidth?: number;
}

const IconInCircle: FC<IconInCircleProps> = ({ Icon, scale, borderWidth }) => {
  return (
    <Box
      borderRadius="50%"
      border={borderWidth}
      borderColor="#03A3DF"
      style={{
        display: "inline-block",
        width: scale,
        height: scale,
      }}
    >
      <Grid
        style={{ height: "100%", width: "100%" }}
        container
        justify="center"
        alignItems="center"
      >
        {Icon}
      </Grid>
    </Box>
  );
};

IconInCircle.defaultProps = {
  scale: 150,
  borderWidth: 4,
};

export default IconInCircle;
