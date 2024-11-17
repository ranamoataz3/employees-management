import TableComponent from "../../../core/components/table/Table";
import Employees from "../data/mockup";
import React, { useState, useEffect } from "react";
import styles from "./employees.module.css";
import Loader from "../../../core/components/loader/Loader";
import { getEmployees, deleteEmployee } from "../data/requests";

const EmployeesTable = ({ open, setOpen, setEmployee }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getEmployees(setEmployeesData, setLoading);
  }, []);

  // const onSelectChange = (newSelectedEmployeesIDs) => {
  //   console.log("selectedRowKeys changed: ", newSelectedEmployeesIDs);
  //   setSelectedEmployeesIDs(newSelectedEmployeesIDs);
  // };

  const onDelete = (key) => {
    setLoading(true);
    const employee = employeesData.find((employee) => employee.key === key);
    deleteEmployee(employee._id, setEmployeesData, setLoading);
  };

  const onEdit = (key) => {
    // console.log("Edit Employee with key: ", key);
    let employee = employeesData.find((employee) => employee.key === key);
    // employee is the all fields except key

    // console.log("Employee: ", employee);

    // Use destructuring to exclude the `key` field
    const { key: _, ...employeeWithoutKey } = employee;

    // console.log(employeeWithoutKey);
    setEmployee(employeeWithoutKey);
    setOpen(true);
  };

  return (
    // check if loading
    <>
      {!loading ? (
        <>
          {/* {
            
            employeesData.length > 0 ? (
              <div className={styles.container}>
                <TableComponent
                  onDelete={onDelete}
                  onEdit={onEdit}
                  columns={Employees.columns}
                  data={employeesData}
                />
              </div>
            ) : (
              <div className={styles.noData}>
                <h1 className="text-center h1"> No Employees Found</h1>
              </div>
            )
          } */}
          <div className={styles.container}>
            <TableComponent
              onDelete={onDelete}
              onEdit={onEdit}
              columns={Employees.columns}
              data={employeesData}
            />
          </div>
        </>
      ) : (
        <Loader color="#14b8a6" />
      )}
    </>
  );
};

export default EmployeesTable;
