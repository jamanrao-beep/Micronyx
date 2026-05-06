'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
    { label: 'Dashboard', href: '/admin', icon: '⊞' },
    { label: 'Campaigns', href: '/admin/campaigns', icon: '🚀' },
    { label: 'Finances', href: '/admin/finances', icon: '💰' },
    { label: 'Workers', href: '/admin/workers', icon: '👥' },
    { label: 'Disputes', href: '/admin/disputes', icon: '⚖' },
]

export default function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside className="sidebar">
            <div className="sidebar-logo">
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
                        ⊟
                    </div>
                    <div>
                        <p style={{ fontSize: '13px', fontWeight: 700, color: '#F1F5F9' }}>
                            ADMIN CONSOLE
                        </p>
                        <p style={{ fontSize: '9px', letterSpacing: '0.1em', color: '#334155', textTransform: 'uppercase' }}>
                            ENTERPRISE TIER
                        </p>
                    </div>
                </div>
            </div>

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

            <div className="sidebar-bottom">
                <Link href="/admin/help" className="sidebar-item">
                    <span>❓</span> Help Center
                </Link>
                <Link href="/login" className="sidebar-item">
                    <span>↪</span> Logout
                </Link>
            </div>
        </aside>
    )
}