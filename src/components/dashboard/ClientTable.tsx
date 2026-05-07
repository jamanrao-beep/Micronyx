import React from 'react';

const clients = [
    { id: 1, name: 'Cyberdyne Systems', sector: 'AI & Robotics', projects: 12, status: 'Active', revenue: '$450,000', color: 'border-l-blue-500' },
    { id: 2, name: 'Tyrell Corporation', sector: 'Biotech', projects: 8, status: 'Active', revenue: '$280,000', color: 'border-l-emerald-500' },
    { id: 3, name: 'Weyland-Yutani', sector: 'Aerospace', projects: 15, status: 'Paused', revenue: '$910,000', color: 'border-l-amber-500' },
    { id: 4, name: 'Stark Industries', sector: 'Defense', projects: 4, status: 'Onboarding', revenue: '$120,000', color: 'border-l-purple-500' },
    { id: 5, name: 'Oscorp', sector: 'Genetics', projects: 6, status: 'Active', revenue: '$340,000', color: 'border-l-rose-500' },
];

const ClientTable = () => {
    return (
        <div className="glass-panel overflow-hidden rounded-2xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-white/5 bg-white/[0.02]">
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Client</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Sector</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Projects</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Status</th>
                            <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Contribution</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                        {clients.map((client) => (
                            <tr key={client.id} className="hover:bg-white/[0.03] transition-colors group cursor-pointer">
                                <td className={`px-6 py-4 border-l-4 ${client.color}`}>
                                    <div className="font-bold text-white group-hover:text-brand-primary transition-colors">{client.name}</div>
                                    <div className="text-[10px] text-slate-500 font-mono">ID: CL-00{client.id}</div>
                                </td>
                                <td className="px-6 py-4 text-sm text-slate-400">{client.sector}</td>
                                <td className="px-6 py-4 text-center">
                                    <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-bold text-brand-accent">
                                        {client.projects}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`text-[10px] px-2 py-1 rounded font-bold uppercase tracking-tight ${client.status === 'Active' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
                                        client.status === 'Paused' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                                            'bg-slate-500/10 text-slate-400 border border-slate-500/20'
                                        }`}>
                                        {client.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right font-mono text-sm font-bold text-white">
                                    {client.revenue}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ClientTable;