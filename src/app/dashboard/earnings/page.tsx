import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function EarningsPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Financial Hub</h1>
                        <p className="text-slate-500">Revenue analytics and payout orchestration</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="glass-panel p-6 border-b-2 border-brand-primary">
                            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Lifetime Revenue</p>
                            <h2 className="text-3xl font-black text-white">$14,250.00</h2>
                        </div>
                        <div className="glass-panel p-6 border-b-2 border-emerald-500">
                            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Available for Payout</p>
                            <h2 className="text-3xl font-black text-emerald-400">$2,480.00</h2>
                        </div>
                        <div className="glass-panel p-6 border-b-2 border-brand-accent">
                            <p className="text-[10px] font-bold text-slate-500 uppercase mb-1">Pending Review</p>
                            <h2 className="text-3xl font-black text-brand-accent">$412.50</h2>
                        </div>
                    </div>

                    <div className="glass-panel p-8">
                        <h3 className="text-sm font-black text-white uppercase mb-6 tracking-widest">Transaction History</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0">
                                    <div className="font-mono text-xs text-slate-400">MAY 0{i}, 2026</div>
                                    <div className="text-sm font-bold">Logic Batch #882-Alpha Completion</div>
                                    <div className="text-sm font-black text-emerald-400">+$120.00</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}