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
          defaultValue={props.defaultValue}
        />
      );
    case "number":
      return (
        <InputNumber
          placeholder={props.placeholder}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        />
      );
    default:
      return (
        <Input
          placeholder={props.placeholder}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
        />
      );
  }
}

const FormComponent = ({
  fields,
  form,
  onFormSubmit,
  intialValues,

}) => {
  const onFinish = (values) => {
    console.log("Form Values inside form component:", values);
    onFormSubmit(values);
  };

  let clonedFields = [];
  if (intialValues) {
    clonedFields = fields.map((field) => ({
      ...field,
      defaultValue: intialValues[field.name],
    }));
    console.log("fields after edition:", clonedFields);
  } else {
    clonedFields = fields.map((field) => ({
      ...field,
      defaultValue: "",
    }));
    console.log("fields without addition:", clonedFields);
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant="filled"
      onFinish={onFinish}
      initialValues={intialValues}
    >
      {clonedFields.map((field, index) => {
        return (
          <Form.Item
            key={index}
            label={field.label}
            name={field.name}
            rules={field.rules}
          >
            <FormItemWrapper {...field} />
          </Form.Item>
        );
      })}
    </Form>
  );
};

export default FormComponent;
