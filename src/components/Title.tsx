import React, { FC, ReactNode } from "react";
import { Divider, Typography, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TypographyProps } from "@material-ui/core/Typography";

interface TitleProps extends TypographyProps {
  children: ReactNode;
  textStyle?: React.CSSProperties;
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

const Title: FC<TitleProps> = ({ children, textStyle, variant }) => {
  const classes = useStyles();
  return (
    <Box style={{ marginBottom: "30px" }}>
      <Typography style={{ ...textStyle }} variant={variant}>
        {children}
      </Typography>
      <Divider classes={{ root: classes.dividerStyle }} />
    </Box>
  );
};
Title.defaultProps = {
  textStyle: {},
  variant: "h3",
};
export default Title;
