import React, { useEffect, useState } from 'react';
import API from "../services/api";
import { useNavigate } from 'react-router-dom';

function EditProfile() {

    const [profile, setProfile] = useState({
        username: '',
        email: ''
    });

    const navigate = useNavigate();

    useEffect(() => {

        const fetchProfile = async () => {

            const token = localStorage.getItem('token');

            const res = await API.get("/api/auth/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setProfile({
                username: res.data.username,
                email: res.data.email
            });
        };

        fetchProfile();

    }, []);

    const handleChange = (e) => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdate = async () => {

        try {

            const token = localStorage.getItem('token');

            await API.put(
                "/api/auth/profile",
                profile,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            alert('Profile Updated');
            navigate('/profile');

        } catch (error) {

            console.log(error);

            alert('Update Failed');
        }
    };

    return (
        <div className="rounded-[2rem] bg-white p-8 shadow-2xl shadow-slate-900/10">
            <div className="mb-8 space-y-2">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Manage</p>
                <h1 className="text-3xl font-semibold text-slate-950">Edit Profile</h1>
            </div>

            <div className="space-y-5">
                <input
                    name="username"
                    value={profile.username}
                    onChange={handleChange}
                    placeholder="Enter Username"
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />

                <input
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    className="w-full rounded-3xl border border-slate-300 bg-slate-50 px-5 py-3 text-sm text-slate-950 shadow-sm outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
                />

                <button
                    onClick={handleUpdate}
                    className="w-full rounded-3xl bg-cyan-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-500"
                >
                    Update Profile
                </button>
            </div>
        </div>
    );
}

export default EditProfile;