import TableComponent from "../../../core/components/table/Table";
import Employees from "../data/mockup";
import React, { useState, useEffect } from "react";
import styles from "./employees.module.css";
import Loader from "../../../core/components/loader/Loader";
import { getEmployees, deleteEmployee } from "../data/requests";
import ModalComponent from "../../../core/components/modal/ModalComponent";

const EmployeesTable = ({
  open,
  setOpen,
  setEmployee,
  loading,
  setLoading,
  employeesData,
  setEmployeesData,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState("");

  useEffect(() => {
    getEmployees(setEmployeesData, setLoading);
  }, []);

  const onDelete = (key) => {
    // setLoading(true);
    const employee = employeesData.find((employee) => employee.key === key);
    deleteEmployee(employee._id, setResponse);
    setOpenModal(true);
  };

  const onEdit = (key) => {
    let employee = employeesData.find((employee) => employee.key === key);
    setEmployee(employee);
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

          {openModal && (
            <ModalComponent
              open={openModal}
              title="Delete Employee"
              handleOk={() => {
                setLoading(true);
                setOpenModal(false);
                getEmployees(setEmployeesData, setLoading);
              }}
              handleCancel={() => {
                setLoading(true);
                setOpenModal(false);
                getEmployees(setEmployeesData, setLoading);
              }}
            >
              <h1>{response}</h1>
            </ModalComponent>
          )}
        </>
      ) : (
        <Loader color="#14b8a6" />
      )}
    </>
  );
};

export default EmployeesTable;
