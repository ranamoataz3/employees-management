import EmployeesForm from "./EmployeesForm";
import EmployeesTable from "./EmployeesTable";
import { useState } from "react";
import Button from "../../../core/components/button/Button";

const EmployeesPage = () => {
  const [employeesData, setEmployeesData] = useState([]);
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState({});
  const [loading, setLoading] = useState(true);
  const [edit, setEdit] = useState(false);
  return (
    <div>
      <Button
        onclick={() => {
          setEdit(false);
          setEmployee({});
          setOpen(true);
        }}
        className="centered w-max p-[32px] pb-0"
        btnclassName="bg-primary !text-neutral rounded-md font-semibold text-lg !py-4 !px-8"
      >
        Add Employee
      </Button>

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
          edit={edit}
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
