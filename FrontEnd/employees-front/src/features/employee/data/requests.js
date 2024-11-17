import axios from "../../../API/axios";
import routes from "../../../API/routes";

export async function getEmployees(setEmployeesData, setLoading) {
  try {
    const response = await axios.get(routes.getEmployees);
    console.log(response);
    addKeyToData(response.data, setEmployeesData);

    setLoading(false);
  } catch (err) {
    console.log(err);
  }
}

export async function deleteEmployee(id, setResponse) {
  try {
    const response = await axios.delete(routes.deleteEmployee + id);
    console.log(response);
    // getEmployees(setEmployeesData, setLoading);
    setResponse("Employee Deleted Successfully");
  } catch (err) {
    console.log(err);
    setResponse("Error Happened in Deleting Employee");
  }
}

const addKeyToData = (data, setEmployeesData) => {
  let count = 1;
  let newdata = data.map((employee) => {
    return { ...employee, key: count++ };
  });
  console.log("Employees.data with keys:", newdata);
  setEmployeesData(newdata);
};

export async function editEmployee(id, employee, setResponse) {
  try {
    const response = await axios.put(routes.updateEmployee + id, employee);
    console.log(response);
    // getEmployees(setEmployeesData, setLoading);
    // setOpen(false);
    setResponse("Employee Edited Successfully");
  } catch (err) {
    console.log(err);
    setResponse("Error Happened in Editing Employee");
  }
}
