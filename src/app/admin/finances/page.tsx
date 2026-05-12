import React from 'react';

export default function FinancesAdmin() {
    return (
        <>
            <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase mb-10">Enterprise Finances</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="glass-panel p-8 border-b-4 border-brand-primary">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Total Monthly Burn</p>
                    <h2 className="text-4xl font-black text-white mt-2">$428,500</h2>
                </div>
                <div className="glass-panel p-8 border-b-4 border-emerald-500">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Worker Payouts (Est.)</p>
                    <h2 className="text-4xl font-black text-emerald-400 mt-2">$312,200</h2>
                </div>
                <div className="glass-panel p-8 border-b-4 border-brand-accent">
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Net Operations Margin</p>
                    <h2 className="text-4xl font-black text-brand-accent mt-2">24.5%</h2>
                </div>
            </div>

            <div className="glass-panel p-8 rounded-2xl">
                <h3 className="text-sm font-black text-white uppercase tracking-widest mb-6">Regional Spend Distribution</h3>
                <div className="space-y-6">
                    {[
                        { region: 'North America (NA-East)', spend: '$184k', pct: 43 },
                        { region: 'European Union (EU-Central)', spend: '$122k', pct: 28 },
                        { region: 'Asia Pacific (APAC-South)', spend: '$94k', pct: 22 },
                    ].map((item) => (
                        <div key={item.region}>
                            <div className="flex justify-between text-xs mb-2">
                                <span className="text-slate-300 font-bold italic">{item.region}</span>
                                <span className="text-slate-500">{item.spend}</span>
                            </div>
                            <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full bg-brand-primary" style={{ width: `${item.pct}%` }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}