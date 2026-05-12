import React from 'react';
import ClientTable from '@/components/dashboard/ClientTable';

export default function ClientsPage() {
    return (
        <>
            <header className="mb-8">
                <h1 className="text-4xl font-black text-gradient italic tracking-tighter uppercase">Client Portfolio</h1>
                <p className="text-slate-500 mt-1">Industrial logic partnerships</p>
            </header>
            <ClientTable />
        </>
    );
}