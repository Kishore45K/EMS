import React,{useState,useEffect} from "react";
import API from "../services/api";
import { useParams } from "react-router-dom";

function EmployeeDetails() {
    const { id } = useParams();

    const [employee,setEmployee] = useState(null);

    useEffect(() => {
        fetchEmployee();
    }, []);

    const fetchEmployee = async () => {
        try {
            const token = localStorage.getItem('token');

            const res = await API.get(`/api/employees/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            
            setEmployee(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    if(!employee){
        return <h2 className="py-20 text-center text-xl font-medium text-slate-600">Loading...</h2>;
    }

    return (
        <div className="space-y-8">
            <section className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Employee Details</p>
                        <h1 className="mt-3 text-4xl font-semibold text-slate-950">{employee.name}</h1>
                    </div>
                    <span className="rounded-full bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm">
                        Joined: {new Date(employee.joiningDate).toLocaleDateString()}
                    </span>
                </div>
            </section>

            <section className="grid gap-6 rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/10">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-slate-50 p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">{employee.email}</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-50 p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Department</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">{employee.department}</p>
                    </div>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] bg-slate-50 p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Salary</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">₹{employee.salary}</p>
                    </div>
                    <div className="rounded-[1.5rem] bg-slate-50 p-6">
                        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Phone</p>
                        <p className="mt-3 text-lg font-semibold text-slate-950">{employee.phone}</p>
                    </div>
                </div>
                <div className="rounded-[1.5rem] bg-slate-50 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Address</p>
                    <p className="mt-3 text-lg font-semibold text-slate-950">{employee.address}</p>
                </div>
            </section>
        </div>
    );
}

export default EmployeeDetails;