import React from "react";
import Loader from "react-loader-spinner";
import { Box } from "@material-ui/core";

const CusLoader = () => {
  return (
    <Box
      style={{ height: 300 }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Loader type="ThreeDots" color="#03A3DF" height={100} width={100} />
    </Box>
  );
};

export default CusLoader;
