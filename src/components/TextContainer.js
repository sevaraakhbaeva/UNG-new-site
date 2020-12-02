import React from "react";
import { Typography } from "@material-ui/core";
import BlockLayout from "./BlockLayout";
import LastChangesText from "./LastChangesText";
import { makeStyles } from "@material-ui/styles";
import HtmlConverter from "./HtmlConverter";

const TextContainer = ({ textPageInfo, isHtml = false }) => {
  return (
    <BlockLayout
      title={textPageInfo.title}
      breadcrumbNames={[
        "Bosh sahifa",
        ...textPageInfo.breadcrumbNames,
        textPageInfo.title,
      ]}
    >
      {textPageInfo.paragraphTitle !== "" && (
        <Typography align="center" variant="h4">
          {textPageInfo.paragraphTitle}
        </Typography>
      )}
      {textPageInfo.paragraphs.map((paragraph) => (
        <>
          {isHtml ? (
            <Typography>
              <HtmlConverter htmlString={paragraph} />
              {/* <div dangerouslySetInnerHTML={{ __html: paragraph }} /> */}
            </Typography>
          ) : (
            <Typography>{paragraph}</Typography>
          )}
        </>
      ))}
      <LastChangesText>{textPageInfo.lastChange}</LastChangesText>
    </BlockLayout>
  );
};

export default TextContainer;
