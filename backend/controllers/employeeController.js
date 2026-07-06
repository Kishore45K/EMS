const Employee = require('../models/Employee');

// Add Employee (Admin Only)
exports.addEmployee = async (req, res) => {

if (req.user.role !== 'admin') {
    return res.status(403).json({
        message: 'Only admin can add employees'
    });
}

try {

    const {
        name,
        email,
        department,
        salary,
        joiningDate,
        phone,
        address
    } = req.body;

    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
        return res.status(400).json({
            message: 'Employee email already exists'
        });
    }

    const newEmployee = new Employee({
        name,
        email,
        department,
        salary,
        joiningDate,
        phone,
        address,
        createdBy: req.user.userId
    });

    await newEmployee.save();

    res.status(201).json({
        message: 'Employee added successfully',
        employee: newEmployee
    });

} catch (error) {

    console.error(error);

    res.status(500).json({
        message: error.message
    });
}

};

// Get All Employees
exports.getAllEmployees = async (req, res) => {

    try {

        const employees = await Employee.find().sort({
            createdAt: -1
        });

        res.status(200).json(employees);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
};

// Get Employee By ID
exports.getEmployeeById = async (req, res) => {

try {

    const employee = await Employee.findById(
        req.params.id
    );

    if (!employee) {
        return res.status(404).json({
            message: 'Employee not found'
        });
    }

    res.status(200).json(employee);

} catch (error) {

    console.error(error);

    res.status(500).json({
        message: error.message
    });
}

};

// Update Employee (Admin Only)
exports.updateEmployee = async (req, res) => {

if (req.user.role !== 'admin') {
    return res.status(403).json({
        message: 'Only admin can update employees'
    });
}

try {

    const {
        name,
        email,
        department,
        salary,
        joiningDate,
        phone,
        address
    } = req.body;

    const updatedEmployee =
        await Employee.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                department,
                salary,
                joiningDate,
                phone,
                address
            },
            {
                returnDocument: 'after'
            }
        );

    if (!updatedEmployee) {
        return res.status(404).json({
            message: 'Employee not found'
        });
    }

    res.status(200).json({
        message: 'Employee updated successfully',
        employee: updatedEmployee
    });

} catch (error) {

    console.error(error);

    res.status(500).json({
        message: error.message
    });
}

};

// Delete Employee (Admin Only)
exports.deleteEmployee = async (req, res) => {

if (req.user.role !== 'admin') {
    return res.status(403).json({
        message: 'Only admin can delete employees'
    });
}

try {

    const deletedEmployee =
        await Employee.findByIdAndDelete(
            req.params.id
        );

    if (!deletedEmployee) {
        return res.status(404).json({
            message: 'Employee not found'
        });
    }

    res.status(200).json({
        message: 'Employee deleted successfully'
    });

} catch (error) {

    console.error(error);

    res.status(500).json({
        message: error.message
    });
}

};
