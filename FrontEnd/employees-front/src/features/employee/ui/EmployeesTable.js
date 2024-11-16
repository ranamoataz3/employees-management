import TableComponent from "../../../core/components/table/Table";
import Employees from "../data/mockup";
import React, { useState } from "react";
import styles from "./employees.module.css"

const EmployeesTable = () => {
  const [selectedEmployeesIDs, setSelectedEmployeesIDs] = useState([]);
  const [employeesData, setEmployeesData] = useState(Employees.data);

  const onSelectChange = (newSelectedEmployeesIDs) => {
    console.log("selectedRowKeys changed: ", newSelectedEmployeesIDs);
    setSelectedEmployeesIDs(newSelectedEmployeesIDs);
  };
  return (
    <div className={styles.container}>
      <TableComponent
        columns={Employees.columns}
        data={employeesData}
        selectedRowKeys={selectedEmployeesIDs}
        onSelectChange={onSelectChange}
      />
    </div>
  );
};

export default EmployeesTable;
