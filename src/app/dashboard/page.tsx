import React from 'react';
import PremiumStats from '@/components/dashboard/PremiumStats';
import Sidebar from '@/components/dashboard/Sidebar'
import Topbar from '@/components/dashboard/Topbar'
import Link from 'next/link';

const activeTasks = [
    {
        id: 1,
        name: 'Lidar Point Cloud Labeling',
        batch: 'Batch #882-Alpha',
        type: 'COMPUTER VISION',
        typeColor: 'badge-purple',
        timeLeft: '02:45:12',
        reward: '$12.50',
        confidence: 98,
        urgent: false,
    },
    {
        id: 2,
        name: 'NLP Sentiment Correction',
        batch: 'Batch #12-Gamma',
        type: 'LINGUISTICS',
        typeColor: 'badge-cyan',
        timeLeft: '14:12:05',
        reward: '$4.20',
        confidence: 92,
        urgent: false,
    },
    {
        id: 3,
        name: 'Medical Image Segmentation',
        batch: 'Batch #X-Ray-04',
        type: 'MEDICAL',
        typeColor: 'badge-red',
        timeLeft: '00:15:30',
        reward: '$45.00',
        confidence: 100,
        urgent: true,
    },
]

export default function ContributorDashboard() {
    return (
        <div className="dashboard-layout">
            <Sidebar />

            <div className="dashboard-main">
                <Topbar />

                <div className="dashboard-content">

                    {/* ── Welcome Header ── */}
                    <div style={{ marginBottom: '32px' }}>
                        <h1
                            className="text-gradient"
                            style={{
                                fontSize: '32px',
                                fontWeight: 900,
                                letterSpacing: '-0.04em',
                                marginBottom: '6px',
                                textTransform: 'uppercase',
                                fontStyle: 'italic'
                            }}
                        >
                            Operations Center
                        </h1>
                        <p style={{ fontSize: '14px', color: '#64748B' }}>
                            Welcome back, Alex. Performance score increased by{' '}
                            <span style={{ color: '#22C55E', fontWeight: 600 }}>12%</span>.
                        </p>
                    </div>

                    {/* NEW: Premium Stats Layer (Additive) */}
                    <PremiumStats />

                    {/* ── Top Row: Rank + Efficiency ── */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.6fr',
                            gap: '20px',
                            marginBottom: '20px',
                        }}
                    >
                        {/* Rank Card */}
                        <div className="stat-card glass-panel">
                            <p
                                style={{
                                    fontSize: '10px',
                                    letterSpacing: '0.1em',
                                    color: '#64748B',
                                    textTransform: 'uppercase',
                                    marginBottom: '12px',
                                }}
                            >
                                CURRENT RANK
                            </p>
                            <p
                                style={{
                                    fontSize: '22px',
                                    fontWeight: 700,
                                    color: '#F1F5F9',
                                    marginBottom: '16px',
                                }}
                            >
                                Level 5 — Specialist
                            </p>

                            {/* XP Bar */}
                            <div style={{ marginBottom: '8px' }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        marginBottom: '8px',
                                    }}
                                >
                                    <span style={{ fontSize: '12px', color: '#64748B' }}>4,250 / 5,000 XP</span>
                                    <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary)' }}>85%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: '85%' }} />
                                </div>
                            </div>

                            <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '16px' }}>
                                750 XP until Level 6 — Elite Contributor
                            </p>

                            {/* Badge icons */}
                            <div style={{ display: 'flex', gap: '8px' }}>
                                {['⚡', '🌙', '⭐', '👥'].map((icon, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            borderRadius: '8px',
                                            background: 'rgba(108,99,255,0.1)',
                                            border: '1px solid rgba(108,99,255,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '14px',
                                        }}
                                    >
                                        {icon}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Efficiency Tracking Card */}
                        <div className="stat-card glass-panel">
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'flex-start',
                                    marginBottom: '20px',
                                }}
                            >
                                <div>
                                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#F1F5F9', marginBottom: '4px' }}>
                                        Efficiency Tracking
                                    </p>
                                    <p style={{ fontSize: '12px', color: '#64748B' }}>
                                        Task completion speed vs. accuracy (last 30 days)
                                    </p>
                                </div>
                                <span
                                    style={{
                                        fontSize: '11px',
                                        color: '#64748B',
                                        background: '#161B27',
                                        border: '1px solid #1E2535',
                                        borderRadius: '6px',
                                        padding: '4px 10px',
                                    }}
                                >
                                    Last 30 Days
                                </span>
                            </div>

                            {/* Bar chart */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    gap: '6px',
                                    height: '80px',
                                    marginBottom: '12px',
                                }}
                            >
                                {[45, 60, 40, 75, 55, 80, 65, 90, 70, 85, 95, 88].map((h, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            flex: 1,
                                            height: `${h}%`,
                                            background: i === 11
                                                ? 'linear-gradient(180deg, var(--primary), rgba(108,99,255,0.4))'
                                                : 'rgba(108,99,255,0.15)',
                                            borderRadius: '3px 3px 0 0',
                                            transition: 'background 0.2s',
                                        }}
                                    />
                                ))}
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '11px', color: '#334155' }}>DAY 1</span>
                                <span style={{ fontSize: '11px', color: '#334155' }}>DAY 15</span>
                                <span style={{ fontSize: '11px', color: '#334155' }}>TODAY</span>
                            </div>
                        </div>
                    </div>

                    {/* ── Earnings Row ── */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr 1fr',
                            gap: '20px',
                            marginBottom: '20px',
                        }}
                    >
                        {/* Total Earnings */}
                        <div className="stat-card glass-panel">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <span style={{ fontSize: '18px' }}>💳</span>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>Total Earnings</span>
                            </div>
                            <p
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: '#F1F5F9',
                                    letterSpacing: '-0.02em',
                                    marginBottom: '6px',
                                }}
                            >
                                $2,480.00
                            </p>
                            <p style={{ fontSize: '12px', color: '#22C55E' }}>↑ +15% from last month</p>
                        </div>

                        {/* Pending Approval */}
                        <div className="stat-card glass-panel">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <span style={{ fontSize: '18px' }}>⏳</span>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>Pending Approval</span>
                            </div>
                            <p
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: '#F1F5F9',
                                    letterSpacing: '-0.02em',
                                    marginBottom: '6px',
                                }}
                            >
                                $412.50
                            </p>
                            <p style={{ fontSize: '12px', color: '#64748B' }}>⏱ 8 tasks in review</p>
                        </div>

                        {/* Next Payout */}
                        <div className="stat-card glass-panel">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                                <span style={{ fontSize: '18px' }}>🏦</span>
                                <span style={{ fontSize: '13px', color: '#64748B' }}>Next Payout</span>
                            </div>
                            <p
                                style={{
                                    fontSize: '28px',
                                    fontWeight: 700,
                                    color: '#F1F5F9',
                                    letterSpacing: '-0.02em',
                                    marginBottom: '6px',
                                }}
                            >
                                Aug 24
                            </p>
                            <p style={{ fontSize: '12px', color: '#64748B' }}>📅 Scheduled via ACH</p>
                        </div>
                    </div>

                    {/* ── Active Tasks Table ── */}
                    <div className="stat-card glass-panel" style={{ padding: '0' }}>
                        {/* Table header */}
                        <div
                            style={{
                                padding: '20px 24px',
                                borderBottom: '1px solid #1E2535',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#F1F5F9' }}>
                                Active Tasks
                            </h3>
                            <a
                                href="#"
                                style={{
                                    fontSize: '13px',
                                    color: 'var(--primary)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                }}
                            >
                                View All Tasks →
                            </a>
                        </div>

                        {/* Column headers */}
                        <div
                            className="task-row"
                            style={{
                                padding: '12px 24px',
                                borderBottom: '1px solid #1E2535',
                            }}
                        >
                            {['TASK NAME', 'TYPE', 'TIME LEFT', 'REWARD', 'CONFIDENCE', 'ACTION'].map((col) => (
                                <span
                                    key={col}
                                    style={{
                                        fontSize: '10px',
                                        letterSpacing: '0.1em',
                                        color: '#334155',
                                        textTransform: 'uppercase',
                                        fontWeight: 600,
                                    }}
                                >
                                    {col}
                                </span>
                            ))}
                        </div>

                        {/* Task rows */}
                        <div style={{ padding: '0 24px' }}>
                            {activeTasks.map((task) => (
                                <div key={task.id} className="task-row">
                                    {/* Task Name */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <div
                                            style={{
                                                width: '32px',
                                                height: '32px',
                                                borderRadius: '8px',
                                                background: task.urgent
                                                    ? 'rgba(239,68,68,0.1)'
                                                    : 'rgba(108,99,255,0.1)',
                                                border: `1px solid ${task.urgent ? 'rgba(239,68,68,0.2)' : 'rgba(108,99,255,0.2)'}`,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontSize: '14px',
                                                flexShrink: 0,
                                            }}
                                        >
                                            {task.urgent ? '❗' : '📊'}
                                        </div>
                                        <div>
                                            <p style={{ fontSize: '13px', fontWeight: 600, color: '#F1F5F9', marginBottom: '2px' }}>
                                                {task.name}
                                            </p>
                                            <p style={{ fontSize: '11px', color: '#334155' }}>{task.batch}</p>
                                        </div>
                                    </div>

                                    {/* Type */}
                                    <span className={`badge ${task.typeColor}`}>{task.type}</span>

                                    {/* Time Left */}
                                    <span
                                        style={{
                                            fontSize: '13px',
                                            fontWeight: 600,
                                            color: task.urgent ? '#EF4444' : '#94A3B8',
                                            fontVariantNumeric: 'tabular-nums',
                                        }}
                                    >
                                        {task.timeLeft}
                                    </span>

                                    {/* Reward */}
                                    <span
                                        style={{
                                            fontSize: '14px',
                                            fontWeight: 700,
                                            color: '#F1F5F9',
                                        }}
                                    >
                                        {task.reward}
                                    </span>

                                    {/* Confidence */}
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        <span
                                            className="glow-dot"
                                            style={{
                                                background: task.confidence === 100
                                                    ? '#22C55E'
                                                    : task.confidence >= 95
                                                        ? 'var(--accent)'
                                                        : 'var(--primary)',
                                                animation: 'none',
                                            }}
                                        />
                                        <span style={{ fontSize: '13px', color: '#94A3B8' }}>
                                            {task.confidence}%
                                        </span>
                                    </div>

                                    {/* Action */}
                                    <Link href="/dashboard/projects">
                                        <button className="resume-btn">Resume</button>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}