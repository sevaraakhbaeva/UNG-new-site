import React from "react";
import { Typography, Box } from "@material-ui/core";
import HtmlConverter from "components/HtmlConverter";

import { useTranslation } from "react-i18next";
import LastChangesText from "components/LastChangesText";
import { formatDateAndTimeToDate } from "utils/formatDate";

const NewsDetails = ({ results }) => {
  const { i18n } = useTranslation();

  return (
    <Box display="flex" justifyContent="center">
      <Box width="75%">
        <Typography align="center" variant="h3">
          {results.data[`news_title_${i18n.language}`]}
        </Typography>
        <HtmlConverter
          htmlString={results.data[`news_body_${i18n.language}`]}
        />
        <LastChangesText>
          {formatDateAndTimeToDate(results.data["date_updated"])}
        </LastChangesText>
      </Box>
    </Box>
  );
};

export default NewsDetails;
