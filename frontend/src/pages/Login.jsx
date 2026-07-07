import React, { useState } from 'react';
import API from "../services/api";
import { useNavigate, Link } from 'react-router-dom';

function Login() {

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const res = await API.post("/auth/login", data);

            localStorage.setItem(
                'token',
                res.data.token
            );

            alert('Login Successful');

            navigate('/dashboard');

        } catch (error) {

            console.log(error);

            alert(
                error.response?.data?.message ||
                'Login Failed'
            );
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
            <div className="w-full max-w-md rounded-[2rem] bg-white p-10 shadow-2xl shadow-slate-900/10">
                <h1 className="mb-8 text-center text-3xl font-semibold text-slate-950">Login</h1>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={data.email}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={data.password}
                        onChange={handleChange}
                        className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-3xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
                    >
                        Login
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-slate-500">
                    Don't have an account?{' '}
                    <Link className="font-semibold text-cyan-600 hover:text-cyan-500" to="/register">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;