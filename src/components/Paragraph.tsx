import React, { FC } from "react";
import { Typography, Box } from "@material-ui/core";

interface ParagraphProps {
  children: React.ReactElement<any, string> | React.ReactNodeArray;
  title: string;
}

const Paragraph: FC<ParagraphProps> = ({ children, title }) => {
  return (
    <Box mt={2}>
      <Typography variant="h4">{title}</Typography>
      {children}
    </Box>
  );
};

export default Paragraph;
