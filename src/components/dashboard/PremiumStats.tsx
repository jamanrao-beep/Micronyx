import React from 'react';

const PremiumStats = () => {
    const stats = [
        { label: 'System Load', value: '24%', trend: '+2.1%', color: 'text-brand-primary' },
        { label: 'Active Tasks', value: '142', trend: '+12', color: 'text-brand-accent' },
        { label: 'Global Latency', value: '18ms', trend: '-4ms', color: 'text-emerald-400' },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            {stats.map((stat, i) => (
                <div key={i} className="glass-panel p-6 rounded-2xl transition-transform hover:scale-[1.02] cursor-pointer">
                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-2">
                        {stat.label}
                    </p>
                    <div className="flex justify-between items-end">
                        <h3 className={`text-3xl font-extrabold ${stat.color}`}>
                            {stat.value}
                        </h3>
                        <span className="text-[10px] font-mono bg-white/5 px-2 py-1 rounded border border-white/10 text-slate-400">
                            {stat.trend}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PremiumStats;