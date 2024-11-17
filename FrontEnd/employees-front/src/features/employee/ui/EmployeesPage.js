import EmployeesForm from "./EmployeesForm";
import EmployeesTable from "./EmployeesTable";
import { useState } from "react";

const EmployeesPage = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <EmployeesTable
        open={open}
        setOpen={setOpen}
        setEmployee={setEmployee}
        loading={loading}
        setLoading={setLoading}
        employeesData={employeesData}
        setEmployeesData={setEmployeesData}
      />
      {open && (
        <EmployeesForm
          open={open}
          setOpen={setOpen}
          edit={true}
          data={employee}
          setData={setEmployee}
          loading={loading}
          setLoading={setLoading}
          setEmployeesData={setEmployeesData}
        />
      )}
    </div>
  );
};

export default EmployeesPage;
