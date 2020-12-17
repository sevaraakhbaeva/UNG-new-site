import React from "react";
import { useParams } from "react-router-dom";
import PagesWithFiles from "components/filePages/PagesWithFiles";
import * as API from "constants/api";
import LoadingContainer from "components/LoadingContainer";

const PagesWithFilesContainer = ({ title, breadCrumbsTitle, url }) => {
  const { subId } = useParams();

  return (
    <LoadingContainer
      api={API.SUBCATEGORIES_FILES + "/" + subId}
      component={PagesWithFiles}
      title={title}
      breadCrumbsTitle={breadCrumbsTitle}
      url={url}
    />
  );
};

export default PagesWithFilesContainer;
