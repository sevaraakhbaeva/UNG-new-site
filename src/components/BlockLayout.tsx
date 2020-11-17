import React, { FC } from "react";
import Title from "./Title";
import Block from "./Block";
import { Typography, Breadcrumbs } from "@material-ui/core";

interface BlockLayoutProps {
  title: string;
  children: React.ReactElement<any, string> | React.ReactNodeArray;
  breadcrumbNames: Array<string>;
}

const BlockLayout: FC<BlockLayoutProps> = ({
  children,
  title,
  breadcrumbNames,
}) => {
  return (
    <Block withBackground withOrnament style={{ padding: "20px 60px" }}>
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
