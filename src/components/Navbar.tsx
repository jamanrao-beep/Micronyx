'use client'

import Link from 'next/link'

export default function Navbar() {
    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 100,
                background: 'rgba(8, 11, 20, 0.85)',
                backdropFilter: 'blur(12px)',
                borderBottom: '1px solid #1E2535',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                padding: '0 32px',
            }}
        >
            <div
                style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none' }}>
                    <span
                        style={{
                            fontSize: '20px',
                            fontWeight: 700,
                            color: '#F1F5F9',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        Micronyx
                    </span>
                </Link>

                {/* Nav Links - hover via CSS class */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    {[
                        { label: 'Platform', href: '#platform' },
                        { label: 'Precision', href: '#precision' },
                        { label: 'Enterprises', href: '#enterprises' },
                        { label: 'Contributors', href: '#contributors' },
                    ].map((item) => (
                        <Link
                            key={item.label}
                            href={item.href}
                            className="nav-link"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                {/* Auth Buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Link href="/login" style={{ textDecoration: 'none' }}>
                        <button className="btn-login">
                            Login
                        </button>
                    </Link>
                    <Link href="/register" style={{ textDecoration: 'none' }}>
                        <button
                            className="btn-primary"
                            style={{ padding: '8px 20px', fontSize: '13px' }}
                        >
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>

            {/* System Status */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '-28px',
                    right: '32px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '10px',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    color: '#64748B',
                    textTransform: 'uppercase',
                }}
            >
                <span className="glow-dot" />
                SYSTEM STATUS: OPERATIONAL
            </div>
        </nav>
    )
}