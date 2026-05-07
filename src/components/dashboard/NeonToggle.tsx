"use client";
import React, { useState } from 'react';

interface ToggleProps {
    label: string;
    description: string;
    defaultEnabled?: boolean;
}

const NeonToggle = ({ label, description, defaultEnabled = false }: ToggleProps) => {
    const [enabled, setEnabled] = useState(defaultEnabled);

    return (
        <div className="flex items-center justify-between py-4 border-b border-white/5 last:border-0 group">
            <div className="flex-1 pr-4">
                <h4 className="text-sm font-bold text-slate-200 group-hover:text-brand-primary transition-colors">
                    {label}
                </h4>
                <p className="text-[11px] text-slate-500 mt-0.5">{description}</p>
            </div>

            <button
                onClick={() => setEnabled(!enabled)}
                className={`relative w-11 h-6 rounded-full transition-all duration-300 outline-none ${enabled
                    ? 'bg-brand-primary shadow-[0_0_12px_rgba(14,165,233,0.4)]'
                    : 'bg-white/10'
                    }`}
            >
                <div
                    className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform duration-300 ${enabled ? 'translate-x-5' : 'translate-x-0'
                        }`}
                />
            </button>
        </div>
    );
};

export default NeonToggle;