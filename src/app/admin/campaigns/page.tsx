import React from 'react';

const campaignDetails = [
  { id: 'CP-882', name: 'Lidar Cloud Mapping', status: 'Active', velocity: '124 t/m', accuracy: '99.8%', cost: '$42,000' },
  { id: 'CP-912', name: 'LLM Toxicity Check', status: 'Paused', velocity: '0 t/m', accuracy: '94.2%', cost: '$18,500' },
  { id: 'CP-774', name: 'Medical Segmentation', status: 'Active', velocity: '88 t/m', accuracy: '100%', cost: '$124,000' },
];

export default function CampaignsAdmin() {
  return (
    <>
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-4xl font-black text-white italic tracking-tighter uppercase">Campaign Control</h1>
          <p className="text-slate-500 mt-1">Orchestration of global data processing batches</p>
        </div>
        <button className="btn-primary">+ Launch Batch</button>
      </div>

      <div className="glass-panel overflow-hidden rounded-2xl">
        <table className="w-full text-left border-collapse">
          <thead className="bg-white/5 border-b border-white/10">
            <tr>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Identifier</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Campaign Name</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Velocity</th>
              <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-right">Burn Rate</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {campaignDetails.map((cp) => (
              <tr key={cp.id} className="hover:bg-white/[0.02] transition-colors group cursor-pointer">
                <td className="px-6 py-5 font-mono text-xs text-brand-primary">{cp.id}</td>
                <td className="px-6 py-5">
                  <div className="font-bold text-white">{cp.name}</div>
                  <div className="text-[10px] text-slate-500 uppercase">Acc: {cp.accuracy}</div>
                </td>
                <td className="px-6 py-5 text-center">
                  <span className="bg-brand-primary/10 text-brand-primary px-3 py-1 rounded-full text-xs font-bold font-mono">
                    {cp.velocity}
                  </span>
                </td>
                <td className="px-6 py-5 text-right font-mono text-sm text-white">{cp.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}