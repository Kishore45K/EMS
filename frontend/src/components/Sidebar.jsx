import React, { useEffect, useState } from 'react';
import {
    FaTachometerAlt,
    FaUsers,
    FaUserPlus,
    FaUserCircle,
    FaSignOutAlt
} from 'react-icons/fa';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Sidebar() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:3000/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setProfile(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <aside className="fixed left-0 top-0 z-30 flex h-screen w-72 flex-col bg-slate-950 px-6 py-8 text-slate-100 shadow-2xl shadow-slate-900/30">
            <div className="mb-10 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Employee Management</p>
                <h2 className="mt-3 text-2xl font-semibold">EMS Dashboard</h2>
            </div>

            <nav className="flex flex-col gap-2">
                <button
                    type="button"
                    onClick={() => navigate('/dashboard')}
                    className="flex items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-white"
                >
                    <FaTachometerAlt />
                    Dashboard
                </button>

                <button
                    type="button"
                    onClick={() => navigate('/employees')}
                    className="flex items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-white"
                >
                    <FaUsers />
                    Employees
                </button>

                {profile?.role === 'admin' && (
                    <button
                        type="button"
                        onClick={() => navigate('/add-employee')}
                        className="flex items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-white"
                    >
                        <FaUserPlus />
                        Add Employee
                    </button>
                )}

                <button
                    type="button"
                    onClick={() => navigate('/profile')}
                    className="flex items-center gap-3 rounded-3xl px-4 py-3 text-left text-sm font-medium text-slate-100 transition hover:bg-slate-800 hover:text-white"
                >
                    <FaUserCircle />
                    Profile
                </button>
            </nav>

            <div className="mt-auto pt-6">
                <button
                    type="button"
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500"
                >
                    <FaSignOutAlt />
                    Logout
                </button>
            </div>
        </aside>
    );
}

export default Sidebar;
