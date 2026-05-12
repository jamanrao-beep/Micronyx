import React from 'react';

const workers = [
  { name: 'Alex J.', id: 'W-9921', accuracy: '99.2%', rank: 'Specialist', status: 'Online' },
  { name: 'Chaitra V.', id: 'W-4002', accuracy: '94.5%', rank: 'Associate', status: 'Offline' },
  { name: 'Sarah K.', id: 'W-1102', accuracy: '98.8%', rank: 'Elite', status: 'Online' },
];

export default function WorkersAdmin() {
  return (
    <>
      <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase mb-10">Labor Force Monitor</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workers.map((worker) => (
          <div key={worker.id} className="glass-panel p-6 border-l-4 border-l-brand-primary hover:border-l-brand-accent transition-all">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{worker.rank}</h4>
                <h3 className="text-xl font-black text-white">{worker.name}</h3>
              </div>
              <div className={`w-2 h-2 rounded-full ${worker.status === 'Online' ? 'bg-emerald-500 shadow-[0_0_8px_#10b981]' : 'bg-slate-700'}`} />
            </div>
            <div className="flex justify-between border-t border-white/5 pt-4">
              <span className="text-[10px] text-slate-500 font-mono italic">{worker.id}</span>
              <span className="text-xs font-bold text-brand-primary">Acc: {worker.accuracy}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}