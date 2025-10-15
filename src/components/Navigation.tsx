'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  currentLang: 'en' | 'ko'
  onToggleLanguage: () => void
}

const translations = {
  en: {
    home: 'Home',
    vibecoding: 'vibecoding',
    features: 'Features',
    portfolio: 'Portfolio',
    contact: 'Contact',
    startProject: 'Start Project'
  },
  ko: {
    home: '홈',
    vibecoding: '바이브코딩',
    features: '특징',
    portfolio: '포트폴리오',
    contact: '연락처',
    startProject: '프로젝트 시작'
  }
}

export default function Navigation({ currentLang, onToggleLanguage }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const t = translations[currentLang]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-20' : 'bg-black/95 backdrop-blur-20'
    } border-b border-blue-400/10`}>
      <div className="max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-white text-2xl font-bold">CSKIT</span>
          <span className="text-blue-400 text-sm font-medium">vibecoding</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          <a href="#home" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 relative group">
            {t.home}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#vibecoding" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 relative group">
            {t.vibecoding}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#features" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 relative group">
            {t.features}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#portfolio" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 relative group">
            {t.portfolio}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-all duration-300 hover:-translate-y-0.5 relative group">
            {t.contact}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onToggleLanguage}
            className="px-4 py-2 border border-blue-400 text-blue-400 rounded-xl hover:bg-blue-400 hover:text-black transition-all duration-300 font-semibold"
          >
            {currentLang === 'en' ? 'KO' : 'EN'}
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 font-semibold">
            {t.startProject}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-blue-400/40 text-blue-400"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M3.75 6.75A.75.75 0 0 1 4.5 6h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm0 5.25a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 0 1.5h-15a.75.75 0 0 1-.75-.75zm.75 4.5a.75.75 0 0 0 0 1.5h15a.75.75 0 0 0 0-1.5h-15z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 z-50 w-72 bg-black/95 border-l border-blue-400/10 transform transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="px-6 py-4 flex items-center justify-between border-b border-blue-400/10">
          <div className="flex items-center gap-2">
            <span className="text-white text-xl font-bold">CSKIT</span>
            <span className="text-blue-400 text-sm font-medium">vibecoding</span>
          </div>
          <button aria-label="Close menu" onClick={() => setMobileOpen(false)} className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-blue-400/40 text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 0 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        <div className="px-6 py-6 space-y-4">
          <a onClick={() => setMobileOpen(false)} href="#home" className="block text-gray-200 text-lg">{t.home}</a>
          <a onClick={() => setMobileOpen(false)} href="#vibecoding" className="block text-gray-200 text-lg">{t.vibecoding}</a>
          <a onClick={() => setMobileOpen(false)} href="#features" className="block text-gray-200 text-lg">{t.features}</a>
          <a onClick={() => setMobileOpen(false)} href="#portfolio" className="block text-gray-200 text-lg">{t.portfolio}</a>
          <a onClick={() => setMobileOpen(false)} href="#contact" className="block text-gray-200 text-lg">{t.contact}</a>
          <div className="pt-4 flex items-center gap-3">
            <button
              onClick={() => { onToggleLanguage(); setMobileOpen(false); }}
              className="flex-1 px-4 py-3 border border-blue-400 text-blue-400 rounded-xl"
            >
              {currentLang === 'en' ? 'KO' : 'EN'}
            </button>
            <button className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl">
              {t.startProject}
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
