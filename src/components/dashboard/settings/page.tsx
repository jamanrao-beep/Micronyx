import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import NeonToggle from '@/components/dashboard/NeonToggle';

export default function SettingsPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-10">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">
                            System Configuration
                        </h1>
                        <p className="text-slate-500 mt-1">Global parameters and security protocols</p>
                    </header>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* System Intelligence Section */}
                        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="text-6xl font-black italic">CORE</span>
                            </div>

                            <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
                                NEURAL ENGINE
                            </h3>

                            <div className="space-y-2">
                                <NeonToggle
                                    label="Autonomous Learning"
                                    description="Allow agents to refine logic based on historical batch data."
                                    defaultEnabled={true}
                                />
                                <NeonToggle
                                    label="Hyper-threading"
                                    description="Enable parallel processing for Lidar and Image tasks."
                                    defaultEnabled={true}
                                />
                                <NeonToggle
                                    label="Predictive Scaling"
                                    description="Auto-allocate GPU resources based on upcoming task volume."
                                />
                            </div>
                        </div>

                        {/* Security Section */}
                        <div className="glass-panel p-8 rounded-2xl border-t-2 border-t-brand-accent/30">
                            <h3 className="text-lg font-black text-white mb-6 flex items-center gap-2">
                                <span className="w-2 h-2 bg-brand-accent rounded-full" />
                                SECURITY PROTOCOLS
                            </h3>

                            <div className="space-y-2">
                                <NeonToggle
                                    label="Biometric Verification"
                                    description="Require facial auth for high-value payouts."
                                />
                                <NeonToggle
                                    label="End-to-End Encryption"
                                    description="Encrypt all data traffic between agents and the hub."
                                    defaultEnabled={true}
                                />
                                <NeonToggle
                                    label="Audit Logging"
                                    description="Maintain a permanent record of every logic operation."
                                    defaultEnabled={true}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Action Footer */}
                    <div className="mt-8 flex justify-end gap-4">
                        <button className="px-8 py-3 text-sm font-bold text-slate-400 hover:text-white transition-colors">
                            RESET DEFAULTS
                        </button>
                        <button className="bg-brand-primary text-white font-black px-10 py-3 rounded-xl text-sm shadow-[0_0_30px_rgba(14,165,233,0.2)] hover:scale-105 transition-transform">
                            APPLY CHANGES
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}