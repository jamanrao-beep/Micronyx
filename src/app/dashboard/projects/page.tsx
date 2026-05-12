import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import WorkflowStage from '@/components/dashboard/WorkflowStage';

export default function ProjectsPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    {/* Breadcrumbs & Header */}
                    <header className="mb-8">
                        <div className="text-[10px] font-bold text-brand-primary tracking-widest uppercase mb-2">
                            Operations / Batches / #882-Alpha
                        </div>
                        <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">
                            Lidar Point Cloud Labeling
                        </h1>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        {/* Left Column: Workflow Timeline */}
                        <div className="lg:col-span-1 glass-panel p-6 rounded-2xl">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-8">
                                Execution Timeline
                            </h3>
                            <WorkflowStage
                                title="Data Ingestion"
                                status="COMPLETED"
                                details="1.2TB RAW PointCloud Synced"
                            />
                            <WorkflowStage
                                title="Neural Pre-segmentation"
                                status="COMPLETED"
                                details="Model: Axon-V4 (99.2% Conf.)"
                            />
                            <WorkflowStage
                                title="Manual Labeling Verification"
                                status="IN_PROGRESS"
                                details="Batch 04/12 currently active"
                            />
                            <WorkflowStage
                                title="Quality Assurance Loop"
                                status="PENDING"
                                details="Scheduled for 04:00 UTC"
                                isLast={true}
                            />
                        </div>

                        {/* Middle/Right Column: Metrics & Live Feed */}
                        <div className="lg:col-span-2 space-y-6">

                            {/* Resource Usage Stats */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="glass-panel p-6 rounded-2xl border-b border-b-brand-primary/20">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Compute Latency</p>
                                    <p className="text-3xl font-black text-white">14.2ms</p>
                                    <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-primary w-[65%]" />
                                    </div>
                                </div>
                                <div className="glass-panel p-6 rounded-2xl border-b border-b-brand-accent/20">
                                    <p className="text-[10px] font-bold text-slate-500 uppercase">Storage I/O</p>
                                    <p className="text-3xl font-black text-white">842 MB/s</p>
                                    <div className="mt-4 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-brand-accent w-[42%]" />
                                    </div>
                                </div>
                            </div>

                            {/* Live Task Monitor */}
                            <div className="glass-panel p-6 rounded-2xl">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                        Live Task Stream
                                    </h3>
                                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                                        LIVE FEED
                                    </span>
                                </div>

                                <div className="space-y-3 font-mono text-[11px]">
                                    {[
                                        { id: 'T-442', unit: 'AXON-01', action: 'Labeled Object: Pedestrian', conf: '98.2%' },
                                        { id: 'T-443', unit: 'AXON-03', action: 'Labeled Object: Cyclist', conf: '94.5%' },
                                        { id: 'T-444', unit: 'KINETIC-Z', action: 'Segmenting Frame #8821', conf: '99.8%' },
                                    ].map((log) => (
                                        <div key={log.id} className="flex justify-between p-3 bg-white/[0.02] border border-white/5 rounded hover:border-brand-primary/30 transition-colors">
                                            <span className="text-brand-primary">{log.id}</span>
                                            <span className="text-slate-400">{log.unit}</span>
                                            <span className="text-slate-200">{log.action}</span>
                                            <span className="text-brand-accent">{log.conf}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}