'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function CTASection() {
    const [hovered, setHovered] = useState(false)

    return (
        <section
            style={{
                padding: '80px 32px',
                textAlign: 'center',
                borderTop: '1px solid #1E2535',
            }}
        >
            <h2
                style={{
                    fontSize: 'clamp(24px, 3vw, 36px)',
                    fontWeight: 700,
                    color: '#F1F5F9',
                    marginBottom: '16px',
                    letterSpacing: '-0.02em',
                }}
            >
                Ready to scale your intelligence operations?
            </h2>
            <p style={{ color: '#94A3B8', marginBottom: '32px', fontSize: '15px' }}>
                Join hundreds of enterprise partners who rely on Micronyx for high-velocity data processing.
            </p>
            <Link href="/register">
                <button
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    style={{
                        padding: '16px 40px',
                        fontSize: '15px',
                        fontWeight: 600,
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        background: hovered ? 'var(--primary)' : 'transparent',
                        color: hovered ? 'white' : 'var(--primary)',
                        border: '1px solid var(--primary)',
                    }}
                >
                    Create Enterprise Account
                </button>
            </Link>
        </section>
    )
}