import React from "react";
import { Typography, Box } from "@material-ui/core";

const Paragraph = ({ children, title }) => {
  return (
    <Box mt={2}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Box>
  );
};

export default Paragraph;
