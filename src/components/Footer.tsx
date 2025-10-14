'use client'

interface FooterProps {
  currentLang: 'en' | 'ko'
}

const translations = {
  en: {
    tagline: 'Next-Level Speed & Modern Design Powered by vibecoding',
    services: 'Services',
    company: 'Company',
    webDev: 'Web Development',
    aiIntegration: 'AI Integration',
    mobileApps: 'Mobile Apps',
    aboutUs: 'About Us',
    careers: 'Careers',
    contact: 'Contact',
    builtWith: 'Built with vibecoding'
  },
  ko: {
    tagline: '바이브코딩으로 구동되는 차세대 속도와 모던 디자인',
    services: '서비스',
    company: '회사',
    webDev: '웹 개발',
    aiIntegration: 'AI 통합',
    mobileApps: '모바일 앱',
    aboutUs: '회사 소개',
    careers: '채용',
    contact: '연락처',
    builtWith: '바이브코딩으로 구축'
  }
}

export default function Footer({ currentLang }: FooterProps) {
  const t = translations[currentLang]

  return (
    <footer className="bg-gray-900 py-16 border-t border-blue-400/10">
      <div className="container">
        <div className="grid lg:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-white text-2xl font-bold">CSKIT</span>
              <span className="text-blue-400 text-sm font-medium">vibecoding</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              {t.tagline}
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              {t.services}
            </h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {t.webDev}
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {t.aiIntegration}
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {t.mobileApps}
              </a>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">
              {t.company}
            </h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {t.aboutUs}
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {t.careers}
              </a>
              <a href="#" className="block text-gray-300 hover:text-blue-400 transition-colors duration-300">
                {t.contact}
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-blue-400/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-300">
          <p>&copy; 2024 CSKIT. All rights reserved.</p>
          <p>{t.builtWith}</p>
        </div>
      </div>
    </footer>
  )
}
