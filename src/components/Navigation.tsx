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
        
        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  )
}
