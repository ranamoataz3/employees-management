import TableComponent from "../../../core/components/table/Table";
import Employees from "../data/mockup";
import React, { useState, useEffect } from "react";
import styles from "./employees.module.css";

const EmployeesTable = ({ onEdit }) => {
  const [selectedEmployeesIDs, setSelectedEmployeesIDs] = useState([]);
  const [employeesData, setEmployeesData] = useState([]);

  const addKeyToData = (data) => {
    let count = 1;
    let newdata = data.map((employee) => {
      return { ...employee, key: count++ };
    });
    console.log("Employees.data with keys:", newdata);
    setEmployeesData(newdata);
  };

  useEffect(() => {
    console.log("Employees.data:", Employees.data);
    addKeyToData(Employees.data);
  }, []);

  useEffect(() => {
    console.log("Updated employeesData:", employeesData);
  }, [employeesData]);

  const onSelectChange = (newSelectedEmployeesIDs) => {
    console.log("selectedRowKeys changed: ", newSelectedEmployeesIDs);
    setSelectedEmployeesIDs(newSelectedEmployeesIDs);
  };

  const onDelete = (key, data) => {
    console.log("onDelete key", key);
    console.log(employeesData);
    console.log(data);

    // let newEmployeesData = employeesData.filter(
    //   (employee) => employee.key !== key
    // );
    // setEmployeesData(newEmployeesData);
  };

  return (
    <div className={styles.container}>
      <TableComponent
        onDelete={onDelete}
        columns={Employees.columns}
        data={employeesData}
        selectedRowKeys={selectedEmployeesIDs}
        onSelectChange={onSelectChange}
      />
    </div>
  );
};

export default EmployeesTable;
