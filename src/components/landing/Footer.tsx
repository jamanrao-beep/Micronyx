'use client'

const links = ['Terms of Service', 'Privacy Policy', 'Security Compliance', 'API Documentation']

export default function Footer() {
    return (
        <footer
            style={{
                borderTop: '1px solid #1E2535',
                padding: '32px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '16px',
                maxWidth: '1200px',
                margin: '0 auto',
            }}
        >
            <div>
                <p style={{ fontWeight: 700, fontSize: '16px', color: '#F1F5F9' }}>Micronyx</p>
                <p style={{ fontSize: '12px', color: '#64748B', marginTop: '4px' }}>
                    © 2024 Micronyx. Industrial Precision at Scale.
                </p>
            </div>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                {links.map((link) => (
                    <a
                        key={link}
                        href="#"
                        style={{
                            fontSize: '12px',
                            color: '#64748B',
                            textDecoration: 'none',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#94A3B8')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = '#64748B')}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </footer>
    )
}