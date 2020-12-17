import React from "react";
import { useParams } from "react-router-dom";
import LoadingContainer from "components/LoadingContainer";

import TenderList from "components/tenders/TenderList";
import * as API from "constants/api";

const TenderContainer = () => {
  const { id, page } = useParams();

  return (
    <LoadingContainer
      api={API.TENDER_LIST + "/" + id + "?page=" + page}
      component={TenderList}
    />
  );
};

export default TenderContainer;
