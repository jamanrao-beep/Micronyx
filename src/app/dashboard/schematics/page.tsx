import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

const nodes = [
    { id: 'IN-01', label: 'Data Ingest', status: 'Active', load: '12%', color: 'border-brand-primary' },
    { id: 'PR-04', label: 'Neural Core', status: 'Optimal', load: '64%', color: 'border-brand-accent' },
    { id: 'VL-02', label: 'Logic Sync', status: 'Syncing', load: '22%', color: 'border-emerald-500' },
    { id: 'OUT-09', label: 'Relay Output', status: 'Idle', load: '0%', color: 'border-slate-500' },
];

export default function SchematicsPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">
                            System Schematics
                        </h1>
                        <p className="text-slate-500 mt-1">Direct-to-Chip logic flow and node topology</p>
                    </header>

                    {/* Schematic Canvas */}
                    <div className="glass-panel min-h-[600px] relative overflow-hidden flex flex-col items-center justify-center p-12">
                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none"
                            style={{
                                backgroundImage: 'linear-gradient(90deg, #64748B 1px, transparent 1px), linear-gradient(#64748B 1px, transparent 1px)',
                                backgroundSize: '50px 50px'
                            }}
                        />

                        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-8">
                            {nodes.map((node, i) => (
                                <React.Fragment key={node.id}>
                                    {/* Logic Node */}
                                    <div className={`w-48 glass-panel p-6 border-t-4 ${node.color} text-center transition-transform hover:scale-105 cursor-pointer`}>
                                        <p className="text-[9px] font-mono text-slate-500 mb-1">{node.id}</p>
                                        <h3 className="text-sm font-black text-white uppercase italic mb-3">{node.label}</h3>

                                        <div className="flex justify-between items-end mt-4">
                                            <div className="text-left">
                                                <p className="text-[8px] text-slate-500 uppercase">Load</p>
                                                <p className="text-xs font-bold text-brand-primary">{node.load}</p>
                                            </div>
                                            <span className="text-[9px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded">
                                                {node.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Inter-node Connector Line (Horizontal on desktop, vertical on mobile) */}
                                    {i < nodes.length - 1 && (
                                        <div className="flex-1 h-[2px] md:w-full bg-gradient-to-r from-brand-primary/40 to-brand-accent/40 relative">
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/20 animate-ping" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>

                        {/* Bottom System Legend */}
                        <div className="absolute bottom-8 left-8 flex gap-6">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-brand-primary" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold">Active Path</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-slate-500" />
                                <span className="text-[10px] text-slate-500 uppercase font-bold">Standby</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}