const FormData = [
  {
    label: "First Name",
    name: "firstName",
    rules: [
      {
        required: true,
        message: "Please enter first name",
      },
    ],
    type: "input",
    placeholder: "Enter first name",
    defaultValue: "RR",
    onchange: null,
  },
  {
    label: "Last Name",
    name: "lastName",
    rules: [
      {
        required: true,
        message: "Please enter last name",
      },
    ],
    type: "input",
    placeholder: "Enter last name",
    defaultValue: "",
    onchange: null,
  },
  {
    label: "Email",
    name: "email",
    rules: [
      {
        required: true,
        message: "Please enter email",
      },
    ],
    type: "input",
    placeholder: "Enter email",
    defaultValue: "",
    onchange: null,
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    rules: [
      {
        required: true,
        message: "Please enter phone",
      },
    ],
    type: "input",
    placeholder: "Enter phone",
    defaultValue: "",
    onchange: null,
  },
  {
    label: "Department",
    name: "department",
    rules: [
      {
        required: true,
        message: "Please select department",
      },
    ],
    type: "select",
    placeholder: "Select department",
    defaultValue: "",
    onchange: null,
    options: [
      {
        value: "HR",
        label: "HR",
      },
      {
        value: "IT",
        label: "IT",
      },
      {
        value: "Finance",
        label: "Finance",
      },
    ],
  },
  {
    label: "Position",
    name: "position",
    rules: [
      {
        required: true,
        message: "Please enter position",
      },
    ],
    type: "input",
    placeholder: "Enter position",
    defaultValue: "",
    onchange: null,
  },
  {
    label: "Salary",
    name: "salary",
    rules: [
      {
        required: true,
        message: "Please enter salary",
      },
    ],
    type: "number",
    placeholder: "Enter salary",
    defaultValue: "",
    onchange: null,
  },
];

export default FormData;
