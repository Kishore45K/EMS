import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditEmployee() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        name: '',
        email: '',
        department: '',
        salary: '',
        phone: '',
        address: '',
        joiningDate: ''
    });

    useEffect(() => {

        const fetchEmployee = async () => {

            try {

                const token = localStorage.getItem('token');

                const res = await axios.get(
                    `http://localhost:3000/api/employees/${id}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setEmployee({
                    name: res.data.name || '',
                    email: res.data.email || '',
                    department: res.data.department || '',
                    salary: res.data.salary || '',
                    phone: res.data.phone || '',
                    address: res.data.address || '',
                    joiningDate: res.data.joiningDate
                        ? res.data.joiningDate.split('T')[0]
                        : ''
                });

            } catch (error) {

                console.log(error);

                alert('Failed to fetch employee');
            }
        };

        fetchEmployee();

    }, [id]);

    const handleChange = (e) => {

        setEmployee({
            ...employee,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {

        try {

            const token = localStorage.getItem('token');

            await axios.put(
                `http://localhost:3000/api/employees/${id}`,
                employee,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert('Employee Updated Successfully');

            navigate('/employees');

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                'Failed to update employee'
            );
        }
    };

    return (
        <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Edit Record</p>
                <h1 className="text-4xl font-semibold text-slate-950">Edit Employee</h1>
            </div>

            <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-xl">
                <input
                    type="text"
                    name="name"
                    placeholder="Employee Name"
                    value={employee.name}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Employee Email"
                    value={employee.email}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />
                <input
                    type="text"
                    name="department"
                    placeholder="Department"
                    value={employee.department}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />
                <input
                    type="number"
                    name="salary"
                    placeholder="Salary"
                    value={employee.salary}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone Number"
                    value={employee.phone}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />
                <textarea
                    name="address"
                    placeholder="Address"
                    value={employee.address}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    rows={4}
                />
                <input
                    type="date"
                    name="joiningDate"
                    value={employee.joiningDate}
                    onChange={handleChange}
                    className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full rounded-3xl bg-cyan-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-500"
                >
                    Update Employee
                </button>
            </div>
        </div>
    );
}

export default EditEmployee;