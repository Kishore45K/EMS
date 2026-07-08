import React, { useEffect, useState } from 'react';
import API from "../services/api";
import { useNavigate } from 'react-router-dom';

import SearchBar from '../components/Searchbar';
import EmployeeTable from '../components/EmployeeTable';

function Employees() {

    const [employees, setEmployees] = useState([]);
    const [profile, setProfile] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const employeesPerPage = 5;

    const navigate = useNavigate();

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

            // If backend returns array
            setEmployees(
                Array.isArray(res.data)
                    ? res.data
                    : res.data.employees
            );

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                'Failed to fetch employees'
            );

        } finally {

            setLoading(false);
        }
    };

    const handleDelete = async (id) => {

        const confirmDelete = window.confirm(
            'Are you sure you want to delete this employee?'
        );

        if (!confirmDelete) return;

        try {

            const token = localStorage.getItem('token');

            await axios.delete(
                `http://localhost:3000/api/employees/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert('Employee Deleted Successfully');

            fetchEmployees();

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                'Failed to delete employee'
            );
        }
    };

    const handleEdit = (id) => {
        navigate(`/edit-employee/${id}`);
    };

    const handleView = (id) => {
        navigate(`/employee/${id}`);
    };

    // Search
    const filteredEmployees = employees.filter((employee) =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination
    const indexOfLastEmployee =
        currentPage * employeesPerPage;

    const indexOfFirstEmployee =
        indexOfLastEmployee - employeesPerPage;

    const currentEmployees =
        filteredEmployees.slice(
            indexOfFirstEmployee,
            indexOfLastEmployee
        );

    const totalPages = Math.ceil(
        filteredEmployees.length / employeesPerPage
    );

    console.log("employees:", employees);

    console.log("filteredEmployees:", filteredEmployees);

    console.log("currentEmployees:", currentEmployees);

    if (loading) {
        return <h2 className="py-20 text-center text-xl font-medium text-slate-600">Loading Employees...</h2>;
    }

    return (
        <div className="space-y-8">
            <div className="flex flex-col gap-4 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Employee Directory</p>
                    <h1 className="mt-3 text-4xl font-semibold text-slate-950">Employees</h1>
                </div>

                {profile?.role === 'admin' && (
                    <button
                        onClick={() => navigate('/add-employee')}
                        className="w-full rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500 sm:w-auto"
                    >
                        Add Employee
                    </button>
                )}
            </div>

            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

            {currentEmployees.length === 0 ? (
                <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
                    <h3 className="text-center text-lg font-semibold text-slate-700">No Employees Found</h3>
                </div>
            ) : (
                <>
                    <EmployeeTable employees={currentEmployees} onEdit={handleEdit} onDelete={handleDelete} onView={handleView} role={profile?.role} />

                    <div className="flex flex-wrap items-center justify-center gap-3 rounded-[2rem] bg-white p-6 shadow-2xl shadow-slate-900/10">
                        <button
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <span className="text-sm font-medium text-slate-600">Page {currentPage} of {totalPages}</span>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                            className="rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Employees;