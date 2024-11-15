import TableComponent from "../../../core/components/table/Table";
import Employees from "../data/mockup";
import React, { useState } from "react";

const EmployeesTable = () => {
  const [selectedEmployeesIDs, setSelectedEmployeesIDs] = useState([]);
  const [employeesData, setEmployeesData] = useState(Employees.data);

  const onSelectChange = (newSelectedEmployeesIDs) => {
    console.log("selectedRowKeys changed: ", newSelectedEmployeesIDs);
    setSelectedEmployeesIDs(newSelectedEmployeesIDs);
  };
  return (
    <>
      <TableComponent
        columns={Employees.columns}
        data={employeesData}
        selectedRowKeys={selectedEmployeesIDs}
        onSelectChange={onSelectChange}
      />
    </>
  );
};

export default EmployeesTable;
