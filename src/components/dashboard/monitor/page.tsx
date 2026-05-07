import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function MonitorPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">System Telemetry</h1>
                        <p className="text-slate-500">Live hardware & neural throughput metrics</p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
                        {['CPU Load', 'Memory', 'GPU Temp', 'Neural Flux'].map((label, i) => (
                            <div key={label} className="glass-panel p-4">
                                <p className="text-[10px] font-bold text-slate-500 uppercase">{label}</p>
                                <p className="text-2xl font-black text-white">{[42, 88, 64, 12][i]}{i === 2 ? '°C' : '%'}</p>
                            </div>
                        ))}
                    </div>

                    <div className="glass-panel p-8 h-96 relative overflow-hidden">
                        <h3 className="text-sm font-black text-white uppercase mb-4">Throughput Graph (Last 60m)</h3>
                        {/* Mocking the grid lines from Image 25 */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div className="w-full h-64 flex items-end gap-1 mt-10">
                            {Array.from({ length: 40 }).map((_, i) => (
                                <div key={i} className="flex-1 bg-brand-primary/20 hover:bg-brand-primary transition-colors rounded-t-sm" style={{ height: `${Math.random() * 100}%` }} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}