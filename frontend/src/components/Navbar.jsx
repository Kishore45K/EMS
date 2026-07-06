import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const token = localStorage.getItem('token');
                const res = await axios.get('http://localhost:3000/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Logged Out Successfully');
        navigate('/login');
    };

    return (
        <nav className="mb-6 rounded-[2rem] bg-slate-950/95 px-6 py-4 text-slate-100 shadow-xl shadow-slate-900/20 backdrop-blur-sm">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">EMS Console</p>
                    <h1 className="text-2xl font-semibold text-white">Employee Management System</h1>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-sm text-slate-200">
                    {user && (
                        <>
                            <span className="rounded-full bg-white/10 px-3 py-2">👤 {user.username}</span>
                            <span className="rounded-full bg-white/10 px-3 py-2">{user.role}</span>
                        </>
                    )}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-full bg-rose-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-rose-400"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
