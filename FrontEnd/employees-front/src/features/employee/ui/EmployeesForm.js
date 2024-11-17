import FormData from "../data/formData";
import FormComponent from "../../../core/components/form/FormComponent";
import ModalComponent from "../../../core/components/modal/ModalComponent";
import { Form } from "antd";
import { useEffect, useState } from "react";
import Loader from "../../../core/components/loader/Loader";
import { editEmployee, getEmployees, addEmployee } from "../data/requests";

const EmployeesForm = ({
  open,
  setOpen,
  edit,
  data,
  setData,
  loading,
  setLoading,
  setEmployeesData,
}) => {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = (values) => {
    console.log("Form Values in handle submit:", values);
    console.log("data in handle submit:", data);

    if (!edit) {
      addEmployee(values, setResponse);
    } else {
      editEmployee(data._id, values, setResponse);
    }
    setOpenModal(true);
    setData({});
    form.resetFields();
  };

  return (
    <>
      <ModalComponent
        open={open}
        title={edit ? "Edit Employee" : "Add Employee"}
        handleOk={() => {
          if (!openModal) {
            form.submit();
          } else {
            setOpenModal(false);
            setLoading(true);
            getEmployees(setEmployeesData, setLoading);
            setOpen(false);
          }
        }}
        handleCancel={() => {
          setOpenModal(false);
          setLoading(true);
          getEmployees(setEmployeesData, setLoading);
          setOpen(false);
        }}
      >
        {!loading ? (
          !openModal && open ? (
            <FormComponent
              fields={FormData}
              form={form}
              onFormSubmit={handleSubmit}
              intialValues={edit ? data : {}}
            />
          ) : (
            <h1>{response}</h1>
          )
        ) : (
          <Loader color="#14b8a6" />
        )}
      </ModalComponent>
    </>
  );
};

export default EmployeesForm;
