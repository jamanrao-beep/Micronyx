import AdminSidebar from '@/components/dashboard/AdminSidebar'

const campaigns = [
    {
        id: '#CP-2024-882',
        name: 'Lidar Cloud Mapping',
        status: 'Active',
        statusColor: '#22C55E',
        velocity: '124 t/m',
        progress: 78,
    },
    {
        id: '#CP-2024-912',
        name: 'LLM Toxicity Check',
        status: 'Paused',
        statusColor: '#F59E0B',
        velocity: '0 t/m',
        progress: 42,
    },
]

const budgetItems = [
    { label: 'Data Labeling', amount: '$184k', pct: 43, color: 'var(--primary)' },
    { label: 'Content Moderation', amount: '$122k', pct: 28.5, color: '#EC4899' },
    { label: 'Image Segmentation', amount: '$94k', pct: 22, color: 'var(--accent)' },
    { label: 'Transcription', amount: '$28.5k', pct: 6.5, color: '#64748B' },
]

export default function AdminDashboard() {
    return (
        <div className="dashboard-layout">
            <AdminSidebar />

            <div className="dashboard-main">

                {/* Admin Topbar */}
                <div className="dashboard-topbar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ position: 'relative' }}>
                            <input
                                placeholder="Search tasks, workers, or campaigns..."
                                style={{
                                    background: '#161B27',
                                    border: '1px solid #1E2535',
                                    borderRadius: '8px',
                                    padding: '8px 16px 8px 36px',
                                    fontSize: '13px',
                                    color: '#F1F5F9',
                                    outline: 'none',
                                    width: '280px',
                                    fontFamily: 'Inter, sans-serif',
                                }}
                            />
                            <span
                                style={{
                                    position: 'absolute',
                                    left: '12px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    color: '#334155',
                                    fontSize: '14px',
                                }}
                            >
                                🔍
                            </span>
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <button className="topbar-icon-btn">🔔</button>
                        <button className="topbar-icon-btn">⚙</button>
                        <div
                            style={{
                                width: '36px',
                                height: '36px',
                                borderRadius: '50%',
                                background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '14px',
                                fontWeight: 700,
                                color: 'white',
                                cursor: 'pointer',
                            }}
                        >
                            A
                        </div>
                    </div>
                </div>

                <div className="dashboard-content">

                    {/* ── Page Header ── */}
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-start',
                            marginBottom: '32px',
                        }}
                    >
                        <div>
                            <p style={{ fontSize: '11px', letterSpacing: '0.1em', color: '#64748B', textTransform: 'uppercase', marginBottom: '6px' }}>
                                EXECUTIVE OVERVIEW
                            </p>
                            <h1 style={{ fontSize: '26px', fontWeight: 700, color: '#F1F5F9', letterSpacing: '-0.02em' }}>
                                Global Operations Dashboard
                            </h1>
                        </div>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button className="btn-outline" style={{ fontSize: '13px', padding: '10px 18px' }}>
                                ↓ Export Report
                            </button>
                            <button className="btn-primary" style={{ fontSize: '13px', padding: '10px 18px' }}>
                                + Launch Campaign
                            </button>
                        </div>
                    </div>

                    {/* ── Top Stats ── */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gap: '16px',
                            marginBottom: '24px',
                        }}
                    >
                        {[
                            { label: 'Active Campaigns', value: '1,284', delta: '+12%', deltaColor: '#22C55E', icon: '⊞' },
                            { label: 'Monthly Spend', value: '$428.5k', delta: '-4.2%', deltaColor: '#EF4444', icon: '💳' },
                            { label: 'Worker Accuracy', value: '99.2%', delta: 'High', deltaColor: '#22C55E', icon: '🛡' },
                            { label: 'Pending Disputes', value: '27', delta: 'Urgent', deltaColor: '#EF4444', icon: '⚠' },
                        ].map((stat) => (
                            <div key={stat.label} className="stat-card">
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        marginBottom: '16px',
                                    }}
                                >
                                    <span style={{ fontSize: '20px' }}>{stat.icon}</span>
                                    <span
                                        style={{
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            color: stat.deltaColor,
                                        }}
                                    >
                                        {stat.delta}
                                    </span>
                                </div>
                                <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '6px' }}>
                                    {stat.label}
                                </p>
                                <p
                                    style={{
                                        fontSize: '24px',
                                        fontWeight: 700,
                                        color: '#F1F5F9',
                                        letterSpacing: '-0.02em',
                                    }}
                                >
                                    {stat.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* ── Middle Row ── */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1.5fr 1fr',
                            gap: '20px',
                            marginBottom: '24px',
                        }}
                    >
                        {/* Task Completion Velocity */}
                        <div className="stat-card">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                                <div>
                                    <p style={{ fontSize: '15px', fontWeight: 600, color: '#F1F5F9', marginBottom: '4px' }}>
                                        Task Completion Velocity
                                    </p>
                                    <p style={{ fontSize: '12px', color: '#64748B' }}>
                                        Hourly execution rate across all live campaigns
                                    </p>
                                </div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <span style={{ fontSize: '11px', color: 'var(--primary)' }}>● Live</span>
                                    <span style={{ fontSize: '11px', color: '#334155' }}>● Target</span>
                                </div>
                            </div>

                            {/* Bar chart */}
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'flex-end',
                                    gap: '6px',
                                    height: '100px',
                                    margin: '20px 0 12px',
                                }}
                            >
                                {[55, 70, 60, 80, 75, 85, 65, 90, 70, 95, 80, 100].map((h, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            flex: 1,
                                            height: `${h}%`,
                                            background: i === 11
                                                ? 'linear-gradient(180deg, var(--primary), rgba(108,99,255,0.3))'
                                                : 'rgba(108,99,255,0.12)',
                                            borderRadius: '3px 3px 0 0',
                                        }}
                                    />
                                ))}
                            </div>

                            <div style={{ textAlign: 'right' }}>
                                <span
                                    style={{
                                        background: 'rgba(108,99,255,0.1)',
                                        border: '1px solid rgba(108,99,255,0.2)',
                                        borderRadius: '6px',
                                        padding: '4px 10px',
                                        fontSize: '12px',
                                        color: 'var(--primary)',
                                        fontWeight: 600,
                                    }}
                                >
                                    Live: 64k
                                </span>
                            </div>
                        </div>

                        {/* Budget Allocation */}
                        <div className="stat-card">
                            <p style={{ fontSize: '15px', fontWeight: 600, color: '#F1F5F9', marginBottom: '4px' }}>
                                Budget Allocation
                            </p>
                            <p style={{ fontSize: '12px', color: '#64748B', marginBottom: '24px' }}>
                                Resource distribution by task type
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                {budgetItems.map((item) => (
                                    <div key={item.label}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                marginBottom: '6px',
                                            }}
                                        >
                                            <span style={{ fontSize: '13px', color: '#94A3B8' }}>{item.label}</span>
                                            <span style={{ fontSize: '13px', color: '#94A3B8' }}>
                                                {item.amount} ({item.pct}%)
                                            </span>
                                        </div>
                                        <div className="progress-bar">
                                            <div
                                                className="progress-fill"
                                                style={{
                                                    width: `${item.pct * 2.3}%`,
                                                    background: item.color,
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── Bottom Row ── */}
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1.2fr',
                            gap: '20px',
                        }}
                    >
                        {/* Premium Insight Card */}
                        <div
                            className="stat-card"
                            style={{
                                background: 'linear-gradient(135deg, #0D1117 0%, #0a0820 100%)',
                                border: '1px solid rgba(108,99,255,0.2)',
                                position: 'relative',
                                overflow: 'hidden',
                                padding: '28px',
                            }}
                        >
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'radial-gradient(circle at 70% 30%, rgba(108,99,255,0.08) 0%, transparent 60%)',
                                }}
                            />
                            <div style={{ position: 'relative', zIndex: 1 }}>
                                <span className="badge badge-purple" style={{ marginBottom: '16px', display: 'inline-block' }}>
                                    PREMIUM INSIGHT
                                </span>
                                <h3
                                    style={{
                                        fontSize: '20px',
                                        fontWeight: 700,
                                        color: '#F1F5F9',
                                        marginBottom: '10px',
                                        letterSpacing: '-0.01em',
                                    }}
                                >
                                    Alpha-Sentinel Training v2.0
                                </h3>
                                <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                                    Our highest velocity campaign is currently processing 420 tasks per
                                    minute with 99.8% precision across EMEA nodes.
                                </p>
                                <button className="btn-outline" style={{ fontSize: '13px', padding: '10px 20px' }}>
                                    View Detailed Metrics →
                                </button>
                            </div>
                        </div>

                        {/* Campaign Pulse Table */}
                        <div className="stat-card" style={{ padding: '0' }}>
                            <div
                                style={{
                                    padding: '20px 24px',
                                    borderBottom: '1px solid #1E2535',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <p style={{ fontSize: '15px', fontWeight: 600, color: '#F1F5F9' }}>
                                    Campaign Pulse
                                </p>
                                <div style={{ display: 'flex', gap: '8px' }}>
                                    <button className="topbar-icon-btn" style={{ width: '28px', height: '28px', fontSize: '12px' }}>
                                        ☰
                                    </button>
                                    <button className="topbar-icon-btn" style={{ width: '28px', height: '28px', fontSize: '12px' }}>
                                        ⋮
                                    </button>
                                </div>
                            </div>

                            {/* Column headers */}
                            <div
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1fr',
                                    padding: '12px 24px',
                                    borderBottom: '1px solid #1E2535',
                                    gap: '8px',
                                }}
                            >
                                {['CAMPAIGN ID', 'STATUS', 'VELOCITY', 'PROGRESS'].map((col) => (
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

                            {campaigns.map((c) => (
                                <div
                                    key={c.id}
                                    style={{
                                        display: 'grid',
                                        gridTemplateColumns: '1.2fr 0.8fr 0.8fr 1fr',
                                        padding: '16px 24px',
                                        borderBottom: '1px solid #1E2535',
                                        alignItems: 'center',
                                        gap: '8px',
                                    }}
                                >
                                    <div>
                                        <p style={{ fontSize: '13px', fontWeight: 600, color: '#F1F5F9', marginBottom: '2px' }}>
                                            {c.id}
                                        </p>
                                        <p style={{ fontSize: '11px', color: '#334155' }}>{c.name}</p>
                                    </div>

                                    <span
                                        style={{
                                            display: 'inline-block',
                                            padding: '4px 10px',
                                            borderRadius: '20px',
                                            fontSize: '11px',
                                            fontWeight: 600,
                                            color: c.statusColor,
                                            background: `${c.statusColor}18`,
                                            border: `1px solid ${c.statusColor}30`,
                                        }}
                                    >
                                        {c.status}
                                    </span>

                                    <span style={{ fontSize: '13px', color: '#94A3B8' }}>{c.velocity}</span>

                                    <div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                            <div className="progress-bar" style={{ flex: 1, marginRight: '8px' }}>
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${c.progress}%`,
                                                        background: c.statusColor,
                                                    }}
                                                />
                                            </div>
                                            <span style={{ fontSize: '11px', color: '#64748B', flexShrink: 0 }}>
                                                {c.progress}%
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div style={{ padding: '16px 24px', textAlign: 'center' }}>
                                <a
                                    href="#"
                                    style={{
                                        fontSize: '13px',
                                        color: 'var(--primary)',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                    }}
                                >
                                    View All Active Campaigns »
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}