import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import Topbar from '@/components/dashboard/Topbar';
import AgentCard, { AgentProps } from '@/components/dashboard/AgentCard';

const agentsData: AgentProps[] = [
    { name: 'AXON-01', status: 'ACTIVE', type: 'DATA PARSING', uptime: '142h 12m', load: 78 },
    { name: 'AXON-02', status: 'IDLE', type: 'LOGIC INFERENCE', uptime: '89h 04m', load: 12 },
    { name: 'KINETIC-Z', status: 'ACTIVE', type: 'IMAGE SEGMENTATION', uptime: '312h 45m', load: 94 },
    { name: 'NEXUS-V9', status: 'ERROR', type: 'SYSTEM MONITOR', uptime: '0h 12m', load: 0 },
    { name: 'VOID-ALPHA', status: 'ACTIVE', type: 'SECURITY ENFORCER', uptime: '1,204h 33m', load: 45 },
    { name: 'SYNAPSE-X', status: 'ACTIVE', type: 'NLP TRANSLATION', uptime: '45h 55m', load: 61 },
];

export default function AgentsPage() {
    return (
        <div className="dashboard-layout">
            <Sidebar />
            <div className="dashboard-main">
                <Topbar />
                <div className="dashboard-content">
                    <header className="mb-10">
                        <div className="flex justify-between items-end">
                            <div>
                                <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">
                                    Agent Fleet
                                </h1>
                                <p className="text-slate-500 mt-1">Real-time status of distributed autonomous units</p>
                            </div>
                            <button className="btn-primary flex items-center gap-2">
                                <span>+</span> INITIALIZE NEW AGENT
                            </button>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {agentsData.map((agent) => (
                            <AgentCard key={agent.name} {...agent} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}