import React from "react";
import BlockLayout from "./BlockLayout";
import { managementData } from "../constants/managementData";
import ManagerBlock from "./ManagerBlock";

const ManagementContainer = () => {
  return (
    <BlockLayout
      title="Rahbariyat"
      breadcrumbNames={["Bosh sahifa", "Kompaniya haqida", "Rahbariyat"]}
    >
      {managementData.map((item, i) => (
        <ManagerBlock key={i} managerData={item} />
      ))}
    </BlockLayout>
  );
};

export default ManagementContainer;
