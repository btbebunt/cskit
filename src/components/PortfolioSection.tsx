'use client'

import { useState } from 'react'

interface PortfolioSectionProps {
  currentLang: 'en' | 'ko'
}

const translations = {
  en: {
    title: 'Our Work',
    filters: {
      all: 'All',
      ecommerce: 'E-commerce',
      corporate: 'Corporate',
      startup: 'Startup'
    },
    projects: [
      {
        category: 'ecommerce',
        title: 'Modern E-commerce Platform',
        description: 'Built with vibecoding in 3 days'
      },
      {
        category: 'corporate',
        title: 'Enterprise Dashboard',
        description: 'AI-powered analytics interface'
      },
      {
        category: 'startup',
        title: 'Startup Landing Page',
        description: 'Converted 40% more visitors'
      },
      {
        category: 'ecommerce',
        title: 'Mobile Commerce App',
        description: 'Cross-platform with vibecoding'
      }
    ]
  },
  ko: {
    title: '저희 작업',
    filters: {
      all: '전체',
      ecommerce: '이커머스',
      corporate: '기업',
      startup: '스타트업'
    },
    projects: [
      {
        category: 'ecommerce',
        title: '모던 이커머스 플랫폼',
        description: '바이브코딩으로 3일 만에 구축'
      },
      {
        category: 'corporate',
        title: '기업 대시보드',
        description: 'AI 기반 분석 인터페이스'
      },
      {
        category: 'startup',
        title: '스타트업 랜딩 페이지',
        description: '40% 더 많은 방문자 전환'
      },
      {
        category: 'ecommerce',
        title: '모바일 커머스 앱',
        description: '바이브코딩으로 크로스 플랫폼'
      }
    ]
  }
}

export default function PortfolioSection({ currentLang }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const t = translations[currentLang]

  const filteredProjects = activeFilter === 'all' 
    ? t.projects 
    : t.projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 bg-gray-900 relative">
      <div className="container">
        <h2 className="text-5xl font-black text-center mb-16 gradient-text">
          {t.title}
        </h2>
        
        <div className="flex justify-center gap-4 mb-16 flex-wrap">
          {Object.entries(t.filters).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveFilter(key)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeFilter === key
                  ? 'bg-blue-400 text-black glow-shadow'
                  : 'border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden border border-blue-400/10 hover:-translate-y-3 hover:glow-shadow transition-all duration-300 group"
            >
              <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                <div className="text-white text-xl font-semibold text-center">
                  {project.category === 'ecommerce' && 'E-commerce Platform'}
                  {project.category === 'corporate' && 'Corporate Website'}
                  {project.category === 'startup' && 'Startup Landing'}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
