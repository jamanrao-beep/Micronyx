'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function RegisterPage() {
    const [tab, setTab] = useState<'contributor' | 'company'>('contributor')
    const [showPassword, setShowPassword] = useState(false)
    const [agreed, setAgreed] = useState(false)
    const [form, setForm] = useState({
        fullName: '',
        primarySkill: '',
        email: '',
        password: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="auth-page">

            {/* ── LEFT PANEL — Form ── */}
            <div className="auth-left">

                {/* Logo */}
                <Link href="/" style={{ textDecoration: 'none', marginBottom: '40px', display: 'block' }}>
                    <span style={{ fontSize: '20px', fontWeight: 700, color: '#F1F5F9' }}>
                        Micronyx
                    </span>
                </Link>

                {/* Heading */}
                <div style={{ marginBottom: '28px' }}>
                    <h1
                        style={{
                            fontSize: '28px',
                            fontWeight: 700,
                            color: '#F1F5F9',
                            letterSpacing: '-0.02em',
                            marginBottom: '8px',
                        }}
                    >
                        Create Account
                    </h1>
                    <p style={{ fontSize: '14px', color: '#64748B' }}>
                        Enter your details to join the Micronyx network.
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
                        marginBottom: '24px',
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

                {/* Form Fields */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>

                    {/* Name + Skill row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '8px' }}>
                                Full Name
                            </label>
                            <input
                                type="text"
                                name="fullName"
                                className="auth-input"
                                placeholder="John Doe"
                                value={form.fullName}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '8px' }}>
                                Primary Skill
                            </label>
                            <input
                                type="text"
                                name="primarySkill"
                                className="auth-input"
                                placeholder="Data Labeling"
                                value={form.primarySkill}
                                onChange={handleChange}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '8px' }}>
                            Work Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="auth-input"
                            placeholder="john@enterprise.com"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#94A3B8', marginBottom: '8px' }}>
                            Password
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name="password"
                                className="auth-input"
                                placeholder="••••••••"
                                value={form.password}
                                onChange={handleChange}
                                style={{ paddingRight: '44px' }}
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
                                }}
                            >
                                {showPassword ? '🙈' : '👁'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Terms checkbox */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        marginBottom: '20px',
                    }}
                >
                    <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        style={{
                            marginTop: '2px',
                            accentColor: 'var(--primary)',
                            width: '14px',
                            height: '14px',
                            cursor: 'pointer',
                            flexShrink: 0,
                        }}
                    />
                    <label htmlFor="terms" style={{ fontSize: '13px', color: '#64748B', cursor: 'pointer' }}>
                        I agree to the{' '}
                        <a href="#" className="auth-link">Terms of Service</a>
                        {' '}and{' '}
                        <a href="#" className="auth-link">Privacy Policy</a>.
                    </label>
                </div>

                {/* Submit */}
                <button
                    className="btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '15px', marginBottom: '16px' }}
                >
                    Create Account →
                </button>

                {/* Divider */}
                <div className="auth-divider">
                    <span style={{ fontSize: '12px', color: '#334155' }}>OR</span>
                </div>

                {/* Google SSO */}
                <button className="social-btn" style={{ width: '100%', marginBottom: '28px' }}>
                    <span style={{ fontSize: '16px' }}>G</span>
                    Continue with Google
                </button>

                {/* Login link */}
                <p style={{ textAlign: 'center', fontSize: '14px', color: '#64748B' }}>
                    Already have an account?{' '}
                    <Link href="/login" className="auth-link">
                        Log In
                    </Link>
                </p>
            </div>

            {/* ── RIGHT PANEL — Visual ── */}
            <div className="auth-right">

                <div className="grid-bg" />
                <div className="grid-bg-glow" />

                {/* Top badge */}
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
                        MICRONYX INTELLIGENT ENGINE
                    </span>
                </div>

                {/* Decorative vertical bar chart */}
                <div
                    style={{
                        position: 'absolute',
                        bottom: '260px',
                        right: '48px',
                        display: 'flex',
                        alignItems: 'flex-end',
                        gap: '6px',
                        opacity: 0.12,
                    }}
                >
                    {[50, 80, 60, 100, 70, 90, 55, 85, 65, 95, 75, 88].map((h, i) => (
                        <div
                            key={i}
                            style={{
                                width: '14px',
                                height: `${h}px`,
                                background: i % 2 === 0 ? 'var(--primary)' : 'var(--accent)',
                                borderRadius: '2px 2px 0 0',
                            }}
                        />
                    ))}
                </div>

                {/* Feature highlights */}
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                        {[
                            { icon: '🛡', title: 'Secure Escrow', desc: 'Milestone-based automated verification.' },
                            { icon: '⚡', title: 'Massive Scale', desc: 'Deploy work across thousands of agents.' },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="card"
                                style={{
                                    padding: '16px 20px',
                                    background: 'rgba(13, 17, 23, 0.7)',
                                    backdropFilter: 'blur(8px)',
                                    display: 'flex',
                                    alignItems: 'flex-start',
                                    gap: '14px',
                                }}
                            >
                                <span style={{ fontSize: '20px', flexShrink: 0 }}>{item.icon}</span>
                                <div>
                                    <p style={{ fontSize: '14px', fontWeight: 600, color: '#F1F5F9', marginBottom: '2px' }}>
                                        {item.title}
                                    </p>
                                    <p style={{ fontSize: '12px', color: '#64748B' }}>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2
                        style={{
                            fontSize: 'clamp(26px, 3vw, 38px)',
                            fontWeight: 800,
                            color: '#F1F5F9',
                            letterSpacing: '-0.03em',
                            lineHeight: 1.1,
                            marginBottom: '12px',
                        }}
                    >
                        Scale your output with{' '}
                        <span style={{ color: 'var(--primary)' }}>High-Velocity</span>{' '}
                        execution.
                    </h2>
                    <p style={{ fontSize: '14px', color: '#64748B', lineHeight: 1.7 }}>
                        The global infrastructure for specialized microtasks,
                        verified results, and instant payment settlement.
                    </p>

                    <p
                        style={{
                            marginTop: '24px',
                            fontSize: '10px',
                            letterSpacing: '0.12em',
                            color: '#1E2535',
                            textTransform: 'uppercase',
                        }}
                    >
                        MICRONYX INFRASTRUCTURE V4.2
                    </p>
                </div>
            </div>

        </div>
    )
}