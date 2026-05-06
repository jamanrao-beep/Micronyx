'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function LoginPage() {
    const [tab, setTab] = useState<'contributor' | 'company'>('contributor')
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="auth-page">

            {/* ── LEFT PANEL — Form ── */}
            <div className="auth-left">

                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none', marginBottom: '48px', display: 'block' }}>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: '#F1F5F9' }}>
                        Micronyx
                    </span>
                </Link>

                {/* Heading */}
                <div style={{ marginBottom: '32px' }}>
                    <h1
                        style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: '#F1F5F9',
                            letterSpacing: '-0.02em',
                            marginBottom: '8px',
                        }}
                    >
                        Micronyx Login
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748B' }}>
                        Access your professional workstation
                    </p>
                </div>

                {/* Tab Switcher */}
                <div
                    style={{
                        display: 'flex',
                        background: '#0D1117',
                        border: '1px solid #1E2535',
                        borderRadius: '8px',
                        padding: '4px',
                        marginBottom: '28px',
                        gap: '4px',
                    }}
                >
                    <button
                        className={`auth-tab ${tab === 'contributor' ? 'active' : 'inactive'}`}
                        onClick={() => setTab('contributor')}
                    >
                        Contributor
                    </button>
                    <button
                        className={`auth-tab ${tab === 'company' ? 'active' : 'inactive'}`}
                        onClick={() => setTab('company')}
                    >
                        Company
                    </button>
                </div>

                {/* Form */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>

                    {/* Email */}
                    <div>
                        <label
                            style={{
                                display: 'block',
                                fontSize: '13px',
                                fontWeight: 500,
                                color: '#94A3B8',
                                marginBottom: '8px',
                            }}
                        >
                            Work Email
                        </label>
                        <div style={{ position: 'relative' }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '14px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '14px',
                                    color: '#334155',
                                }}
                            >
                                ✉
                            </span>
                            <input
                                type="email"
                                className="auth-input"
                                placeholder="name@micronyx.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ paddingLeft: '40px' }}
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '8px',
                            }}
                        >
                            <label style={{ fontSize: '13px', fontWeight: 500, color: '#94A3B8' }}>
                                Security Key
                            </label>
                            <a href="#" className="auth-link" style={{ fontSize: '12px' }}>
                                Forgot Password?
                            </a>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '14px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    fontSize: '14px',
                                    color: '#334155',
                                }}
                            >
                                🔒
                            </span>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="auth-input"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                style={{ paddingLeft: '40px', paddingRight: '44px' }}
                            />
                            <button
                                onClick={() => setShowPassword(!showPassword)}
                                style={{
                                    position: 'absolute',
                                    right: '14px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: '#334155',
                                    fontSize: '14px',
                                    padding: '0',
                                }}
                            >
                                {showPassword ? '🙈' : '👁'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Sign In Button */}
                <button
                    className="btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '15px', marginBottom: '8px' }}
                >
                    Sign In →
                </button>

                {/* Auth matrix label */}
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: '10px',
                        letterSpacing: '0.12em',
                        color: '#334155',
                        textTransform: 'uppercase',
                        margin: '16px 0',
                    }}
                >
                    AUTHENTICATION MATRIX
                </p>

                {/* Social Buttons */}
                <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
                    <button className="social-btn">
                        <span style={{ fontSize: '16px' }}>G</span>
                        Google
                    </button>
                    <button className="social-btn">
                        <span style={{ fontSize: '16px' }}>{'<>'}</span>
                        GitHub
                    </button>
                </div>

                {/* Register Link */}
                <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748B' }}>
                    New to the platform?{' '}
                    <Link href="/register" className="auth-link">
                        Register Micronyx Workstation
                    </Link>
                </p>

            </div>

            {/* ── RIGHT PANEL — Visual ── */}
            <div className="auth-right">

                {/* Grid background */}
                <div className="grid-bg" />
                <div className="grid-bg-glow" />

                {/* Top decorative lines */}
                <div
                    style={{
                        position: 'absolute',
                        top: '80px',
                        right: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '4px',
                        opacity: 0.3,
                    }}
                >
                    <div style={{ width: '120px', height: '1px', background: 'var(--accent)' }} />
                    <div style={{ width: '80px', height: '1px', background: 'var(--accent)' }} />
                    <div style={{ width: '40px', height: '1px', background: 'var(--accent)' }} />
                </div>

                {/* Bar chart decoration */}
                <div
                    style={{
                        position: 'absolute',
                        top: '120px',
                        right: '48px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '6px',
                        opacity: 0.15,
                    }}
                >
                    {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                        <div
                            key={i}
                            style={{
                                width: '12px',
                                height: `${h}px`,
                                background: 'var(--primary)',
                                borderRadius: '2px 2px 0 0',
                            }}
                        />
                    ))}
                </div>

                {/* Live status badge */}
                <div
                    style={{
                        position: 'absolute',
                        top: '48px',
                        left: '48px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        background: 'rgba(22, 27, 39, 0.8)',
                        border: '1px solid #1E2535',
                        borderRadius: '20px',
                        padding: '8px 16px',
                        backdropFilter: 'blur(8px)',
                    }}
                >
                    <span className="glow-dot" />
                    <span
                        style={{
                            fontSize: '11px',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            color: '#64748B',
                            textTransform: 'uppercase',
                        }}
                    >
                        GLOBAL OPERATIONS LIVE
                    </span>
                </div>

                {/* Bottom content */}
                <div style={{ position: 'relative', zIndex: 1 }}>

                    {/* Stats row */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '16px',
                            marginBottom: '32px',
                        }}
                    >
                        <div
                            className="card"
                            style={{
                                padding: '20px',
                                background: 'rgba(13, 17, 23, 0.7)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: 'var(--primary)',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                2.4M+
                            </p>
                            <p
                                style={{
                                    fontSize: '10px',
                                    letterSpacing: '0.1em',
                                    color: '#64748B',
                                    textTransform: 'uppercase',
                                    marginTop: '4px',
                                }}
                            >
                                TASKS PROCESSED
                            </p>
                        </div>
                        <div
                            className="card"
                            style={{
                                padding: '20px',
                                background: 'rgba(13, 17, 23, 0.7)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <p
                                style={{
                                    fontSize: '24px',
                                    fontWeight: 700,
                                    color: 'var(--accent)',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                99.9%
                            </p>
                            <p
                                style={{
                                    fontSize: '10px',
                                    letterSpacing: '0.1em',
                                    color: '#64748B',
                                    textTransform: 'uppercase',
                                    marginTop: '4px',
                                }}
                            >
                                UPTIME LOGIC
                            </p>
                        </div>
                    </div>

                    {/* Headline */}
                    <h2
                        style={{
                            fontSize: 'clamp(28px, 3vw, 40px)',
                            fontWeight: 800,
                            color: '#F1F5F9',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '16px',
                        }}
                    >
                        Welcome to Micronyx
                    </h2>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7, maxWidth: '400px' }}>
                        Experience the next generation of micro-task management
                        with Micronyx's industrial-grade infrastructure. Built for
                        scale, precision, and global performance.
                    </p>

                    {/* Version tag */}
                    <p
                        style={{
                            marginTop: '24px',
                            fontSize: '10px',
                            letterSpacing: '0.12em',
                            color: '#1E2535',
                            textTransform: 'uppercase',
                        }}
                    >
                        SEC.PROTOCOL · APEX-V4
                    </p>
                </div>
            </div>

        </div>
    )
}