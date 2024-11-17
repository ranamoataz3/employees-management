import FormData from "../data/formData";
import FormComponent from "../../../core/components/form/FormComponent";
import ModalComponent from "../../../core/components/modal/ModalComponent";
import { Form } from "antd";
import { useEffect, useState } from "react";
import Loader from "../../../core/components/loader/Loader";

const EmployeesForm = ({ open, setOpen, edit, data }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(true);

  const [finalData, setFinalData] = useState(FormData);

  //handle add or edit
  const handleEdit = () => {
    if (edit) {
      let tempdata = FormData.map((item) => {
        if (item.name === "firstName") {
          item.defaultValue = data.firstName;
        }
        if (item.name === "lastName") {
          item.defaultValue = data.lastName;
        }
        if (item.name === "email") {
          item.defaultValue = data.email;
        }
        if (item.name === "phoneNumber") {
          item.defaultValue = data.phoneNumber;
        }
        if (item.name === "department") {
          item.defaultValue = data.department;
        }
        if (item.name === "position") {
          item.defaultValue = data.position;
        }
        if (item.name === "salary") {
          item.defaultValue = data.salary;
        }
        return item;
      });
      setFinalData(tempdata);
    }
    setLoading(false);
  };

  useEffect(() => {
    handleEdit();
  }, [edit, data]);

  const handleSubmit = (values) => {
    console.log("Form Values:", values);
    setOpen(false);
    // clear form fields
    form.resetFields();
  };

  return (
    <>
      <ModalComponent
        open={open}
        setOpen={setOpen}
        title={edit ? "Edit Employee" : "Add Employee"}
        handleOk={() => form.submit()}
      >
        {!loading ? (
          <FormComponent
            fields={finalData}
            form={form}
            onFormSubmit={handleSubmit}
          />
        ) : (
          <Loader color="#14b8a6" />
        )}
      </ModalComponent>
    </>
  );
};

export default EmployeesForm;
