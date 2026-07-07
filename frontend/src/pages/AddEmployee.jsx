import React,{ useState } from 'react';
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
    const navigate = useNavigate();

    const [employee,setEmployee] = useState({
        name:"",
        email:"",
        department:"",
        salary:"",
        joiningDate:"",
        phone:"",
        address:""
    });

    const handleChange = (e) => {
        setEmployee({...employee,[e.target.name]:e.target.value});
    };

    const handleSubmit = async () => {

    try {

        const token = localStorage.getItem("token");

        const res = await API.post("/api/employees", employee, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            }
        );

        console.log(res.data);

        alert("Employee Added Successfully");
        navigate('/employees')

    } catch (error) {

        console.log(error);

        console.log(error.response?.data);

        alert(
            error.response?.data?.message ||
            "Failed to add employee"
        );
    }
    };

    return (
        <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Employee Management</p>
                <h1 className="text-4xl font-semibold text-slate-950">Add Employee</h1>
            </div>

            <div className="grid gap-6 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-xl">
                <div className="grid gap-6 lg:grid-cols-2">
                    <input
                        name="name"
                        placeholder="Enter Your Name"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                    <input
                        name="email"
                        placeholder="Enter Your Email"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                    <input
                        name="department"
                        placeholder="Department"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                    <input
                        name="salary"
                        placeholder="Enter Your Salary"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                    <input
                        name="phone"
                        placeholder="Enter Your Phone Number"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                    <input
                        name="address"
                        placeholder="Enter Your Address"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                    <input
                        type="date"
                        name="joiningDate"
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-white px-5 py-3 text-sm text-slate-900 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full rounded-3xl bg-cyan-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-cyan-500"
                >
                    Save Employee
                </button>
            </div>
        </div>
    );
};


export default AddEmployee;