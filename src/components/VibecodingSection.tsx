'use client'

import React, { useState, useEffect, useRef } from 'react'

// Custom hook for typing animation with reset capability
const useTypingAnimation = (text: string, speed: number = 50, shouldStart: boolean = false) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (shouldStart && !isComplete && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)
      return () => clearTimeout(timeout)
    } else if (currentIndex >= text.length && !isComplete) {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, shouldStart, isComplete])

  // Reset when shouldStart changes from false to true
  useEffect(() => {
    if (shouldStart && displayedText === '') {
      setDisplayedText('')
      setCurrentIndex(0)
      setIsComplete(false)
    }
  }, [shouldStart, displayedText])

  return { displayedText, isComplete }
}

interface VibecodingSectionProps {
  currentLang: 'en' | 'ko'
}

const translations = {
  en: {
    title: 'What is vibecoding?',
    traditional: 'Traditional Development',
    vibecoding: 'vibecoding Process',
    description: 'Our developers harness vibecoding—an AI-enhanced framework—to bypass traditional bottlenecks, delivering superior quality, faster. This website was built with vibecoding—experience the speed yourself.',
    weeks: '4-8 weeks',
    weeksShort: '1-2 weeks'
  },
  ko: {
    title: '바이브코딩이란?',
    traditional: '전통적인 개발',
    vibecoding: '바이브코딩 프로세스',
    description: '저희 개발자들은 전통적인 병목 현상을 우회하여 더 빠르고 우수한 품질을 제공하는 AI 강화 프레임워크인 바이브코딩을 활용합니다. 이 웹사이트는 바이브코딩으로 구축되었습니다—속도를 직접 경험해보세요.',
    weeks: '4-8주',
    weeksShort: '1-2주'
  }
}

export default function VibecodingSection({ currentLang }: VibecodingSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const t = translations[currentLang]

  // Clean text display without typing animation
  const experienceText = currentLang === 'en' ? 'Experience the Speed' : '속도를 경험하세요'
  const formulaText = currentLang === 'en' 
    ? 'See how vibecoding transforms development with our simple yet powerful formula.' 
    : '바이브코딩이 개발을 어떻게 변화시키는지 우리의 간단하지만 강력한 공식을 통해 확인해보세요.'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          // Start progress animation
          setTimeout(() => {
            setProgress(100)
          }, 500)
          setHasAnimated(true)
        } else if (!entry.isIntersecting && hasAnimated) {
          // Reset when scrolling away
          setHasAnimated(false)
          setProgress(0)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep(prev => (prev + 1) % 5)
      }, 2000)
      return () => clearInterval(interval)
    }
  }, [isVisible])

  const traditionalSteps = ['Planning', 'Design', 'Development', 'Testing', 'Deployment']
  const vibecodingSteps = ['AI Planning', 'Auto Design', 'Smart Dev', 'Auto Test', 'Instant Deploy']

  return (
    <section ref={sectionRef} id="vibecoding" className="py-20 bg-gray-900 dark:bg-gray-900 light:bg-slate-50 relative overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-green-400/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/3 via-transparent to-green-400/3 pointer-events-none"></div>
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="container relative z-10">
        {/* Clean Title Display */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 gradient-text">
          {t.title}
        </h2>
        </div>
        
        {/* Enhanced Comparison Cards */}
        <div className={`grid md:grid-cols-2 gap-12 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.3s' }}>
          {/* Traditional Development - Enhanced */}
          <div className="bg-gray-800/80 dark:bg-gray-800/80 light:bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-red-400/20 dark:border-red-400/20 light:border-red-300/60 hover:border-red-400/40 dark:hover:border-red-400/40 light:hover:border-red-400/70 hover:-translate-y-3 hover:shadow-2xl hover:shadow-red-400/20 light:hover:shadow-red-100/50 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 via-red-500 to-red-600"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-red-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-white dark:text-white light:text-slate-800 relative z-10">
              {t.traditional}
            </h3>
            
            {/* Enhanced Step Flow - Symmetrical Layout */}
            <div className="relative mb-8">
              <div className="flex flex-col gap-4 relative z-10">
                {/* Top Row - 3 steps */}
                <div className="flex items-center justify-center gap-4">
                  {traditionalSteps.slice(0, 3).map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className={`bg-black/60 dark:bg-black/60 light:bg-slate-100 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700 border transition-all duration-500 ${
                        index <= activeStep ? 'border-red-400/40 bg-red-400/10' : 'border-blue-400/20'
                      }`}>
                        {step}
                      </div>
                      {index < 2 && (
                        <div className="text-blue-400 text-xl font-bold mx-2 animate-pulse">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Bottom Row - 2 steps, centered */}
                <div className="flex items-center justify-center gap-4">
                  {traditionalSteps.slice(3, 5).map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className={`bg-black/60 dark:bg-black/60 light:bg-slate-100 backdrop-blur-sm px-4 py-3 rounded-xl text-sm font-semibold text-gray-300 dark:text-gray-300 light:text-slate-700 border transition-all duration-500 ${
                        (index + 3) <= activeStep ? 'border-red-400/40 bg-red-400/10' : 'border-blue-400/20'
                      }`}>
                        {step}
              </div>
                      {index < 1 && (
                        <div className="text-blue-400 text-xl font-bold mx-2 animate-pulse">
                          →
              </div>
                      )}
              </div>
                  ))}
              </div>
              </div>
            </div>
            
            {/* Enhanced Progress Bar - Time Representation */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-400 font-medium">Development Time</span>
                </div>
              </div>
              <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden border border-red-400/20">
                <div 
                  className="h-full bg-gradient-to-r from-red-400 via-red-500 to-red-600 rounded-full transition-all duration-3000 ease-out relative"
                  style={{ width: `${progress}%` }}
                >
                  <div className="absolute top-0 right-0 w-2 h-full bg-white/60 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
            </div>
              <div className="absolute -top-8 right-0 text-sm font-semibold text-gray-300 bg-gray-800/80 px-2 py-1 rounded border border-red-400/20 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              {t.weeks}
              </div>
            </div>
          </div>

          {/* vibecoding Process - Enhanced */}
          <div className="bg-gray-800/80 dark:bg-gray-800/80 light:bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-green-400/20 dark:border-green-400/20 light:border-emerald-300/60 hover:border-green-400/40 dark:hover:border-green-400/40 light:hover:border-emerald-400/70 hover:-translate-y-3 hover:shadow-2xl hover:shadow-green-400/20 light:hover:shadow-emerald-100/50 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 via-blue-400 to-green-400"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h3 className="text-2xl font-bold mb-8 text-white dark:text-white light:text-slate-800 relative z-10">
              {t.vibecoding}
            </h3>
            
            {/* Enhanced Step Flow - Symmetrical Layout */}
            <div className="relative mb-8">
              <div className="flex flex-col gap-4 relative z-10">
                {/* Top Row - 3 steps */}
                <div className="flex items-center justify-center gap-4">
                  {vibecodingSteps.slice(0, 3).map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-500 ${
                        index <= activeStep 
                          ? 'bg-gradient-to-r from-green-400 to-blue-400 text-black shadow-lg shadow-green-400/30' 
                          : 'bg-gradient-to-r from-green-400/20 to-blue-400/20 text-gray-300 dark:text-gray-300 light:text-slate-700'
                      }`}>
                        {step}
                      </div>
                      {index < 2 && (
                        <div className="text-blue-400 text-xl font-bold mx-2 animate-pulse">
                          →
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                {/* Bottom Row - 2 steps, centered */}
                <div className="flex items-center justify-center gap-4">
                  {vibecodingSteps.slice(3, 5).map((step, index) => (
                    <div key={step} className="flex items-center">
                      <div className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-500 ${
                        (index + 3) <= activeStep 
                          ? 'bg-gradient-to-r from-green-400 to-blue-400 text-black shadow-lg shadow-green-400/30' 
                          : 'bg-gradient-to-r from-green-400/20 to-blue-400/20 text-gray-300 dark:text-gray-300 light:text-slate-700'
                      }`}>
                        {step}
              </div>
                      {index < 1 && (
                        <div className="text-blue-400 text-xl font-bold mx-2 animate-pulse">
                          →
              </div>
                      )}
              </div>
                  ))}
              </div>
              </div>
            </div>
            
            {/* Enhanced Progress Bar - Time Representation */}
            <div className="relative">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs text-gray-400 font-medium">Development Time</span>
                </div>
              </div>
              <div className="relative h-3 bg-gray-700/50 rounded-full overflow-hidden border border-green-400/20">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 via-blue-400 to-green-400 rounded-full transition-all duration-2000 ease-out relative"
                  style={{ width: `${Math.min(progress * 0.2, 100)}%` }}
                >
                  <div className="absolute top-0 right-0 w-2 h-full bg-white/60 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                </div>
            </div>
              <div className="absolute -top-8 right-0 text-sm font-semibold text-gray-300 bg-gray-800/80 px-2 py-1 rounded border border-green-400/20 flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              {t.weeksShort}
              </div>
            </div>
          </div>
        </div>
        
        {/* Clean Description Display */}
        <div className={`text-center max-w-4xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed hover:text-white dark:hover:text-white light:hover:text-slate-800 transition-colors duration-300">
            {t.description}
          </p>
        </div>

        {/* Enhanced Code Snippet Section */}
        <div className={`flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '0.8s' }}>
          {/* Left side - Clean Text Display */}
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-blue-400/20 dark:border-blue-400/20 light:border-sky-300/60 hover:border-blue-400/40 dark:hover:border-blue-400/40 light:hover:border-sky-400/70 transition-all duration-300">
              <h3 className="text-3xl font-bold text-white dark:text-white light:text-slate-800 mb-6 hover:animate-bounce transition-all duration-300 cursor-default">
                <span className="inline-block hover:scale-110 transition-transform duration-300">
                  {experienceText}
                </span>
              </h3>
            </div>
            
            <div className="bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-purple-400/20 dark:border-purple-400/20 light:border-purple-300/60 hover:border-purple-400/40 dark:hover:border-purple-400/40 light:hover:border-purple-400/70 transition-all duration-300">
              <p className="text-lg text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed hover:text-white dark:hover:text-white light:hover:text-slate-800 transition-colors duration-300">
                {formulaText}
              </p>
            </div>
          </div>

          {/* Right side - Enhanced Code Snippet */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-gray-800/90 dark:bg-gray-800/90 light:bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/20 dark:border-blue-400/20 light:border-blue-400/30 hover:border-blue-400/40 dark:hover:border-blue-400/40 light:hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-500 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
              
              {/* Enhanced Code Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                </div>
                <span className="text-xs text-gray-400 font-mono">vibecoding.js</span>
              </div>

              {/* Enhanced Code Content with Better Animation */}
              <div className="font-mono text-sm text-gray-100 leading-relaxed">
                <div className="text-gray-500 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>{'// AI-Powered Development Framework'}</div>
                <div className="text-gray-500 opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>{'// Experience the speed of vibecoding'}</div>
                <div className="mt-2"></div>
                <div className="text-blue-400 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>const</div>
                <div className="ml-4 opacity-0 animate-slide-in-left" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
                  <span className="text-green-400">vibecoding</span>
                  <span className="text-white"> = () =&gt; {'{'}</span>
                </div>
                <div className="ml-8 opacity-0 animate-slide-in-left" style={{ animationDelay: '1.0s', animationFillMode: 'forwards' }}>
                  <span className="text-blue-400">return</span>
                  <span className="text-white"> speed * innovation;</span>
                </div>
                <div className="text-white opacity-0 animate-slide-in-left" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>{'}'};</div>
                <div className="mt-2"></div>
                <div className="text-purple-400 opacity-0 animate-slide-in-right" style={{ animationDelay: '1.4s', animationFillMode: 'forwards' }}>const</div>
                <div className="ml-4 opacity-0 animate-slide-in-right" style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}>
                  <span className="text-cyan-400">result</span>
                  <span className="text-white"> = </span>
                  <span className="text-green-400">vibecoding</span>
                  <span className="text-white">();</span>
                </div>
                <div className="mt-2"></div>
                <div className="text-gray-400 opacity-0 animate-bounce-in" style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}>
                  <span className="text-gray-500">{'// '}</span>
                  <span className="text-yellow-400 font-semibold">5x faster development</span>
                </div>
                <div className="text-gray-400 opacity-0 animate-bounce-in" style={{ animationDelay: '2.0s', animationFillMode: 'forwards' }}>
                  <span className="text-gray-500">{'// '}</span>
                  <span className="text-green-400 font-semibold">AI-enhanced workflow</span>
                </div>
                <div className="text-gray-400 opacity-0 animate-bounce-in" style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}>
                  <span className="text-gray-500">{'// '}</span>
                  <span className="text-blue-400 font-semibold">Zero bottlenecks</span>
                </div>
              </div>

              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}