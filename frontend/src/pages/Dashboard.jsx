import React, { useEffect, useState } from 'react';
import API from "../services/api";
import DashboardCharts from '../components/DashboardCharts';

function Dashboard() {

    const [employeeCount, setEmployeeCount] = useState(0);
    const [profile, setProfile] = useState(null);
    const [employees,setEmployees] = useState([]);

    useEffect(() => {
        fetchProfile();
        fetchEmployees();
    }, []);

    const fetchProfile = async () => {

        try {

            const token = localStorage.getItem('token');

            const res = await API.get("/api/auth/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProfile(res.data);

        } catch (error) {

            console.log(error);
        }
    };

    const fetchEmployees = async () => {

        try {

            const token = localStorage.getItem('token');

            const res = await API.get(
                "/api/employees",
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            console.log("API Response:", res.data);
            console.log("Length:", res.data.length);

            setEmployees(res.data);
            setEmployeeCount(res.data.length);

        } catch (error) {
            console.log("Error fetching employees:", error);
        }
    };

    return (
        <div className="space-y-8">
            <section className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Dashboard</p>
                        <h1 className="mt-4 text-4xl font-semibold text-slate-950">Welcome back, {profile?.username || 'User'}</h1>
                        <p className="mt-2 text-slate-600">Your employee management overview is ready.</p>
                    </div>
                    <div className="rounded-full bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm">
                        Current Role: {profile?.role || 'Visitor'}
                    </div>
                </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-slate-500">Role</h2>
                    <p className="mt-4 text-3xl font-semibold text-slate-950">{profile?.role || 'N/A'}</p>
                </div>
                <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                    <h2 className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</h2>
                    <p className="mt-4 text-3xl font-semibold text-slate-950">{profile?.email || 'Not available'}</p>
                </div>
            </div>

            {profile?.role === 'admin' && (
                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">Total Employees</h3>
                        <p className="mt-4 text-4xl font-semibold text-cyan-600">{employeeCount}</p>
                    </div>
                    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-900/5">
                        <h3 className="text-sm uppercase tracking-[0.3em] text-slate-500">Permissions</h3>
                        <p className="mt-4 text-slate-700">Add, edit and delete employees to manage your team efficiently.</p>
                    </div>
                </div>
            )}

            <section className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
                <DashboardCharts employees={employees} />
            </section>

            {profile?.role === 'employee' && (
                <section className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 shadow-xl">
                    <h2 className="text-2xl font-semibold text-slate-950">Employee Panel</h2>
                    <p className="mt-3 text-slate-600">You can:</p>
                    <ul className="mt-4 list-inside list-disc space-y-2 text-slate-700">
                        <li>View employee records</li>
                        <li>Manage your profile</li>
                        <li>Update personal information</li>
                    </ul>
                    <p className="mt-5 rounded-3xl bg-rose-50 px-4 py-3 text-sm font-medium text-rose-700">
                        Employee accounts cannot add, edit, or delete employees.
                    </p>
                </section>
            )}
        </div>
    );
}

export default Dashboard;