import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Profile() {

    const [profile, setProfile] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const token = localStorage.getItem('token');

                const res = await axios.get(
                    'http://localhost:3000/api/auth/profile',
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setProfile(res.data);
                console.log(res.data);

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

    if (!profile) return <h2 className="py-20 text-center text-xl font-medium text-slate-600">Loading...</h2>;

    return (
        <div className="grid gap-8 rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="flex flex-col items-center gap-4 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-8 text-center shadow-inner">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                    alt="profile"
                    className="mx-auto h-28 w-28 rounded-full border-4 border-cyan-500 bg-white p-2"
                />
                <h1 className="text-3xl font-semibold text-slate-950">{profile.username}</h1>
                <p className="text-sm text-slate-600">{profile.email}</p>
                <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">{profile.role}</span>
            </div>

            <div className="grid gap-4 rounded-[1.75rem] border border-slate-200 bg-white p-8 shadow-xl">
                <div className="grid gap-6 sm:grid-cols-2">
                    <div className="rounded-3xl bg-slate-50 p-5">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-500">User ID</h2>
                        <p className="mt-3 text-lg font-semibold text-slate-900">{profile._id}</p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-slate-500">Email</h2>
                        <p className="mt-3 text-lg font-semibold text-slate-900">{profile.email}</p>
                    </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                    <button
                        type="button"
                        onClick={() => navigate('/edit-profile')}
                        className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
                    >
                        Edit Profile
                    </button>
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Profile;