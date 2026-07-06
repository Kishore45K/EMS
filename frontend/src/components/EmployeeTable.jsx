import React from 'react';

function EmployeeTable({
    employees,
    onEdit,
    onDelete,
    onView,
    role
}) {
    return (
        <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
            <table className="min-w-full border-collapse text-sm">
                <thead className="bg-slate-950 text-left text-xs uppercase tracking-[0.25em] text-slate-100">
                    <tr>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Email</th>
                        <th className="px-6 py-4">Department</th>
                        <th className="px-6 py-4">Salary</th>
                        <th className="px-6 py-4">Joining Date</th>
                        {role === 'admin' && <th className="px-6 py-4">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr
                            key={employee._id}
                            onClick={() => onView(employee._id)}
                            className="cursor-pointer border-t border-slate-200 transition hover:bg-slate-50"
                        >
                            <td className="px-6 py-4 font-medium text-slate-900">{employee.name}</td>
                            <td className="px-6 py-4 text-slate-600">{employee.email}</td>
                            <td className="px-6 py-4 text-slate-600">{employee.department}</td>
                            <td className="px-6 py-4 text-slate-600">₹{employee.salary}</td>
                            <td className="px-6 py-4 text-slate-600">
                                {new Date(employee.joiningDate).toLocaleDateString()}
                            </td>
                            {role === 'admin' && (
                                <td className="px-6 py-4">
                                    <div className="flex flex-wrap gap-2 justify-center">
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onEdit(employee._id);
                                            }}
                                            className="rounded-full bg-cyan-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-500"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onDelete(employee._id);
                                            }}
                                            className="rounded-full bg-rose-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-rose-500"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeTable;