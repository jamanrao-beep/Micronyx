import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import ClientTable from '@/components/dashboard/ClientTable';

export default function ClientsPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                            <div>
                                <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">
                                    Client Portfolio
                                </h1>
                                <p className="text-slate-500 mt-1">Management of industrial logic partnerships</p>
                            </div>

                            <div className="flex gap-3 w-full md:w-auto">
                                <div className="relative flex-1 md:w-64">
                                    <input
                                        type="text"
                                        placeholder="Search entities..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand-primary/50 transition-all"
                                    />
                                </div>
                                <button className="bg-brand-primary text-white font-bold px-6 py-2 rounded-lg text-sm hover:brightness-110 transition-all shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                                    NEW PARTNER
                                </button>
                            </div>
                        </div>
                    </header>

                    {/* Quick Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        {[
                            { label: 'Total Clients', value: '42' },
                            { label: 'Avg. Retention', value: '98.2%' },
                            { label: 'Pending Docs', value: '3' },
                            { label: 'Annual ARR', value: '$12.4M' },
                        ].map((s) => (
                            <div key={s.label} className="glass-panel p-4 rounded-xl border-t border-t-white/10">
                                <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">{s.label}</p>
                                <p className="text-xl font-black text-white">{s.value}</p>
                            </div>
                        ))}
                    </div>

                    <ClientTable />
                </div>
            </div>
        </div>
    );
}