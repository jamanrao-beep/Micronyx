import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

const HardwareLedger = () => {
    const nodes = [
        { id: 'NODE-01-X', type: 'GPU CLUSTER', status: 'Optimal', load: '14%' },
        { id: 'NODE-04-B', type: 'STORAGE ARRAY', status: 'Warning', load: '92%' },
    ];

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Hardware Ledger</h1>
                    </header>
                    <div className="glass-panel overflow-hidden">
                        <table className="w-full text-left">
                            <thead className="bg-white/5 border-b border-white/10">
                                <tr>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Node ID</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Type</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Status</th>
                                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase">Throughput</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {nodes.map((node) => (
                                    <tr key={node.id} className="hover:bg-white/[0.02]">
                                        <td className="px-6 py-4 font-mono text-sm text-brand-primary">{node.id}</td>
                                        <td className="px-6 py-4 text-sm text-slate-300">{node.type}</td>
                                        <td className={`px-6 py-4 text-xs font-bold ${node.status === 'Optimal' ? 'text-emerald-400' : 'text-amber-400'}`}>{node.status}</td>
                                        <td className="px-6 py-4 font-mono text-sm">{node.load}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HardwareLedger;