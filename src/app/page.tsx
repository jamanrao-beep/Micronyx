import Link from 'next/link'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/landing/HeroSection'
import StatsStrip from '@/components/landing/StatsStrip'
import FeaturesSection from '@/components/landing/FeaturesSection'
import CTASection from '@/components/landing/CTASection'
import Footer from '@/components/landing/Footer'
export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-base)', minHeight: '100vh' }}>
        <HeroSection />
        <StatsStrip />
        <FeaturesSection />
        <CTASection />
        <Footer />
      </main>
    </>
  )
}