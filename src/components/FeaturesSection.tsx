'use client'

import React from 'react'

interface FeaturesSectionProps {
  currentLang: 'en' | 'ko'
}

// Professional SVG Icons
const SpeedIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
)

const DesignIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
  </svg>
)

const GlobalIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
)

const AIIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>
)

const translations = {
  en: {
    title: 'Why Choose CSKIT?',
    subtitle: 'Experience the future of web development',
    features: [
      {
        icon: SpeedIcon,
        title: 'Lightning Speed',
        description: '5x faster development with AI-powered automation and smart code generation.',
        gradient: 'from-yellow-400 to-orange-500',
        bgGradient: 'from-yellow-400/10 to-orange-500/10'
      },
      {
        icon: DesignIcon,
        title: 'Modern Design',
        description: 'Cutting-edge aesthetics powered by AI design systems and trend analysis.',
        gradient: 'from-pink-400 to-purple-500',
        bgGradient: 'from-pink-400/10 to-purple-500/10'
      },
      {
        icon: GlobalIcon,
        title: 'Bilingual Support',
        description: 'Seamless English and Korean support for global and local markets.',
        gradient: 'from-blue-400 to-cyan-500',
        bgGradient: 'from-blue-400/10 to-cyan-500/10'
      },
      {
        icon: AIIcon,
        title: 'AI-Powered',
        description: 'Advanced AI integration for intelligent development and optimization.',
        gradient: 'from-green-400 to-emerald-500',
        bgGradient: 'from-green-400/10 to-emerald-500/10'
      }
    ]
  },
  ko: {
    title: 'CSKIT을 선택하는 이유는?',
    subtitle: '웹 개발의 미래를 경험하세요',
    features: [
      {
        icon: SpeedIcon,
        title: '번개 같은 속도',
        description: 'AI 기반 자동화와 스마트 코드 생성으로 5배 빠른 개발',
        gradient: 'from-yellow-400 to-orange-500',
        bgGradient: 'from-yellow-400/10 to-orange-500/10'
      },
      {
        icon: DesignIcon,
        title: '모던 디자인',
        description: 'AI 디자인 시스템과 트렌드 분석으로 구현된 최첨단 미학',
        gradient: 'from-pink-400 to-purple-500',
        bgGradient: 'from-pink-400/10 to-purple-500/10'
      },
      {
        icon: GlobalIcon,
        title: '이중 언어 지원',
        description: '글로벌 및 로컬 시장을 위한 원활한 영어 및 한국어 지원',
        gradient: 'from-blue-400 to-cyan-500',
        bgGradient: 'from-blue-400/10 to-cyan-500/10'
      },
      {
        icon: AIIcon,
        title: 'AI 기반',
        description: '지능형 개발 및 최적화를 위한 고급 AI 통합',
        gradient: 'from-green-400 to-emerald-500',
        bgGradient: 'from-green-400/10 to-emerald-500/10'
      }
    ]
  }
}

export default function FeaturesSection({ currentLang }: FeaturesSectionProps) {
  const t = translations[currentLang]

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 light:from-slate-50 light:via-white light:to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/3 via-transparent to-green-400/3 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container relative z-10">
        {/* Enhanced Header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-400 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        
        {/* Enhanced Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div
                key={index}
                className="group relative bg-gray-800/60 dark:bg-gray-800/60 light:bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 dark:border-gray-700/50 light:border-slate-200/60 hover:border-gray-600/80 dark:hover:border-gray-600/80 light:hover:border-sky-300/80 hover:-translate-y-4 hover:shadow-2xl light:hover:shadow-sky-100/50 transition-all duration-500 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                {/* Icon Container */}
                <div className="relative z-10 mb-6">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${feature.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white dark:text-white light:text-slate-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white dark:group-hover:from-white light:group-hover:from-slate-800 group-hover:to-gray-300 dark:group-hover:to-gray-300 light:group-hover:to-slate-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed group-hover:text-gray-200 dark:group-hover:text-gray-200 light:group-hover:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 dark:from-blue-500/10 dark:to-purple-500/10 light:from-sky-100 light:to-purple-100 backdrop-blur-sm px-8 py-4 rounded-2xl border border-blue-400/20 dark:border-blue-400/20 light:border-sky-200/60">
            <div className="w-3 h-3 bg-green-400 dark:bg-green-400 light:bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-gray-300 dark:text-gray-300 light:text-slate-700 font-medium">
              {currentLang === 'en' 
                ? 'Ready to experience the future of development?' 
                : '개발의 미래를 경험할 준비가 되셨나요?'
              }
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
