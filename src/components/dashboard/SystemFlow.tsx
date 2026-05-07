import React from 'react';

export const SystemFlow = () => {
    return (
        <div className="glass-panel p-8 min-h-[400px] flex items-center justify-around relative">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(90deg, #334155 1px, transparent 1px), linear-gradient(#334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {['INGEST', 'PROCESS', 'VALIDATE', 'OUTPUT'].map((step, i) => (
                <React.Fragment key={step}>
                    <div className="system-node p-6 rounded-lg z-10 text-center w-32">
                        <p className="text-[10px] font-bold text-brand-accent mb-2">STEP 0{i + 1}</p>
                        <p className="text-sm font-black text-white italic">{step}</p>
                    </div>
                    {i < 3 && <div className="h-[2px] flex-1 bg-gradient-to-r from-brand-primary to-brand-accent mx-2 opacity-50" />}
                </React.Fragment>
            ))}
        </div>
    );
};