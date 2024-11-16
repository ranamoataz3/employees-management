const express = require("express");
const employeeController = require("../controllers/EmployeeController");
const employeeRouter = express.Router();

employeeRouter.get("/getEmployees", employeeController.getEmployees);
employeeRouter.post("/addEmployee", employeeController.addEmployee);
employeeRouter.delete("/deleteEmployee/:id", employeeController.deleteEmployee);
employeeRouter.put("/updateEmployee/:id", employeeController.updateEmployee);

module.exports = employeeRouter;
