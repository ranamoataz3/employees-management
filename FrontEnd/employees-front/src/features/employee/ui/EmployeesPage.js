import EmployeesForm from "./EmployeesForm";
import EmployeesTable from "./EmployeesTable";
import { useState } from "react";

const EmployeesPage = () => {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});

  return (
    <div>
      <EmployeesTable open={open} setOpen={setOpen} setEmployee={setEmployee} />
      <EmployeesForm
        open={open}
        setOpen={setOpen}
        edit={true}
        data={employee}
      />
    </div>
  );
};

export default EmployeesPage;
