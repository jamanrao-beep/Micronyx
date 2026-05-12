'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LayoutDashboard, Users, Settings, Briefcase, Zap } from 'lucide-react';

const navItems = [
    { label: 'Dashboard', href: '/dashboard', icon: '⊞' },
    { label: 'Agents', href: '/dashboard/agents', icon: '⚡' },
    { label: 'Clients', href: '/dashboard/clients', icon: '👥' },
    { label: 'Projects', href: '/dashboard/projects', icon: '📂' },
    { label: 'Marketplace', href: '/dashboard/marketplace', icon: '🛒' },
    { label: 'Earnings', href: '/dashboard/earnings', icon: '💳' },
    { label: 'Disputes', href: '/dashboard/disputes', icon: '⚖' },
    { label: 'Monitor', href: '/dashboard/monitor', icon: '📈' },
    { label: 'Identity', href: '/dashboard/identity', icon: '🆔' },
    { label: 'Support', href: '/dashboard/support', icon: '🎧' },
    { label: 'Hardware', href: '/dashboard/hardware', icon: '🛠️' },
    { label: 'Schematics', href: '/dashboard/schematics', icon: '📐' },
]

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside className="sidebar">
            {/* Logo + workspace label */}
            <div className="sidebar-logo">
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        marginBottom: '4px',
                    }}
                >
                    <div
                        style={{
                            width: '28px',
                            height: '28px',
                            background: 'var(--primary)',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '14px',
                        }}
                    >
                        ⚡
                    </div>
                    <div>
                        <p style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9' }}>
                            Micronyx
                        </p>
                        <p
                            style={{
                                fontSize: '9px',
                                letterSpacing: '0.1em',
                                color: '#334155',
                                textTransform: 'uppercase',
                            }}
                        >
                            PRECISION WORKSPACE
                        </p>
                    </div>
                </div>
            </div>

            {/* Nav Items */}
            <div className="sidebar-section">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`sidebar-item ${pathname === item.href ? 'active' : ''}`}
                    >
                        <span style={{ fontSize: '15px' }}>{item.icon}</span>
                        {item.label}
                    </Link>
                ))}
            </div>

            {/* Bottom actions */}
            <div className="sidebar-bottom">
                <button
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        fontWeight: 500,
                        color: '#64748B',
                        cursor: 'pointer',
                        background: 'rgba(108,99,255,0.08)',
                        border: '1px solid rgba(108,99,255,0.15)',
                        width: '100%',
                        fontFamily: 'Inter, sans-serif',
                        marginBottom: '8px',
                    }}
                >
                    <span>✚</span> New Campaign
                </button>

                <Link href="/dashboard/settings" className="sidebar-item">
                    <span>⚙</span> Settings
                </Link>
                <Link href="/login" className="sidebar-item">
                    <span>↪</span> Logout
                </Link>
            </div>
        </aside>
    )
}