import React from "react";
import BlockLayout from "./BlockLayout";
import * as API from "constants/api";
import News from "./news/News";
import LoadingContainer from "components/LoadingContainer";
import { useParams } from "react-router-dom";

const NewsContainer = () => {
  return (
    <BlockLayout
      title="Yangiliklar"
      breadcrumbNames={["Bosh sahifa", "Matbuot markazi", "Yangiliklar"]}
    >
      <LoadingContainer api={API.NEWS_LIST} component={News} />
    </BlockLayout>
  );
};

export default NewsContainer;
