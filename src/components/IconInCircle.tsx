import React, { FC, ReactNode } from "react";
import { Box, Grid } from "@material-ui/core";

interface IconInCircleProps {
  Icon: ReactNode;
}

const IconInCircle: FC<IconInCircleProps> = ({ Icon }) => {
  return (
    <Box
      borderRadius="50%"
      border={4}
      borderColor="#03A3DF"
      style={{
        display: "inline-block",
        width: 150,
        height: 150,
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

export default IconInCircle;
