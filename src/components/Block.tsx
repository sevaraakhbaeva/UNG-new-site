import React, { FC, ReactElement, ReactNodeArray, CSSProperties } from "react";
import { Container, Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

interface BlockProps {
  children: ReactElement<any, string> | ReactNodeArray;
  style?: CSSProperties;
  withBackground?: boolean;
}

const useStyles = makeStyles({
  container: {
    paddingTop: 50,
    paddingBottom: 50,
  },
});

const Block: FC<BlockProps> = ({ children, style, withBackground }) => {
  const classes = useStyles({ withBackground: withBackground });
  return (
    <Box
      style={{
        width: "100%",
        background: withBackground ? "#FAFAFA" : "",
      }}
    >
      <Container className={classes.container} style={{ ...style }}>
        {children}
      </Container>
    </Box>
  );
};

Block.defaultProps = {
  style: {},
  withBackground: false,
};

export default Block;
