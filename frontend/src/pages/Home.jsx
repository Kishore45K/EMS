import { Link } from 'react-router-dom';
import { FaUsers, FaShieldAlt, FaFileInvoiceDollar, FaChartLine, FaRocket, FaClipboardList } from 'react-icons/fa';

const features = [
  {
    title: 'Centralized employee profiles',
    description: 'Access personal, job, and performance details from a single dashboard with quick search and filter support.',
    icon: FaUsers,
  },
  {
    title: 'Role-based access & security',
    description: 'Secure team data with smooth authentication and permission controls built for HR workflows.',
    icon: FaShieldAlt,
  },
  {
    title: 'Payroll-ready reports',
    description: 'Generate clean exportable reports for payroll, attendance, and employee reviews in seconds.',
    icon: FaFileInvoiceDollar,
  },
];

const stats = [
  { label: 'Employees managed', value: '1,200+' },
  { label: 'Team productivity', value: '98%' },
  { label: 'Saved hours', value: '450/mo' },
];

function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-10 sm:px-10 lg:px-16">
      <section className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-800 px-6 py-16 shadow-2xl shadow-slate-950/20 sm:px-12 lg:px-20 lg:py-24">
        <div className="absolute -left-24 top-8 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                Modern, reliable employee management
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Manage teams, performance, and payroll with one stunning dashboard.
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                  MERN EMS gives your HR team a clean workspace to onboard employees, monitor records, and generate fast reports—all with responsive, mobile-ready controls.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  to="/login"
                  className="inline-flex w-full items-center justify-center rounded-full bg-cyan-400 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
                >
                  Get started
                </Link>
                <Link
                  to="/register"
                  className="inline-flex w-full items-center justify-center rounded-full border border-slate-700 bg-slate-950/70 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 sm:w-auto"
                >
                  Join now
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 px-5 py-4">
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950/90 p-6 shadow-xl shadow-slate-950/20 sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-rose-400" />
              <div className="space-y-6">
                <div className="flex items-center justify-between gap-4 text-sm text-slate-400">
                  <span className="rounded-full bg-slate-900/90 px-3 py-1">Live dashboard</span>
                  <span className="text-slate-500">Updated seconds ago</span>
                </div>
                <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950 p-5">
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>Employee performance</span>
                    <span className="font-semibold text-white">Top teams</span>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-3xl bg-slate-900/90 p-4">
                      <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                        <span>Engineering</span>
                        <span>32%</span>
                      </div>
                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[32%] rounded-full bg-cyan-400" />
                      </div>
                    </div>
                    <div className="rounded-3xl bg-slate-900/90 p-4">
                      <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                        <span>Design</span>
                        <span>26%</span>
                      </div>
                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[26%] rounded-full bg-fuchsia-500" />
                      </div>
                    </div>
                    <div className="rounded-3xl bg-slate-900/90 p-4">
                      <div className="flex justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                        <span>Operations</span>
                        <span>18%</span>
                      </div>
                      <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                        <div className="h-full w-[18%] rounded-full bg-rose-400" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Monthly payroll</p>
                    <p className="mt-3 text-3xl font-semibold text-white">$24.8K</p>
                  </div>
                  <div className="rounded-3xl border border-slate-800 bg-slate-900/90 p-5">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Active staff</p>
                    <p className="mt-3 text-3xl font-semibold text-white">87</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl space-y-10">
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Why MERN EMS</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Everything your HR workflow needs, designed to scale.</h2>
          </div>
          <Link
            to="/employees"
            className="inline-flex items-center rounded-full border border-cyan-400/30 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-cyan-200 transition hover:border-cyan-300 hover:bg-slate-900"
          >
            Explore employee records
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="group overflow-hidden rounded-[1.75rem] border border-slate-800 bg-slate-950/90 p-7 transition hover:-translate-y-1 hover:border-cyan-500/30 hover:bg-slate-900">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition group-hover:bg-cyan-500/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-400">{feature.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-7xl rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-2xl shadow-slate-950/10 sm:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_0.3fr] lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-300">Built for modern teams</p>
            <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A polished workspace for every role in your company.</h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
              From onboarding to performance reviews, MERN EMS keeps employee data organized and easy to act on. The responsive layout adapts to mobile and desktop so managers can review information anywhere.
            </p>
            <ul className="mt-8 space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-cyan-400" />
                Secure authentication plus role-based pages for HR and admins.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-fuchsia-400" />
                Real-time employee details, edit history, and status tracking.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex h-3 w-3 rounded-full bg-rose-400" />
                Export-ready data, charts, and reports for payroll or audits.
              </li>
            </ul>
          </div>
          <div className="rounded-[1.75rem] border border-slate-800 bg-slate-950 p-6 shadow-xl shadow-slate-950/20">
            <div className="mb-6 flex items-center justify-between rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-300">
              <span>Employee pulse</span>
              <span className="text-cyan-300">Live</span>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm text-slate-400">Top performer</p>
                <p className="mt-2 text-2xl font-semibold text-white">Ava Johnson</p>
                <p className="mt-1 text-sm text-slate-500">Product design</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm text-slate-400">Upcoming review</p>
                <p className="mt-2 text-2xl font-semibold text-white">June 12, 2026</p>
                <p className="mt-1 text-sm text-slate-500">Weekly performance roundup</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
