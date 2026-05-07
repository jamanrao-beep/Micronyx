import React from 'react';

interface StageProps {
    title: string;
    status: 'COMPLETED' | 'IN_PROGRESS' | 'PENDING';
    details: string;
    isLast?: boolean;
}

const WorkflowStage = ({ title, status, details, isLast }: StageProps) => {
    const statusConfig = {
        COMPLETED: { color: 'bg-emerald-500', icon: '✓' },
        IN_PROGRESS: { color: 'bg-brand-primary', icon: '●' },
        PENDING: { color: 'bg-white/10', icon: '' },
    };

    return (
        <div className="flex gap-4">
            <div className="flex flex-col items-center">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold border border-white/10 ${statusConfig[status].color}`}>
                    {statusConfig[status].icon}
                </div>
                {!isLast && <div className="w-[1px] h-12 bg-white/10 my-1" />}
            </div>
            <div className="pb-6">
                <h4 className={`text-sm font-bold tracking-tight ${status === 'PENDING' ? 'text-slate-500' : 'text-white'}`}>
                    {title}
                </h4>
                <p className="text-[11px] text-slate-500 mt-1 font-mono">{details}</p>
            </div>
        </div>
    );
};

export default WorkflowStage;