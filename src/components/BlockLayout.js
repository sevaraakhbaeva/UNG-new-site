import React from "react";
import Title from "./Title";
import Block from "./Block";
import { Typography, Breadcrumbs } from "@material-ui/core";

const BlockLayout = ({ children, title, breadcrumbNames }) => {
  return (
    <Block withBackground withOrnament>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbNames.map((name, i) => (
          <Typography
            color={i === breadcrumbNames.length - 1 ? "primary" : "initial"}
          >
            {name}
          </Typography>
        ))}
      </Breadcrumbs>
      <Title>{title}</Title>
      {children}
    </Block>
  );
};

export default BlockLayout;
