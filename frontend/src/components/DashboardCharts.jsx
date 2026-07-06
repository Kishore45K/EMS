import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

function DashboardCharts({ employees }) {

    const departmentCounts = {};

    employees.forEach((employee) => {
        departmentCounts[employee.department] = (departmentCounts[employee.department] || 0) + 1;
    });

    const data = Object.keys(departmentCounts).map((dept) => ({
        name: dept,
        value: departmentCounts[dept]
    }));
    
    const COLORS = [
        '#2563eb',
        '#16a34a',
        '#dc2626',
        '#f59e0b',
        '#9333ea'
    ];

     return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-slate-950">Employees by Department</h3>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-600">{data.length} Departments</span>
            </div>

            <div className="overflow-hidden rounded-[1.75rem] bg-slate-50 p-4 shadow-inner">
                <ResponsiveContainer width="100%" height={320}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            outerRadius={110}
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={index}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>

                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
        )};
export default DashboardCharts;