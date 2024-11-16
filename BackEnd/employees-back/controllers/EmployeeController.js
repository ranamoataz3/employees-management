const Employees = require("../models/Employees");

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
    try {
        const employee = new Employees(req.body);
        await employee.save();
        res.status(200).send(employee);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const updateEmployee = async (req, res) => {
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
}

module.exports = { getEmployees, deleteEmployee, addEmployee, updateEmployee };