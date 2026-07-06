import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function DashboardLayout() {
    return (
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <Sidebar />

            <div className="ml-72 min-h-screen">
                <Navbar />

                <main className="px-6 py-6 lg:px-10">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default DashboardLayout;
