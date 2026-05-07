import React from 'react';

export interface AgentProps {
    name: string;
    status: 'ACTIVE' | 'IDLE' | 'ERROR';
    type: string;
    uptime: string;
    load: number;
}

const AgentCard = ({ name, status, type, uptime, load }: AgentProps) => {
    const statusColor = {
        ACTIVE: 'bg-emerald-500',
        IDLE: 'bg-amber-500',
        ERROR: 'bg-rose-500',
    }[status];

    return (
        <div className="glass-panel p-5 rounded-xl border-l-4 border-l-brand-primary group hover:border-l-brand-accent transition-all">
            <div className="flex justify-between items-start mb-4">
                <div>
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-tighter">{type}</h4>
                    <h3 className="text-xl font-black text-white group-hover:text-brand-primary transition-colors">
                        {name}
                    </h3>
                </div>
                <div className="flex flex-col items-end">
                    <div className={`w-2 h-2 rounded-full ${statusColor} animate-pulse shadow-[0_0_8px_rgba(0,0,0,0.5)] shadow-current mb-2`} />
                    <span className="text-[10px] font-mono text-slate-500">{uptime}</span>
                </div>
            </div>

            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-[11px] mb-1">
                        <span className="text-slate-500">NEURAL LOAD</span>
                        <span className="text-brand-primary font-bold">{load}%</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-brand-primary to-brand-accent transition-all duration-500"
                            style={{ width: `${load}%` }}
                        />
                    </div>
                </div>

                <div className="flex gap-2">
                    <button className="flex-1 py-2 text-[10px] font-bold bg-white/5 hover:bg-brand-primary/20 rounded border border-white/10 transition-colors uppercase">
                        Logs
                    </button>
                    <button className="flex-1 py-2 text-[10px] font-bold bg-white/5 hover:bg-brand-accent/20 rounded border border-white/10 transition-colors uppercase">
                        Deploy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AgentCard;