import React from "react";
import { Typography } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import LastChangesText from "./LastChangesText";
import HtmlConverter from "./HtmlConverter";
import { useTranslation } from "react-i18next";

const TextLocalizationContainer = ({ content }) => {
  const { t } = useTranslation();

  return (
    <BlockLayout
      title={t(`${content}.title`)}
      breadcrumbNames={[
        ...t(`${content}.breadcrumbNames`, { returnObjects: true }),
        t(`${content}.title`),
      ]}
    >
      {t(`${content}.paragraphTitle`) !== "" && (
        <Typography align="center" variant="h4">
          {t(`${content}.paragraphTitle`)}
        </Typography>
      )}

      <Typography>
        <HtmlConverter htmlString={t(`${content}.paragraphs`)} />
      </Typography>

      <LastChangesText>{t(`${content}.lastChange`)}</LastChangesText>
    </BlockLayout>
  );
};

export default TextLocalizationContainer;
