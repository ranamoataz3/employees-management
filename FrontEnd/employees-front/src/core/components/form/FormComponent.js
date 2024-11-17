import "./form.css";
import { Button, Form, Input, InputNumber, Select } from "antd";
import { useEffect } from "react";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 6,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 14,
    },
  },
};

function FormItemWrapper(props) {
  switch (props.type) {
    case "select":
      return (
        <Select
          placeholder={props.placeholder}
          onChange={props.onChange}
          options={props.options}
        />
      );
    case "number":
      return (
        <InputNumber
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      );
    default:
      return (
        <Input placeholder={props.placeholder} onChange={props.onChange} />
      );
  }
}

const FormComponent = ({ fields, form, onFormSubmit, intialValues }) => {
  const onFinish = (values) => {
    // console.log("Form Values:", values);
    onFormSubmit(values);
  };

  //handle add or edit
  const handleEdit = () => {
    form.setFieldsValue(intialValues);
    console.log("Initial Values:", intialValues);
  };

  useEffect(() => {
    handleEdit();
  }, [intialValues]);

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant="filled"
      onFinish={onFinish}
      // initialValues={intialValues}
    >
      {fields.map((field) => {
        return (
          <Form.Item label={field.label} name={field.name} rules={field.rules}>
            <FormItemWrapper {...field} />
          </Form.Item>
        );
      })}
    </Form>
  );
};

export default FormComponent;
