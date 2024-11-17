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
      {
        type: "email", // Built-in Ant Design email validation
        message: "The input is not a valid email!",
      },
    ],
    type: "input",
    placeholder: "Enter email",
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
      {
        pattern: new RegExp(/^01[0125][0-9]{8}$/), // Example for a 10-digit phone number
        message: "Phone number must be 11 digits starts with 010/011/012/015!",
      },
    ],
    type: "input",
    placeholder: "Enter phone",
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
      {
        value: "Marketing",
        label: "Marketing",
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
    onchange: null,
  },
];

export default FormData;
