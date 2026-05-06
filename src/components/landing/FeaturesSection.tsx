'use client'

const features = [
    {
        icon: '⚙️',
        title: 'Precision Quality Control',
        desc: 'Multi-layered validation protocols and consensus algorithms ensure near-zero error rates in complex data labeling and verification.',
    },
    {
        icon: '👥',
        title: 'Scalable Workforce',
        desc: 'Access a global network of specialized contributors, pre-vetted for high-complexity industrial, medical, and technical tasks.',
    },
    {
        icon: '📊',
        title: 'Real-time Analytics',
        desc: 'Monitor every task cycle with millisecond latency. Track cost efficiency, throughput speed, and contributor performance live.',
    },
]

export default function FeaturesSection() {
    return (
        <section
            id="platform"
            style={{
                padding: '100px 32px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <p
                style={{
                    textAlign: 'center',
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    color: '#64748B',
                    textTransform: 'uppercase',
                    marginBottom: '16px',
                }}
            >
                ENGINEERING EXCELLENCE
            </p>

            <h2
                style={{
                    textAlign: 'center',
                    fontSize: 'clamp(28px, 3vw, 40px)',
                    fontWeight: 700,
                    color: '#F1F5F9',
                    letterSpacing: '-0.02em',
                    marginBottom: '64px',
                }}
            >
                The Precision Architecture
            </h2>

            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                }}
            >
                {features.map((feature) => (
                    <div
                        key={feature.title}
                        className="card"
                        style={{ padding: '32px', transition: 'border-color 0.2s, transform 0.2s', cursor: 'default' }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = 'rgba(108, 99, 255, 0.4)'
                            e.currentTarget.style.transform = 'translateY(-4px)'
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#1E2535'
                            e.currentTarget.style.transform = 'translateY(0)'
                        }}
                    >
                        <div
                            style={{
                                width: '44px',
                                height: '44px',
                                background: 'rgba(108, 99, 255, 0.12)',
                                border: '1px solid rgba(108, 99, 255, 0.2)',
                                borderRadius: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '20px',
                                marginBottom: '20px',
                            }}
                        >
                            {feature.icon}
                        </div>
                        <h3
                            style={{
                                fontSize: '17px',
                                fontWeight: 600,
                                color: '#F1F5F9',
                                marginBottom: '12px',
                            }}
                        >
                            {feature.title}
                        </h3>
                        <p style={{ fontSize: '14px', lineHeight: 1.7, color: '#94A3B8' }}>
                            {feature.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}