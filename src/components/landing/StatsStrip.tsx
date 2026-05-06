export default function StatsStrip() {
    return (
        <section
            style={{
                borderTop: '1px solid #1E2535',
                borderBottom: '1px solid #1E2535',
                padding: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '48px',
                overflowX: 'auto',
            }}
        >
            <div style={{ flexShrink: 0 }}>
                <p
                    style={{
                        fontSize: '32px',
                        fontWeight: 800,
                        color: '#F1F5F9',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                    }}
                >
                    12.4M
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
                    TASKS COMPLETED SUCCESSFULLY
                </p>
            </div>

            <div style={{ height: '40px', width: '1px', background: '#1E2535', flexShrink: 0 }} />

            {['SYNETHIX', 'VORTEX.AI', 'QUBIT-CORE', 'STRATO.SYS'].map((name) => (
                <span
                    key={name}
                    style={{
                        fontSize: '13px',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        color: '#334155',
                        flexShrink: 0,
                    }}
                >
                    {name}
                </span>
            ))}
        </section>
    )
}