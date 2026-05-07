import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

const Disputes = () => {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Integrity Monitor</h1>
                    </header>

                    <div className="glass-panel p-8">
                        <div className="flex items-center gap-4 text-amber-400 bg-amber-400/10 p-4 rounded-lg border border-amber-400/20 mb-8">
                            <span>⚠️</span>
                            <p className="text-sm font-medium">Batch #882-Alpha requires immediate verification due to low confidence scores.</p>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Active Resolution Cases</h3>
                            <div className="glass-panel p-4 bg-white/5">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm font-bold text-white">Case #RES-220</p>
                                    <span className="badge badge-red">High Priority</span>
                                </div>
                                <p className="text-xs text-slate-500 mt-2">Disputed by Client: Weyland-Yutani</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Disputes;