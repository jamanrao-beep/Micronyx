import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

const Earnings = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Financial Hub</h1>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="glass-panel p-6">
                            <p className="text-xs font-bold text-slate-500 uppercase">Total Revenue</p>
                            <h2 className="text-3xl font-black text-white">$14,250.00</h2>
                        </div>
                        <div className="glass-panel p-6">
                            <p className="text-xs font-bold text-slate-500 uppercase">Available Payout</p>
                            <h2 className="text-3xl font-black text-emerald-400">$2,480.00</h2>
                        </div>
                        <div className="glass-panel p-6">
                            <p className="text-xs font-bold text-slate-500 uppercase">Pending Review</p>
                            <h2 className="text-3xl font-black text-brand-accent">$412.50</h2>
                        </div>
                    </div>

                    <div className="glass-panel p-8">
                        <h3 className="text-sm font-black text-white uppercase mb-6">Payout History</h3>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                                    <div className="text-sm text-slate-300 font-mono">MAY 0{i}, 2026</div>
                                    <div className="text-sm font-bold text-white">ACH TRANSFER</div>
                                    <div className="text-sm font-black text-emerald-400">+$1,200.00</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Earnings;