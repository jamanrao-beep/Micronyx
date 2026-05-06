import Link from 'next/link'

interface TopbarProps {
    title?: string
}

export default function Topbar({ title }: TopbarProps) {
    return (
        <div className="dashboard-topbar">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                {title && (
                    <span style={{ fontSize: '15px', fontWeight: 600, color: '#F1F5F9' }}>
                        {title}
                    </span>
                )}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {/* Verified badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(34,197,94,0.08)',
                        border: '1px solid rgba(34,197,94,0.2)',
                        borderRadius: '6px',
                        padding: '6px 12px',
                    }}
                >
                    <span style={{ fontSize: '12px' }}>🛡</span>
                    <span style={{ fontSize: '12px', fontWeight: 500, color: '#22C55E' }}>
                        Identity Verified
                    </span>
                </div>

                {/* Status badge */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        background: 'rgba(108,99,255,0.08)',
                        border: '1px solid rgba(108,99,255,0.2)',
                        borderRadius: '6px',
                        padding: '6px 12px',
                    }}
                >
                    <span className="glow-dot" style={{ background: 'var(--primary)' }} />
                    <span style={{ fontSize: '12px', fontWeight: 500, color: 'var(--primary)' }}>
                        Status: Active
                    </span>
                </div>

                {/* Notification */}
                <button className="topbar-icon-btn">🔔</button>

                {/* Create task */}
                <Link href="/dashboard/tasks" style={{ textDecoration: 'none' }}>
                    <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                        + Create Task
                    </button>
                </Link>

                {/* Avatar */}
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
    )
}