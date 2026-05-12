import React from 'react';

export default function DisputesAdmin() {
    return (
        <>
            <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase mb-10">Integrity & Disputes</h1>

            <div className="glass-panel p-6 bg-rose-500/5 border border-rose-500/20 rounded-2xl mb-8">
                <p className="text-sm text-rose-200">
                    <span className="font-black">URGENT:</span> 27 unresolved logic mismatches detected in #CP-2024-882.
                </p>
            </div>

            <div className="space-y-4">
                {[1, 2, 3].map((i: number) => {
                    return (
                        <div key={i} className="glass-panel p-6 flex justify-between items-center group cursor-pointer hover:border-white/20 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="w-12 h-12 bg-white/5 rounded flex items-center justify-center font-black italic">!</div>
                                <div>
                                    <h4 className="text-white font-bold">Logic Discrepancy #DISP-{1000 + i}</h4>
                                    <p className="text-[10px] text-slate-500 uppercase">Worker W-9921 vs. Ground Truth</p>
                                </div>
                            </div>
                            <button className="text-[10px] font-black tracking-widest text-brand-primary uppercase border border-brand-primary/30 px-4 py-2 rounded hover:bg-brand-primary hover:text-white transition-all">
                                Initialize Audit
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}