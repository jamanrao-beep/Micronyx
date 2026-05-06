'use client'

import Link from 'next/link'

export default function HeroSection() {
    return (
        <section
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                padding: '120px 32px 80px',
                maxWidth: '1200px',
                margin: '0 auto',
                gap: '80px',
                flexWrap: 'wrap',
            }}
        >
            {/* Left Content */}
            <div style={{ flex: 1, minWidth: '300px' }} className="fade-in-up">
                <div className="tag" style={{ marginBottom: '28px' }}>
                    <span className="glow-dot" />
                    ENTERPRISE STANDARD V4.0
                </div>

                <h1
                    style={{
                        fontSize: 'clamp(40px, 5vw, 64px)',
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: '-0.03em',
                        marginBottom: '24px',
                        color: '#F1F5F9',
                    }}
                >
                    Industrial-Grade{' '}
                    <span style={{ color: 'var(--primary)' }}>Logic at Scale</span>
                </h1>

                <p
                    style={{
                        fontSize: '16px',
                        lineHeight: 1.7,
                        color: '#94A3B8',
                        maxWidth: '440px',
                        marginBottom: '40px',
                    }}
                >
                    The world's most precise microtask ecosystem for enterprise-level
                    data operations and elite contributors. Engineering accuracy into
                    every byte with Micronyx.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <Link href="/register">
                        <button className="btn-primary" style={{ fontSize: '15px', padding: '14px 28px' }}>
                            Get Started →
                        </button>
                    </Link>
                    <button className="btn-outline" style={{ fontSize: '15px', padding: '14px 28px' }}>
                        Watch Overview
                    </button>
                </div>
            </div>

            {/* Right — Live Stats Widget */}
            <div style={{ width: '340px', flexShrink: 0 }}>
                <div
                    className="card"
                    style={{
                        padding: '28px',
                        background: 'rgba(22, 27, 39, 0.8)',
                        backdropFilter: 'blur(12px)',
                    }}
                >
                    {/* Widget Header */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '20px',
                        }}
                    >
                        <div>
                            <p
                                style={{
                                    fontSize: '11px',
                                    letterSpacing: '0.1em',
                                    color: '#64748B',
                                    textTransform: 'uppercase',
                                    marginBottom: '8px',
                                }}
                            >
                                ACTIVE THROUGHPUT
                            </p>
                            <p
                                style={{
                                    fontSize: '40px',
                                    fontWeight: 700,
                                    color: '#F1F5F9',
                                    letterSpacing: '-0.03em',
                                }}
                            >
                                1.2 TB{' '}
                                <span style={{ fontSize: '22px', color: '#64748B' }}>/ Hour</span>
                            </p>
                        </div>

                        {/* Grid icon */}
                        <div
                            style={{
                                width: '36px',
                                height: '36px',
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr',
                                gap: '4px',
                                opacity: 0.3,
                            }}
                        >
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    style={{ background: '#64748B', borderRadius: '2px' }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Divider */}
                    <div style={{ height: '1px', background: '#1E2535', marginBottom: '20px' }} />

                    {/* Stats Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                        <div>
                            <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '6px' }}>
                                Validation Score
                            </p>
                            <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--primary)' }}>
                                99.98%
                            </p>
                        </div>
                        <div>
                            <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '6px' }}>
                                Active Nodes
                            </p>
                            <p style={{ fontSize: '22px', fontWeight: 700, color: 'var(--accent)' }}>
                                42.8k
                            </p>
                        </div>
                    </div>

                    {/* Live bar */}
                    <div style={{ marginTop: '24px' }}>
                        <div
                            style={{
                                height: '3px',
                                background: '#1E2535',
                                borderRadius: '2px',
                                overflow: 'hidden',
                            }}
                        >
                            <div
                                style={{
                                    height: '100%',
                                    width: '78%',
                                    background: 'linear-gradient(90deg, var(--primary), var(--accent))',
                                    borderRadius: '2px',
                                }}
                            />
                        </div>
                        <p
                            style={{
                                fontSize: '10px',
                                color: '#64748B',
                                marginTop: '8px',
                                textAlign: 'right',
                                letterSpacing: '0.08em',
                            }}
                        >
                            LIVE FEED · UPDATING
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}