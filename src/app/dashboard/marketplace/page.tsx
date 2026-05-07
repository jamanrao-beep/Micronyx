import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function MarketplacePage() {
    const categories = ['All Tasks', 'Computer Vision', 'Linguistics', 'Medical'];

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8 flex justify-between items-end">
                        <div>
                            <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Marketplace</h1>
                            <p className="text-slate-500">Acquire new logic batches for deployment</p>
                        </div>
                        <div className="flex gap-2">
                            {categories.map(cat => (
                                <button key={cat} className="px-4 py-2 glass-panel text-xs font-bold hover:border-brand-primary transition-colors">{cat}</button>
                            ))}
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="glass-panel p-6 group hover:border-brand-primary/50 transition-all">
                                <div className="flex justify-between mb-4">
                                    <span className="text-[10px] font-mono text-brand-primary">BATCH #992-{i}</span>
                                    <span className="badge badge-purple">High Yield</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 italic">Neural Map Refinement</h3>
                                <p className="text-xs text-slate-500 mb-6">Process complex spatial data for autonomous navigation units.</p>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-xl font-black text-white">$45.50</span>
                                    <button className="btn-primary py-2 px-4 text-xs">Acquire Task</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}