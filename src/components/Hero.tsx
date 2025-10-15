'use client'

import { useEffect, useState } from 'react'

interface HeroProps {
  currentLang: 'en' | 'ko'
}

const translations = {
  en: {
    title: 'CSKIT',
    subtitle: 'vibecoding',
    description: 'The Future of Web Development',
    text: 'Build your dream website up to 5x faster with our AI-powered development process. Experience the speed of vibecoding.',
    startProject: 'Start Your Project',
    seeSpeed: 'See Our Speed',
    faster: 'Faster',
    aiPowered: 'AI-Powered',
    delivery: 'Delivery'
  },
  ko: {
    title: 'CSKIT',
    subtitle: '바이브코딩',
    description: '웹 개발의 미래',
    text: 'AI 기반 개발 프로세스로 꿈의 웹사이트를 최대 5배 빠르게 구축하세요. 바이브코딩의 속도를 경험해보세요.',
    startProject: '프로젝트 시작하기',
    seeSpeed: '속도 확인하기',
    faster: '빠름',
    aiPowered: 'AI 기반',
    delivery: '배송'
  }
}

export default function Hero({ currentLang }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)
  const t = translations[currentLang]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="hero min-h-screen flex items-center relative overflow-hidden bg-gradient-radial from-blue-400/10 to-transparent">
      <div className="hero-background absolute inset-0 z-0">
        <div className="code-animation absolute top-1/4 right-1/12 font-mono text-sm text-blue-400 opacity-60">
          <div className="code-line animate-pulse" style={{ animationDelay: '0s' }}>const vibecoding = () =&gt; {'{'}</div>
          <div className="code-line animate-pulse" style={{ animationDelay: '0.5s' }}>  return speed * innovation;</div>
          <div className="code-line animate-pulse" style={{ animationDelay: '1s' }}>{'}'};</div>
          <div className="code-line animate-pulse" style={{ animationDelay: '1.5s' }}>{'// 5x faster development'}</div>
        </div>
        <div className="neural-network absolute inset-0 pointer-events-none">
          <div className="node absolute w-2 h-2 bg-green-400 rounded-full animate-pulse glow-shadow-green" style={{ left: '20%', top: '30%', animationDelay: '0s' }}></div>
          <div className="node absolute w-2 h-2 bg-green-400 rounded-full animate-pulse glow-shadow-green" style={{ left: '80%', top: '20%', animationDelay: '0.3s' }}></div>
          <div className="node absolute w-2 h-2 bg-green-400 rounded-full animate-pulse glow-shadow-green" style={{ left: '30%', top: '70%', animationDelay: '0.6s' }}></div>
          <div className="node absolute w-2 h-2 bg-green-400 rounded-full animate-pulse glow-shadow-green" style={{ left: '70%', top: '80%', animationDelay: '0.9s' }}></div>
          <div className="node absolute w-2 h-2 bg-green-400 rounded-full animate-pulse glow-shadow-green" style={{ left: '50%', top: '50%', animationDelay: '1.2s' }}></div>
        </div>
      </div>
      <div className="hero-content relative z-10 max-w-6xl mx-auto px-6 sm:px-8 text-center">
        <h1 className="hero-title text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-6 sm:mb-8">
          <span className="title-main gradient-text animate-pulse" data-en="CSKIT" data-ko="CSKIT">
            {t.title}
          </span>
          <span className="title-accent text-green-400 text-2xl sm:text-4xl md:text-5xl font-semibold my-3 sm:my-4 block animate-pulse" style={{ animationDelay: '0.5s' }} data-en="vibecoding" data-ko="바이브코딩">
            {t.subtitle}
          </span>
          <span className="title-sub text-gray-300 text-lg sm:text-2xl md:text-3xl font-normal mt-6 sm:mt-8 block animate-pulse" style={{ animationDelay: '1s' }} data-en="The Future of Web Development" data-ko="웹 개발의 미래">
            {t.description}
          </span>
        </h1>
        <p className="hero-description text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed animate-pulse" style={{ animationDelay: '1.2s' }} data-en="Build your dream website up to 5x faster with our AI-powered development process. Experience the speed of vibecoding." data-ko="AI 기반 개발 프로세스로 꿈의 웹사이트를 최대 5배 빠르게 구축하세요. 바이브코딩의 속도를 경험해보세요.">
          {t.text}
        </p>
        <div className="hero-cta flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-14 sm:mb-16 animate-pulse" style={{ animationDelay: '1.4s' }}>
          <button className="cta-primary px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl text-base sm:text-lg font-semibold hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/30 transition-all duration-300 relative overflow-hidden group" data-en="Start Your Project" data-ko="프로젝트 시작하기">
            <span className="relative z-10">{t.startProject}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
          </button>
          <button className="cta-secondary px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-400 text-blue-400 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-400 hover:text-black hover:-translate-y-1 transition-all duration-300" data-en="See Our Speed" data-ko="속도 확인하기">
            {t.seeSpeed}
          </button>
        </div>
        <div className="hero-stats flex justify-center gap-8 sm:gap-12 flex-wrap animate-pulse" style={{ animationDelay: '1.6s' }}>
          <div className="stat text-center min-w-[80px]">
            <span className="stat-number text-3xl sm:text-4xl font-black gradient-text-green mb-1 sm:mb-2 block">5x</span>
            <span className="stat-label text-xs sm:text-sm text-gray-300 font-medium" data-en="Faster" data-ko="빠름">{t.faster}</span>
          </div>
          <div className="stat text-center min-w-[80px]">
            <span className="stat-number text-3xl sm:text-4xl font-black gradient-text-green mb-1 sm:mb-2 block">100%</span>
            <span className="stat-label text-xs sm:text-sm text-gray-300 font-medium" data-en="AI-Powered" data-ko="AI 기반">{t.aiPowered}</span>
          </div>
          <div className="stat text-center min-w-[80px]">
            <span className="stat-number text-3xl sm:text-4xl font-black gradient-text-green mb-1 sm:mb-2 block">24h</span>
            <span className="stat-label text-xs sm:text-sm text-gray-300 font-medium" data-en="Delivery" data-ko="배송">{t.delivery}</span>
          </div>
        </div>
      </div>
    </section>
  )
}