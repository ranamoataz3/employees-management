const Employees = require("../models/Employees");
const Departments = require("../Data");

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employees.find();
    res.status(200).send(employees);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await Employees.findById(req.params.id);
    if (!employee) {
      return res.status(404).json("Employee not found");
    }
    await Employees.findByIdAndDelete(req.params.id);
    res.status(200).send("Employee deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const addEmployee = async (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send("Request body is empty");
  }

  // validate department
  if (!Departments.includes(req.body.department)) {
    return res.status(400).send("Invalid department");
  }

  try {
    const employee = new Employees(req.body);
    console.log("add employee request", req.body);
    console.log(employee);
    await employee.save();
    res.status(200).send(employee);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const updateEmployee = async (req, res) => {
  // validate request
  if (!req.body) {
    return res.status(400).send("Request body is empty");
  }

  // validate department
  if (!Departments.includes(req.body.department)) {
    return res.status(400).send("Invalid department");
  }

  try {
    const employee = await Employees.findById(req.params.id);
    if (!employee) {
      return res.status(404).json("Employee not found");
    }
    await Employees.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).send("Employee updated successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { getEmployees, deleteEmployee, addEmployee, updateEmployee };
