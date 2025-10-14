'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import VibecodingSection from '@/components/VibecodingSection'
import FeaturesSection from '@/components/FeaturesSection'
import PortfolioSection from '@/components/PortfolioSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  const [currentLang, setCurrentLang] = useState<'en' | 'ko'>('en')

  useEffect(() => {
    // Check for saved language preference
    const savedLang = localStorage.getItem('cskit-lang') as 'en' | 'ko'
    if (savedLang) {
      setCurrentLang(savedLang)
    }
  }, [])

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'ko' : 'en'
    setCurrentLang(newLang)
    localStorage.setItem('cskit-lang', newLang)
  }

  return (
    <main className="min-h-screen">
      <Navigation currentLang={currentLang} onToggleLanguage={toggleLanguage} />
      <Hero currentLang={currentLang} />
      <VibecodingSection currentLang={currentLang} />
      <FeaturesSection currentLang={currentLang} />
      <PortfolioSection currentLang={currentLang} />
      <ContactSection currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </main>
  )
}
