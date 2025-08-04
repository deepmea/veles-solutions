'use client';

import React from 'react';
import DemoCharts from '../components/DemoCharts';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">VELES</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-400 uppercase tracking-widest">Core System</p>
            </div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              B2B Risk Management Software for Forex & CFD Brokers
            </p>
            <p className="text-lg text-gray-400 mb-2">
              MT4/MT5 Integration • Multi-Account Detection • Real-time Monitoring
            </p>
            <p className="text-sm text-gray-500 mb-8">
              Professional Risk Management • Since 2006
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/demo-enhanced"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
              >
                Try Demo Cabinet
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#modules"
                className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700"
              >
                Explore Modules
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Features for SEO */}
      <section className="py-12 bg-gray-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Broker Support</h3>
              <p className="text-gray-400">Manage multiple broker entities from a single dashboard</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">A-Book/B-Book Management</h3>
              <p className="text-gray-400">Smart routing and exposure management</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Compliance Ready</h3>
              <p className="text-gray-400">MiFID II, ESMA, FCA compliant reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section id="modules" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Complete Broker Risk Management Suite
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Modular architecture designed for forex brokers, prime brokers, and liquidity providers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-blue-500 group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-bl-lg">
                  {module.price}
                </div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {module.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {module.description}
                </p>
                <ul className="space-y-2">
                  {module.features.map((feature, i) => (
                    <li key={i} className="text-gray-500 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time Monitoring Section */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Real-Time Monitoring Dashboard
            </h2>
            <p className="text-xl text-gray-400">
              Track performance metrics and risk indicators 24/7
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-400 text-sm uppercase tracking-wider">{metric.label}</h3>
                  <span className={`text-sm px-2 py-1 rounded ${metric.trend === 'up' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {metric.change}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-white">{metric.value}</span>
                  <span className="ml-2 text-gray-500">{metric.unit}</span>
                </div>
                <div className="mt-4 h-20">
                  <svg className="w-full h-full" viewBox="0 0 100 40">
                    <polyline
                      fill="none"
                      stroke={metric.trend === 'up' ? '#10b981' : '#ef4444'}
                      strokeWidth="2"
                      points={metric.sparkline}
                    />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Charts Section */}
      <section id="demo" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Analytics Dashboard
            </h2>
            <p className="text-xl text-gray-400">
              AI-powered insights and predictive analytics in real-time
            </p>
          </motion.div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <DemoCharts />
          </div>
        </div>
      </section>

      {/* API Integrations */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Native Integration with All Major Trading Platforms
            </h2>
            <p className="text-xl text-gray-400">
              Direct API connections to MetaTrader, cTrader, and proprietary platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {apiIntegrations.map((api, index) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-4">
                    {api.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">{api.name}</h3>
                    <p className="text-sm text-gray-400">{api.type}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{api.description}</p>
                <div className="flex flex-wrap gap-2">
                  {api.features.map((feature, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Powered by Advanced Technology
            </h2>
            <p className="text-lg text-gray-400">
              Enterprise-grade infrastructure and cutting-edge AI
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-20 h-20 bg-gray-800 rounded-xl flex items-center justify-center mb-4 border border-gray-700 hover:border-blue-500 transition-colors">
                  {tech.icon}
                </div>
                <h3 className="text-white font-semibold">{tech.name}</h3>
                <p className="text-gray-500 text-sm text-center mt-1">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-white"
              >
                <motion.div 
                  className="text-5xl font-bold mb-2"
                  animate={{ 
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Start Managing Risk Like a Professional
            </h2>
            <p className="text-xl text-gray-300 mb-2">
              From small brokers to Tier-1 institutions
            </p>
            <p className="text-lg text-gray-400 mb-8">
              Advanced Analytics • Real-time Monitoring • Quick Setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200"
              >
                Start Free Trial
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gray-800 text-white font-semibold rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700"
              >
                Download Whitepaper
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const modules = [
  {
    title: 'Risk Analytics',
    description: 'AI-powered risk detection and analysis module',
    icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
    features: ['Real-time monitoring', 'Predictive analytics', 'Custom alerts'],
    price: '$299/mo'
  },
  {
    title: 'Custom Reports',
    description: 'Professional reporting and export module',
    icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    features: ['PDF/Excel export', 'Scheduled reports', 'Custom templates'],
    price: '$199/mo'
  },
  {
    title: 'API Integration',
    description: 'Connect with your existing systems',
    icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
    features: ['REST API', 'WebSockets', 'Custom webhooks'],
    price: '$399/mo'
  },
  {
    title: 'AI Assistant',
    description: 'Smart automation and insights module',
    icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    features: ['Auto-detection', 'Smart alerts', 'Predictive models'],
    price: '$499/mo'
  }
];

const metrics = [
  { label: 'Risk Score', value: '87.3', unit: '%', change: '+2.4%', trend: 'up', sparkline: '0,30 20,25 40,15 60,20 80,10 100,5' },
  { label: 'Active Monitoring', value: '1,247', unit: 'clients', change: '+145', trend: 'up', sparkline: '0,20 20,25 40,30 60,28 80,35 100,40' },
  { label: 'Alerts Today', value: '23', unit: 'critical', change: '-8', trend: 'down', sparkline: '0,40 20,35 40,30 60,25 80,20 100,15' }
];

const techStack = [
  { name: 'TensorFlow', icon: <svg className="w-10 h-10 text-orange-500" fill="currentColor" viewBox="0 0 24 24"><path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.43 5.311l-.014-5.31L12.46 0v24l4.095-2.378V14.87l6.168 3.564z"/></svg>, description: 'Deep Learning' },
  { name: 'PostgreSQL', icon: <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5594 14.7228a.5269.5269 0 00-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 00-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.7963 1.0752a8.3597 8.3597 0 00-2.3349-.3054c-1.0205-.0077-1.8691.3451-2.5247.8619-.967.7631-1.5045 1.8968-1.5598 3.2803-.0243.5998.0243 1.1882.1355 1.751a8.3009 8.3009 0 00-.5696 1.1765c-.7563.1882-2.6843.7144-3.1475 2.8105-.4632 2.0962.2684 3.3141 1.0974 4.2695.3055.3494.6571.6692 1.0313.9638-.2496.4766-.3838.9959-.3838 1.5366 0 .7849.2891 1.5366.815 2.1188.7104.7849 1.7277 1.2271 2.8745 1.2271 1.0556 0 2.0478-.3797 2.7882-1.0676.9183.1178 1.8044.0077 2.6012-.2966.8232-.3141 1.5577-.8464 2.0992-1.5273a8.0744 8.0744 0 001.4012.129c1.5519 0 2.7596-.6538 3.6917-1.9972.7295-1.0507 1.1935-2.5037 1.0165-3.7803zm-2.9519-.0594c.0867.1344.1356.234.1356.234s-.0889-.2342-.2557-.3891c-.0683-.0706-.1751-.1057-.2656-.1481-.0896.0329-.1701.0645-.2433.1041.0111-.0036.0333-.0148.0333-.0148.1329.0339.2747.0782.4079.1507.0472-.0015.1232.0099.1878.0273z"/></svg>, description: 'Database' },
  { name: 'Kubernetes', icon: <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 01-2.075-2.597l2.578-.437.004.005a.44.44 0 00.484.606zm-.833-2.129a.44.44 0 00.173-.756l.002-.011L7.585 9.7a5.143 5.143 0 013.831-.956l.324 2.918a.443.443 0 00.356.389l.006-.008zm1.172-7.186l.004.006.023-.006A5.123 5.123 0 0112.476 8.4l-1.082 2.808a.445.445 0 00-.154.728l-.008.012 2.001.024c.04.002.075.01.11.02a.44.44 0 00.373-.226c.025-.037.045-.08.054-.132l.745-3.252c-.166-.036-.331-.08-.5-.113zm1.16 2.422c.04-.03.09-.06.145-.075a.44.44 0 00.702-.279l.008-.01 2.667-.694a5.164 5.164 0 01-.076 4.224l-2.321-1.576a.443.443 0 00-.753.256l-.01.001-.179 2.006a.44.44 0 00.628.402l.014.008 1.854 1.61a5.147 5.147 0 01-3.709 1.053l.83-2.87a.444.444 0 00-.417-.563l-.002.013-2.005.014a.443.443 0 00-.418.31c-.01.03-.014.063-.01.095l.779 3.253a5.175 5.175 0 01-3.222-2.15l1.078-2.81a.444.444 0 00-.168-.728l.007-.011-1.85-.761a5.145 5.145 0 012.013-3.859l2.321 1.576a.444.444 0 00.753-.256l.009-.001.179-2.006c.002-.06-.014-.117-.045-.164l.008-.007-1.854-1.61a5.123 5.123 0 014.599-.804l-.83 2.869a.443.443 0 00.417.563"/></svg>, description: 'Orchestration' },
  { name: 'React', icon: <svg className="w-10 h-10 text-cyan-400" fill="currentColor" viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>, description: 'Frontend' }
];

const stats = [
  { value: '99.9%', label: 'Accuracy Rate' },
  { value: '24/7', label: 'Monitoring' },
  { value: '19+', label: 'Years Since 2006' },
  { value: '<50ms', label: 'Response Time' }
];

const apiIntegrations = [
  {
    name: 'MetaTrader 4/5',
    type: 'Trading Platforms',
    icon: 'MT',
    description: 'Full integration with MT4 and MT5 servers for real-time monitoring and risk analysis',
    features: ['Real-time data', 'Trade monitoring', 'Risk alerts', 'Multi-server support']
  },
  {
    name: 'Centroid',
    type: 'Bridge Provider',
    icon: 'CN',
    description: 'Seamless integration with Centroid bridge for liquidity aggregation and smart routing',
    features: ['Liquidity aggregation', 'Smart order routing', 'Risk management', 'Price feeds']
  },
  {
    name: 'FX Cubic',
    type: 'Trading System',
    icon: 'FX',
    description: 'Complete integration with FX Cubic for multi-asset trading and risk analytics',
    features: ['Multi-asset support', 'Advanced analytics', 'Real-time monitoring', 'Custom reports']
  },
  {
    name: 'BrokerPilot',
    type: 'CRM System',
    icon: 'BP',
    description: 'Deep integration with BrokerPilot CRM for comprehensive client management',
    features: ['Client profiling', 'Risk scoring', 'Automated alerts', 'Compliance tracking']
  },
  {
    name: 'FIX Protocol',
    type: 'Liquidity Providers',
    icon: 'FIX',
    description: 'Connect to major liquidity providers and prime brokers via FIX API',
    features: ['Low latency', 'Order routing', 'Market data', 'ECN connectivity']
  },
  {
    name: 'Exchange APIs',
    type: 'Crypto & Forex',
    icon: 'API',
    description: 'Direct integration with major exchanges for comprehensive market coverage',
    features: ['Binance', 'Coinbase', 'Interactive Brokers', 'LMAX']
  }
];