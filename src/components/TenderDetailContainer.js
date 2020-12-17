import React from "react";
import { useParams } from "react-router-dom";
import LoadingContainer from "components/LoadingContainer";
import TenderDetail from "components/tenders/TenderDetail";
import * as API from "constants/api";

const TenderDetailContainer = () => {
  const { slug } = useParams();

  return (
    <LoadingContainer
      api={API.TENDER_DETAIL + "/" + slug}
      component={TenderDetail}
    />
  );
};

export default TenderDetailContainer;
