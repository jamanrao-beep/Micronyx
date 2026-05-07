import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

const Marketplace = () => {
    const tasks = [
        { id: 'T-901', title: 'Edge Detection Tuning', reward: '$45.00', eta: '2h', complexity: 'High' },
        { id: 'T-902', title: 'Dataset Cleaning (NLP)', reward: '$12.00', eta: '45m', complexity: 'Low' },
    ];

    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Task Marketplace</h1>
                        <p className="text-slate-500">Acquire and deploy new logic batches</p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tasks.map((task) => (
                            <div key={task.id} className="glass-panel p-6 border-l-4 border-l-brand-primary">
                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-mono text-slate-500">{task.id}</span>
                                    <span className="badge badge-purple">{task.complexity}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4">{task.title}</h3>
                                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                                    <span className="text-xl font-black text-brand-primary">{task.reward}</span>
                                    <button className="btn-primary py-2 text-xs">Acquire</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketplace;