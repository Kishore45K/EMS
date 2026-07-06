const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employeeController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, employeeController.addEmployee);

router.get('/', authMiddleware, employeeController.getAllEmployees);

router.get('/:id', authMiddleware, employeeController.getEmployeeById);

router.put('/:id', authMiddleware, employeeController.updateEmployee);

router.delete('/:id', authMiddleware, employeeController.deleteEmployee);

module.exports = router;