import React, { FC, ReactNode } from "react";
import { Divider, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

interface TitleProps {
  children: ReactNode;
  // any other props that come into the component
}

const useStyles = makeStyles((theme) => ({
  dividerStyle: {
    background: "#03A3DF",
    width: "60px",
    height: "5px",
    borderRadius: "50px",
  },
}));

const Title: FC<TitleProps> = ({ children }) => {
  const classes = useStyles();
  return (
    <Box style={{ marginBottom: "30px" }}>
      <Typography variant="h3">{children}</Typography>
      <Divider classes={{ root: classes.dividerStyle }} />
    </Box>
  );
};

export default Title;
