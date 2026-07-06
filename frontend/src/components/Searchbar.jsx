import React from 'react';

function SearchBar({ searchTerm, setSearchTerm }) {
    return (
        <div className="mb-6 max-w-xl">
            <input
                type="text"
                placeholder="🔍 Search by Name, Email or Department"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-3xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 shadow-sm outline-none transition duration-200 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-200"
            />
        </div>
    );
}

export default SearchBar;
