import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';

export default function IdentityPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-8">
                        <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Identity & Trust</h1>
                        <p className="text-slate-500">Verification levels and biometric security</p>
                    </header>

                    <div className="max-w-2xl space-y-6">
                        <div className="glass-panel p-6 border-l-4 border-l-emerald-500">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h3 className="text-lg font-bold text-white">Level 2 Verified</h3>
                                    <p className="text-sm text-slate-400">KYC/AML documentation accepted on April 2026</p>
                                </div>
                                <span className="text-2xl">🛡️</span>
                            </div>
                        </div>

                        <div className="glass-panel p-8">
                            <h3 className="text-sm font-black text-white uppercase mb-6">Active Credentials</h3>
                            <div className="space-y-4">
                                {['Passport ID', 'Facial Recognition', 'Hardware Key'].map(cred => (
                                    <div key={cred} className="flex justify-between p-4 bg-white/5 rounded border border-white/10">
                                        <span className="text-slate-300 font-medium">{cred}</span>
                                        <span className="text-xs text-emerald-400 font-bold uppercase">Active</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}