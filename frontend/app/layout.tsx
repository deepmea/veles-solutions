import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veles - B2B Risk Management Software for Forex Brokers | MT4/MT5 Integration',
  description: 'Professional B2B risk management system for forex brokers. Real-time monitoring, AI-powered fraud detection, multi-account detection, arbitrage prevention. Integrate with MetaTrader, cTrader, FIX API.',
  keywords: 'B2B broker software, forex risk management, MT4 risk manager, MT5 risk management, broker risk management software, forex broker software, multi-account detection, arbitrage detection, A-book B-book management, broker CRM, forex broker solutions, MetaTrader integration, FIX API, prime broker software, liquidity management, forex broker platform, risk management system, broker back office, forex broker technology',
  authors: [{ name: 'Veles Solutions' }],
  creator: 'Veles Solutions',
  publisher: 'Veles Solutions',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://veles.solutions'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Veles - Professional B2B Risk Management for Forex Brokers',
    description: 'Advanced risk management system with AI-powered analytics, real-time monitoring, and multi-broker support. Professional solution for brokers of all sizes.',
    url: 'https://veles.solutions',
    siteName: 'Veles Solutions',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Veles Risk Management System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veles - B2B Risk Management for Brokers',
    description: 'Professional risk management system for forex brokers',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
    other: {
      'mailru-domain': 'FSg7hCoMdzA3lbEd',
    },
  },
  icons: {
    icon: '/veles-icon.svg',
    shortcut: '/veles-icon.svg',
    apple: '/veles-icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="text-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Veles Risk Management System',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web-based',
              offers: {
                '@type': 'Offer',
                price: '199',
                priceCurrency: 'USD',
                priceValidUntil: '2025-12-31',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '523',
              },
              publisher: {
                '@type': 'Organization',
                name: 'Veles Solutions',
                url: 'https://veles.solutions',
              },
            }),
          }}
        />
        <nav className="fixed top-0 w-full bg-gray-950/95 backdrop-blur-md border-b border-gray-800/50 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo Section */}
              <div className="flex items-center">
                <a href="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300 relative overflow-hidden">
                    <svg width="24" height="24" viewBox="0 0 32 32" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
                      <g fill="white">
                        <rect x="14" y="4" width="4" height="24" rx="2"/>
                        <path d="M16 8 L24 4 L24 8 L18 11 Z"/>
                        <path d="M16 8 L8 4 L8 8 L14 11 Z"/>
                        <path d="M18 16 L26 14 L26 18 L18 20 Z"/>
                        <path d="M14 16 L6 14 L6 18 L14 20 Z"/>
                        <path d="M16 24 Q20 28 24 26 L24 28 Q20 30 16 28 Q12 30 8 28 L8 26 Q12 28 16 24 Z"/>
                        <circle cx="16" cy="16" r="3" fill="#6366f1" opacity="0.9"/>
                        <circle cx="16" cy="16" r="2" fill="white"/>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-2xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-tight" style={{ fontWeight: 600 }}>
                      VELES
                    </span>
                    <span className="text-xs text-gray-400 font-medium tracking-wider -mt-1">
                      RISK MANAGEMENT
                    </span>
                  </div>
                </a>
              </div>
              
              {/* Navigation Links */}
              <div className="hidden lg:flex items-center space-x-1">
                <div className="flex items-center space-x-1 bg-gray-800/30 rounded-xl p-1">
                  <a href="/#modules" className="nav-link px-4 py-2.5 hover:bg-gray-700/50 rounded-lg text-sm">
                    Solutions
                  </a>
                  <a href="/#demo" className="nav-link px-4 py-2.5 hover:bg-gray-700/50 rounded-lg text-sm">
                    Platform
                  </a>
                  <a href="/#pricing" className="nav-link px-4 py-2.5 hover:bg-gray-700/50 rounded-lg text-sm">
                    Pricing
                  </a>
                  <a href="/contact" className="nav-link px-4 py-2.5 hover:bg-gray-700/50 rounded-lg text-sm">
                    Contact Us
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center space-x-3">
                <a href="/contact" className="btn-outline text-sm px-5 py-2.5">
                  Schedule Demo
                </a>
                <a href="/demo" className="btn-primary text-sm px-6 py-2.5 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25">
                  Live Demo
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <div className="flex items-center space-x-3">
                  <a href="/demo" className="btn-primary text-xs px-4 py-2">
                    Start Trial
                  </a>
                  <button className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-20">
          {children}
        </main>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">VELES</h3>
                <p className="text-gray-400">
                  Professional Risk Management System
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/about" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="/careers" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/contact" className="hover:text-white">Contact</a></li>
                  <li><a href="/faq" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                  <li><a href="/terms" className="hover:text-white">Terms of Use</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 Veles. All rights reserved.</p>
              <p className="text-xs mt-2 text-gray-500">
                MetaTrader, cTrader, FIX Protocol, and other mentioned platforms are trademarks of their respective owners. 
                Veles is an independent software provider and is not affiliated with or endorsed by these companies.
              </p>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}