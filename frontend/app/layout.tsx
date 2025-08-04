import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
        <nav className="fixed top-0 w-full bg-gray-900 shadow-lg z-50 border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center">
                <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">VELES</a>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#modules" className="text-gray-300 hover:text-white transition-colors">
                  Modules
                </a>
                <a href="#demo" className="text-gray-300 hover:text-white transition-colors">
                  Demo
                </a>
                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </a>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
                <a href="/demo" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md hover:from-blue-500 hover:to-purple-500 transition-all">
                  Try Demo
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
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
                <h4 className="font-semibold mb-4">Product</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Modules</a></li>
                  <li><a href="#" className="hover:text-white">Pricing</a></li>
                  <li><a href="#" className="hover:text-white">API</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">About</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white">Documentation</a></li>
                  <li><a href="#" className="hover:text-white">Contact</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; 2025 Veles. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  );
}