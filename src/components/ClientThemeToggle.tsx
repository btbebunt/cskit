'use client'

import dynamic from 'next/dynamic'

const ThemeToggle = dynamic(() => import('./ThemeToggle'), {
  ssr: false,
  loading: () => (
    <div className="fixed top-6 right-6 z-50">
      <div className="relative p-2 rounded-xl bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 w-10 h-10"></div>
    </div>
  )
})

export default function ClientThemeToggle() {
  return (
    <div className="fixed top-6 right-6 z-50">
      <ThemeToggle />
    </div>
  )
}
