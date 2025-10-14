'use client'

import { useState } from 'react'

interface ContactSectionProps {
  currentLang: 'en' | 'ko'
}

// Professional SVG Icons
const EmailIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const LocationIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const translations = {
  en: {
    title: 'Start Your Project',
    subtitle: 'Ready to experience vibecoding?',
    description: 'Get in touch and let\'s build something amazing together. Our AI-powered development process will have your project live in days, not weeks.',
    form: {
      name: 'Your Name',
      email: 'Email Address',
      project: 'Project Type',
      message: 'Tell us about your project',
      submit: 'Send Message'
    },
    contact: {
      email: 'hello@cskit.co.kr',
      phone: '+82 10-1234-5678',
      location: 'Seoul, South Korea'
    }
  },
  ko: {
    title: '프로젝트 시작하기',
    subtitle: '바이브코딩을 경험할 준비가 되셨나요?',
    description: '연락주시고 함께 놀라운 것을 만들어봅시다. 저희 AI 기반 개발 프로세스로 며칠 만에 프로젝트를 완성할 수 있습니다.',
    form: {
      name: '이름',
      email: '이메일 주소',
      project: '프로젝트 유형',
      message: '프로젝트에 대해 알려주세요',
      submit: '메시지 보내기'
    },
    contact: {
      email: 'hello@cskit.co.kr',
      phone: '+82 10-1234-5678',
      location: '서울, 대한민국'
    }
  }
}

export default function ContactSection({ currentLang }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState('')

  const t = translations[currentLang]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setNotification('Message sent successfully! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', project: '', message: '' })
    setIsSubmitting(false)
    
    setTimeout(() => setNotification(''), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 dark:from-gray-900 dark:via-black dark:to-gray-900 light:from-slate-50 light:via-white light:to-blue-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-blue-400/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/3 via-transparent to-green-400/3 pointer-events-none"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-pulse"
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
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6 gradient-text">
            {t.title}
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-400 light:text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl font-bold mb-6 gradient-text">
                {t.subtitle}
              </h3>
              <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed mb-8">
                {t.description}
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group flex items-center gap-6 p-6 bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-gray-700/50 light:border-slate-200/60 hover:border-blue-400/50 dark:hover:border-blue-400/50 light:hover:border-sky-400/70 hover:bg-gray-800/60 dark:hover:bg-gray-800/60 light:hover:bg-white/100 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <EmailIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-500 font-medium mb-1">
                    {currentLang === 'en' ? 'Email Address' : '이메일 주소'}
                  </p>
                  <p className="text-lg text-white dark:text-white light:text-slate-800 font-semibold group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-sky-600 transition-colors duration-300">
                    {t.contact.email}
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-gray-700/50 light:border-slate-200/60 hover:border-green-400/50 dark:hover:border-green-400/50 light:hover:border-emerald-400/70 hover:bg-gray-800/60 dark:hover:bg-gray-800/60 light:hover:bg-white/100 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-500 font-medium mb-1">
                    {currentLang === 'en' ? 'Phone Number' : '전화번호'}
                  </p>
                  <p className="text-lg text-white dark:text-white light:text-slate-800 font-semibold group-hover:text-green-400 dark:group-hover:text-green-400 light:group-hover:text-emerald-600 transition-colors duration-300">
                    {t.contact.phone}
                  </p>
                </div>
              </div>

              <div className="group flex items-center gap-6 p-6 bg-gray-800/40 dark:bg-gray-800/40 light:bg-white/95 backdrop-blur-sm rounded-2xl border border-gray-700/50 dark:border-gray-700/50 light:border-slate-200/60 hover:border-purple-400/50 dark:hover:border-purple-400/50 light:hover:border-purple-400/70 hover:bg-gray-800/60 dark:hover:bg-gray-800/60 light:hover:bg-white/100 transition-all duration-300">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <LocationIcon />
                </div>
                <div>
                  <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-500 font-medium mb-1">
                    {currentLang === 'en' ? 'Location' : '위치'}
                  </p>
                  <p className="text-lg text-white dark:text-white light:text-slate-800 font-semibold group-hover:text-purple-400 dark:group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors duration-300">
                    {t.contact.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="bg-gray-800/60 dark:bg-gray-800/60 light:bg-white/95 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50 dark:border-gray-700/50 light:border-slate-200/60 hover:border-blue-400/30 dark:hover:border-blue-400/30 light:hover:border-sky-400/50 transition-all duration-300 relative overflow-hidden group">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {notification && (
              <div className="mb-6 p-4 bg-gradient-to-r from-green-400 to-emerald-500 text-black rounded-xl font-semibold animate-slide-in-right flex items-center gap-3">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                {notification}
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/80 dark:bg-gray-900/80 light:bg-slate-50 backdrop-blur-sm border-2 border-gray-600/50 dark:border-gray-600/50 light:border-slate-300/60 rounded-xl px-4 py-4 text-white dark:text-white light:text-slate-800 focus:border-blue-400 dark:focus:border-blue-400 light:focus:border-sky-500 focus:bg-gray-900 dark:focus:bg-gray-900 light:focus:bg-white focus:glow-shadow transition-all duration-300 placeholder-transparent"
                  placeholder={t.form.name}
                />
                <label
                  htmlFor="name"
                  className={`absolute left-4 transition-all duration-300 ${
                    formData.name
                      ? 'top-0 left-2 text-sm text-blue-400 bg-gray-800 px-2'
                      : 'top-4 text-gray-400 dark:text-gray-400 light:text-slate-500'
                  }`}
                >
                  {t.form.name}
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/80 dark:bg-gray-900/80 light:bg-slate-50 backdrop-blur-sm border-2 border-gray-600/50 dark:border-gray-600/50 light:border-slate-300/60 rounded-xl px-4 py-4 text-white dark:text-white light:text-slate-800 focus:border-blue-400 dark:focus:border-blue-400 light:focus:border-sky-500 focus:bg-gray-900 dark:focus:bg-gray-900 light:focus:bg-white focus:glow-shadow transition-all duration-300 placeholder-transparent"
                  placeholder={t.form.email}
                />
                <label
                  htmlFor="email"
                  className={`absolute left-4 transition-all duration-300 ${
                    formData.email
                      ? 'top-0 left-2 text-sm text-blue-400 bg-gray-800 px-2'
                      : 'top-4 text-gray-400 dark:text-gray-400 light:text-slate-500'
                  }`}
                >
                  {t.form.email}
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="text"
                  id="project"
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900/80 dark:bg-gray-900/80 light:bg-slate-50 backdrop-blur-sm border-2 border-gray-600/50 dark:border-gray-600/50 light:border-slate-300/60 rounded-xl px-4 py-4 text-white dark:text-white light:text-slate-800 focus:border-blue-400 dark:focus:border-blue-400 light:focus:border-sky-500 focus:bg-gray-900 dark:focus:bg-gray-900 light:focus:bg-white focus:glow-shadow transition-all duration-300 placeholder-transparent"
                  placeholder={t.form.project}
                />
                <label
                  htmlFor="project"
                  className={`absolute left-4 transition-all duration-300 ${
                    formData.project
                      ? 'top-0 left-2 text-sm text-blue-400 bg-gray-800 px-2'
                      : 'top-4 text-gray-400 dark:text-gray-400 light:text-slate-500'
                  }`}
                >
                  {t.form.project}
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-gray-900/80 dark:bg-gray-900/80 light:bg-white/80 backdrop-blur-sm border-2 border-gray-600/50 dark:border-gray-600/50 light:border-gray-300/50 rounded-xl px-4 py-4 text-white dark:text-white light:text-gray-900 focus:border-blue-400 dark:focus:border-blue-400 light:focus:border-blue-500 focus:bg-gray-900 dark:focus:bg-gray-900 light:focus:bg-white focus:glow-shadow transition-all duration-300 resize-none placeholder-transparent"
                  placeholder={t.form.message}
                />
                <label
                  htmlFor="message"
                  className={`absolute left-4 transition-all duration-300 ${
                    formData.message
                      ? 'top-0 left-2 text-sm text-blue-400 bg-gray-800 px-2'
                      : 'top-4 text-gray-400 dark:text-gray-400 light:text-slate-500'
                  }`}
                >
                  {t.form.message}
                </label>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-white rounded-xl text-lg font-semibold hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-400/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      {currentLang === 'en' ? 'Sending...' : '전송 중...'}
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      {t.form.submit}
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
