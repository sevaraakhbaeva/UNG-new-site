import React from "react";
import { Typography, Box } from "@material-ui/core";
import HtmlConverter from "components/HtmlConverter";

import { useTranslation } from "react-i18next";
import LastChangesText from "components/LastChangesText";
import { formatDateAndTimeToDate } from "utils/formatDate";

const NewsDetails = ({ data }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  return (
    <Box display="flex" justifyContent="center">
      <Box width="75%">
        <Typography align="center" variant="h3">
          {data[`news_title_${currentLanguage}`]}
        </Typography>
        <HtmlConverter htmlString={data[`news_body_${currentLanguage}`]} />
        <LastChangesText>
          {formatDateAndTimeToDate(data["date_updated"], currentLanguage)}
        </LastChangesText>
      </Box>
    </Box>
  );
};

export default NewsDetails;
