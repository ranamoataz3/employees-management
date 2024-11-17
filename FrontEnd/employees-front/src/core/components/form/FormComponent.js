import "./form.css";
import { Button, Form, Input, InputNumber, Select } from "antd";

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
          defaultValue={props.defaultValue}
          onChange={props.onChange}
          options={props.options}
        />
      );
    case "number":
      return (
        <InputNumber
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      );
    default:
      return (
        <Input
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          onChange={props.onChange}
        />
      );
  }
}

const FormComponent = ({ fields, form, onFormSubmit }) => {
  console.log("Fields:", fields);

  const onFinish = (values) => {
    // console.log("Form Values:", values);
    onFormSubmit(values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      variant="filled"
      // style={{
      //   maxWidth: 600,
      // }}
      // initialValues={{
      //   variant: "filled",
      // }}
      onFinish={onFinish}
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
