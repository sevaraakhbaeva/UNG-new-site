import React from "react";
import { Box, Grid } from "@material-ui/core";

const IconInCircle = ({ Icon, borderWidth, ...rest }) => {
  return (
    <Box
      borderRadius="50%"
      border={borderWidth}
      borderColor="#03A3DF"
      style={{
        display: "inline-block",
      }}
      {...rest}
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
  borderWidth: 4,
};

export default IconInCircle;
