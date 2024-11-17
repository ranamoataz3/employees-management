import FormData from "../data/formData";
import FormComponent from "../../../core/components/form/FormComponent";
import ModalComponent from "../../../core/components/modal/ModalComponent";
import { Form } from "antd";
import { useEffect, useState } from "react";
import Loader from "../../../core/components/loader/Loader";

const EmployeesForm = ({ open, setOpen, edit, data }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  //handle add or edit
  const handleEdit = () => {
    if (edit) {
      // set form values
      form.setFieldsValue({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        department: data.department,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    // handleEdit();
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
            fields={FormData}
            form={form}
            onFormSubmit={handleSubmit}
            intialValues={edit ? data : null}
          />
        ) : (
          <Loader color="#14b8a6" />
        )}
      </ModalComponent>
    </>
  );
};

export default EmployeesForm;
