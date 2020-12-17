import React from "react";
import Title from "./Title";
import Block from "./Block";
import { Typography, Breadcrumbs } from "@material-ui/core";
import { useTranslation } from "react-i18next";

const BlockLayout = ({ children, title, breadcrumbNames }) => {
  const { t } = useTranslation();
  return (
    <Block withBackground withOrnament>
      <Breadcrumbs aria-label="breadcrumb">
        {breadcrumbNames.map((name, i) => (
          <Typography
            key={i}
            color={i === breadcrumbNames.length - 1 ? "primary" : "initial"}
          >
            {t(name)}
          </Typography>
        ))}
      </Breadcrumbs>
      <Title>{t(title)}</Title>
      {children}
    </Block>
  );
};

export default BlockLayout;
