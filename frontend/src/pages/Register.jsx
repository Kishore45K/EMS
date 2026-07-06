import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Register() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await axios.post(
                'http://localhost:3000/api/auth/register',
                user
            );

            alert('User Registered Successfully');

            navigate('/login');

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                'Registration Failed'
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <div className="w-full max-w-md rounded-[2rem] bg-white p-10 shadow-2xl shadow-slate-900/10">
                <h1 className="mb-8 text-center text-3xl font-semibold text-slate-950">Register</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={user.username}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={user.email}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={user.password}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-3xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-500"
                    >
                        Register
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Already have an account?{' '}
                    <Link className="font-semibold text-cyan-600 hover:text-cyan-500" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Register;