'use client';

import React, { useState } from 'react';
import DemoCharts from '../components/DemoCharts';
import { motion, AnimatePresence } from 'framer-motion';

export default function HomePage() {
  const [selectedModule, setSelectedModule] = useState<string | null>(null);
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gray-950">
        {/* Robot Hand Background with seamless blending */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 w-full h-full">
            <img 
              src="/robot-hand-analysis.jpg" 
              alt="" 
              className="w-full h-full object-cover object-center opacity-100"
            />
            {/* Multiple gradient overlays for seamless blending */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/60 to-gray-950/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-transparent to-gray-950" />
          </div>
        </div>
        
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center w-full"
          >
            <div className="mb-8">
              <motion.h1 
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-8xl md:text-[13rem] lg:text-[16rem] mb-8 leading-none" 
                style={{ 
                  fontFamily: "Helvetica Neue, Arial, sans-serif", 
                  fontWeight: 600, 
                  letterSpacing: "-0.03em",
                  filter: "drop-shadow(0 10px 30px rgba(99, 102, 241, 0.3))"
                }}
              >
                <span className="bg-gradient-to-r from-blue-500 via-indigo-600 to-violet-700 text-transparent bg-clip-text animate-gradient">VELES</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-base md:text-lg lg:text-xl text-gray-300 uppercase tracking-[0.2em] mb-12 font-light"
              >
                B2B CUSTOMIZABLE RISK SOLUTIONS &<br/>
                <span className="text-gray-400">AI INTEGRATIONS FOR BROKERAGE COMPANIES</span>
              </motion.p>
            </div>
            
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-2xl mx-auto"
              >
                <motion.a
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.98 }}
                  href="/contact?trial=true"
                  className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold text-base rounded-xl shadow-2xl hover:from-indigo-500 hover:to-violet-500 transition-all duration-300 relative overflow-hidden border border-indigo-500/30"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Start Free Trial
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/demo"
                  className="group w-full sm:w-auto px-8 py-4 bg-gray-800/50 backdrop-blur-xl text-white font-semibold text-base rounded-xl shadow-lg hover:bg-gray-700/50 transition-all duration-300 border border-gray-600/50 hover:border-gray-500/70"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M12 5.04v2.88m6.36 1.64l-2.04.73M18.32 12l-2.73.69M18.96 16.36l-2.04-.73M16.96 19.32l-.69-2.73M12 18.96v-2.88M5.64 16.36l2.04-.73M1.68 12l2.73.69M1.04 7.64l2.04.73M4.04 4.68l.69 2.73" />
                    </svg>
                    View Live Demo
                  </span>
                </motion.a>
                
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="/quote"
                  className="hidden sm:flex w-full sm:w-auto px-8 py-4 text-gray-300 hover:text-white font-semibold text-base rounded-xl transition-all duration-300 border border-gray-600/30 hover:border-gray-500/50 hover:bg-gray-800/30"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Schedule Demo
                  </span>
                </motion.a>
              </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Features for SEO */}
      <section className="py-12 bg-gray-900 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 25% 25%, rgba(59,130,246,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.3) 0%, transparent 50%)'}}></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Multi-Broker Support</h3>
              <p className="text-gray-400">Manage multiple broker entities from a single dashboard</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">A-Book/B-Book Management</h3>
              <p className="text-gray-400">Smart routing and exposure management</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-green-500 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Custom Reports</h3>
              <p className="text-gray-400">Generate reports from any available data source</p>
            </motion.div>
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
            <h2 className="heading-primary text-4xl md:text-5xl text-white mb-4">
              Complete Broker Risk Management Suite
            </h2>
            <p className="text-lead text-xl text-gray-400 max-w-3xl mx-auto">
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
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
                      <svg className="w-4 h-4 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedModule(selectedModule === module.title ? null : module.title)}
                  className="mt-6 w-full py-2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
                >
                  {selectedModule === module.title ? 'Close' : 'Learn More'}
                </motion.button>
                <AnimatePresence>
                  {selectedModule === module.title && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-gray-700"
                    >
                      <div className="space-y-3">
                        {module.title === 'Risk Analytics' && (
                          <>
                            <p className="text-gray-200 text-sm leading-relaxed font-medium">
                              Advanced AI-Powered Detection
                            </p>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Our machine learning algorithms analyze trading patterns in real-time to detect:
                            </p>
                            <ul className="text-gray-400 text-sm space-y-1 ml-4">
                              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> Suspicious trading activities</li>
                              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> Arbitrage attempts & latency exploitation</li>
                              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> Market manipulation patterns</li>
                              <li className="flex items-start"><span className="text-indigo-400 mr-2">•</span> High-frequency trading abuse</li>
                            </ul>
                            <p className="text-xs text-gray-500 italic mt-2">
                              Trained on millions of transactions with 99.9% detection accuracy
                            </p>
                          </>
                        )}
                        {module.title === 'Custom Reports' && (
                          <>
                            <p className="text-gray-200 text-sm leading-relaxed font-medium">
                              Fully Customizable Reporting
                            </p>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="bg-gray-800/50 rounded p-2">
                                <p className="text-xs font-semibold text-indigo-400 mb-1">Configure</p>
                                <p className="text-xs text-gray-400">Layouts & metrics</p>
                              </div>
                              <div className="bg-gray-800/50 rounded p-2">
                                <p className="text-xs font-semibold text-indigo-400 mb-1">Brand</p>
                                <p className="text-xs text-gray-400">Your identity</p>
                              </div>
                              <div className="bg-gray-800/50 rounded p-2">
                                <p className="text-xs font-semibold text-indigo-400 mb-1">Export</p>
                                <p className="text-xs text-gray-400">Any format</p>
                              </div>
                              <div className="bg-gray-800/50 rounded p-2">
                                <p className="text-xs font-semibold text-indigo-400 mb-1">Automate</p>
                                <p className="text-xs text-gray-400">Scheduled delivery</p>
                              </div>
                            </div>
                          </>
                        )}
                        {module.title === 'API Integration' && (
                          <>
                            <p className="text-gray-200 text-sm leading-relaxed font-medium">
                              Seamless Platform Connectivity
                            </p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">REST API</span>
                              <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">WebSockets</span>
                              <span className="px-2 py-1 bg-blue-900/30 text-blue-400 text-xs rounded">Webhooks</span>
                            </div>
                            <p className="text-xs text-gray-400 mt-2">Compatible with:</p>
                            <p className="text-xs text-gray-500">MT4/MT5 • cTrader • FIX Protocol • Custom Platforms</p>
                          </>
                        )}
                        {module.title === 'AI Assistant' && (
                          <>
                            <p className="text-gray-200 text-sm leading-relaxed font-medium">
                              Intelligent Automation Suite
                            </p>
                            <div className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg p-3 border border-indigo-800/30">
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-400">Predictive Analytics</span>
                                  <span className="text-xs text-green-400">Active</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-400">Smart Alerts</span>
                                  <span className="text-xs text-green-400">Active</span>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-400">Pattern Learning</span>
                                  <span className="text-xs text-green-400">Active</span>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Analytics Preview Section */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-950 to-gray-900 opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Powerful Analytics at Your Fingertips
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Real-time insights, predictive analytics, and comprehensive reporting in one unified platform
            </p>
          </motion.div>

          {/* Dashboard Preview Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Financial Overview Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Financial Overview</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Monthly Revenue</p>
                  <p className="text-2xl font-bold text-green-400">$720,000</p>
                  <p className="text-xs text-green-400 mt-1">↑ 15.8%</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Total Volume</p>
                  <p className="text-2xl font-bold text-blue-400">$45.2M</p>
                  <p className="text-xs text-blue-400 mt-1">↑ 18.7%</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Active Clients</p>
                  <p className="text-2xl font-bold text-purple-400">1,587</p>
                  <p className="text-xs text-purple-400 mt-1">↑ 12.5%</p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p className="text-gray-400 text-sm mb-1">Spread Revenue</p>
                  <p className="text-2xl font-bold text-yellow-400">$156K</p>
                  <p className="text-xs text-yellow-400 mt-1">↑ 8.9%</p>
                </div>
              </div>
              <div className="h-48 bg-gray-800 rounded-lg p-4 relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 400 200">
                    <path d="M0,100 Q50,80 100,90 T200,70 T300,85 T400,60" stroke="#10b981" strokeWidth="3" fill="none" opacity="0.8"/>
                    <path d="M0,120 Q50,100 100,110 T200,95 T300,105 T400,85" stroke="#3b82f6" strokeWidth="3" fill="none" opacity="0.6"/>
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Risk Analytics Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-purple-500 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Risk Analytics</h3>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400">Risk Score</span>
                  <span className="text-2xl font-bold text-yellow-400">73.2%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3">
                  <div className="bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-3 rounded-full" style={{width: '73.2%'}}></div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-red-400">23</p>
                  <p className="text-xs text-gray-400">Critical Alerts</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-yellow-400">156</p>
                  <p className="text-xs text-gray-400">Under Review</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-green-400">1,408</p>
                  <p className="text-xs text-gray-400">Clean Clients</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-sm text-gray-400 mb-2">Top Risk Patterns</p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white text-sm">Latency Arbitrage</span>
                    <span className="text-red-400 text-sm">45 cases</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white text-sm">Martingale Usage</span>
                    <span className="text-yellow-400 text-sm">32 cases</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white text-sm">News Trading</span>
                    <span className="text-orange-400 text-sm">28 cases</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Interactive Features Showcase */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Real-Time Trading Activity Monitor</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Live Trading Feed</h4>
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-gray-800 rounded-lg p-3 border border-gray-700"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-white font-medium">EURUSD</p>
                        <p className="text-xs text-gray-400">Client #{1000 + i * 123}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-medium">+{(Math.random() * 100).toFixed(2)} pips</p>
                        <p className="text-xs text-gray-400">{Math.floor(Math.random() * 60)}s ago</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-gray-800 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-4">Market Impact Analysis</h4>
                <div className="relative h-64 bg-gray-900 rounded-lg p-4 overflow-hidden">
                  <div className="h-full flex items-end justify-between gap-1">
                    {[45, 67, 78, 52, 89, 95, 71, 83, 91, 58, 76, 85, 92, 68, 73].map((height, i) => (
                      <div key={i} className="flex-1 flex flex-col justify-end">
                        <div 
                          className="bg-gradient-to-t from-indigo-600 via-blue-500 to-cyan-400 rounded-t opacity-90 transition-all duration-300 hover:opacity-100"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-4 left-4 bg-gray-800/95 backdrop-blur-sm rounded-lg px-3 py-2">
                    <p className="text-2xl font-bold text-white">87%</p>
                    <p className="text-xs text-gray-400">Detection Rate</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-300">Server Execution Speed</h4>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">London (LD4)</span>
                      <span className="text-green-400 text-sm font-bold">49ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '96%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">New York (NY4)</span>
                      <span className="text-green-400 text-sm">52ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full" style={{width: '94%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">Tokyo (TY3)</span>
                      <span className="text-blue-400 text-sm">67ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-blue-400 h-2 rounded-full" style={{width: '86%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-400 text-sm">Trade Server Response</span>
                      <span className="text-yellow-400 text-sm">91ms</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Monitoring Section */}
      <section className="py-20 bg-gray-950 relative overflow-hidden">
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
          
          {/* Before/After VELES Implementation Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 mb-8"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Impact of VELES Implementation</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded"></div>
                  <span className="text-xs text-gray-400">Before VELES</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-xs text-gray-400">After VELES</span>
                </div>
              </div>
            </div>
            <div className="h-48 bg-gray-900 rounded-lg p-4 relative">
              <div className="absolute left-4 top-4 text-xs text-gray-500">Risk Events per Day</div>
              <div className="absolute right-4 top-4 bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs font-bold">-73% reduction</div>
              <div className="h-full pt-8 flex items-end justify-between gap-2">
                {[
                  { before: 85, after: 23 },
                  { before: 92, after: 28 },
                  { before: 78, after: 18 },
                  { before: 95, after: 31 },
                  { before: 88, after: 25 },
                  { before: 91, after: 22 },
                  { before: 83, after: 19 },
                  { before: 90, after: 26 },
                  { before: 87, after: 21 },
                  { before: 94, after: 24 },
                  { before: 89, after: 20 },
                  { before: 86, after: 23 }
                ].map((data, i) => (
                  <div key={i} className="flex-1 flex flex-col justify-end gap-1">
                    <div className="relative flex flex-col justify-end h-full gap-1">
                      <div 
                        className="bg-gradient-to-t from-red-600 to-red-400 rounded-t opacity-60"
                        style={{ height: `${data.before}%` }}
                      />
                      <div 
                        className="bg-gradient-to-t from-green-600 to-green-400 rounded-t absolute bottom-0 w-full"
                        style={{ height: `${data.after}%` }}
                      />
                    </div>
                    {i % 3 === 0 && <span className="text-xs text-gray-600 text-center mt-1">{i + 1}</span>}
                  </div>
                ))}
              </div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500">Months</div>
            </div>
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
                <div className="mt-4 h-16 bg-gray-900 rounded p-2">
                  <div className="h-full flex items-end justify-between gap-0.5">
                    {[40, 45, 38, 52, 48, 61, 58, 65, 70, 68, 75, 72].map((height, i) => (
                      <div key={i} className="flex-1">
                        <div 
                          className={`rounded-sm transition-all duration-300 ${metric.trend === 'up' ? 'bg-gradient-to-t from-green-600 to-green-400' : 'bg-gradient-to-t from-red-600 to-red-400'}`}
                          style={{ height: `${height}%`, opacity: 0.7 + (i / 30) }}
                        />
                      </div>
                    ))}
                  </div>
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
            <p className="text-xs text-gray-500 italic mt-2">
              * Selected charts shown. Data is for demonstration purposes only.
            </p>
          </motion.div>
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-700">
            <DemoCharts />
          </div>
        </div>
      </section>

      {/* Advanced Analytics Features */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced Analytics & Reporting
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Deep insights into every aspect of your trading operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Spread Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Spread Cost Analytics</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">EURUSD</span>
                  <div className="text-right">
                    <span className="text-white font-medium">$45,230</span>
                    <span className="text-xs text-gray-500 ml-2">0.8 pips</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">GBPUSD</span>
                  <div className="text-right">
                    <span className="text-white font-medium">$32,180</span>
                    <span className="text-xs text-gray-500 ml-2">1.2 pips</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">GOLD</span>
                  <div className="text-right">
                    <span className="text-white font-medium">$28,950</span>
                    <span className="text-xs text-gray-500 ml-2">2.1 pips</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-800">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Spread Cost</span>
                  <span className="text-2xl font-bold text-yellow-400">$156,720</span>
                </div>
              </div>
            </motion.div>

            {/* Profit Per Million */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Profit per Million</h3>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 mb-4">
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-gray-400">Average P/M</span>
                  <span className="text-3xl font-bold text-green-400">+$1,247</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg" style={{right: '75%'}}></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-400">68%</p>
                  <p className="text-xs text-gray-400">Profitable Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-400">$892</p>
                  <p className="text-xs text-gray-400">Median P/M</p>
                </div>
              </div>
            </motion.div>

            {/* Markout Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Markout Analysis</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400 text-sm">1-second markout</span>
                    <span className="text-white text-sm">-0.3 pips</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400 text-sm">5-second markout</span>
                    <span className="text-white text-sm">+0.8 pips</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '65%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-400 text-sm">30-second markout</span>
                    <span className="text-white text-sm">+1.2 pips</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{width: '85%'}}></div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-400">Average impact on spread revenue</p>
              </div>
            </motion.div>
          </div>

          {/* Trading Volume Heatmap */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 bg-gray-900 rounded-2xl p-8 border border-gray-800"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">Trading Activity Heat Map</h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-400">24h Volume:</span>
                <span className="text-lg font-semibold text-green-400">$45.2M</span>
              </div>
            </div>
            
            {/* Compact time-based heatmap */}
            <div className="space-y-4">
              {['Asian Session', 'European Session', 'US Session'].map((session, sIdx) => (
                <div key={session} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300">{session}</span>
                    <span className="text-xs text-gray-500">
                      {sIdx === 0 ? '00:00-08:00' : sIdx === 1 ? '08:00-16:00' : '16:00-24:00'}
                    </span>
                  </div>
                  <div className="flex h-8 gap-0.5 rounded-lg overflow-hidden">
                    {Array.from({ length: 8 }, (_, hour) => {
                      const actualHour = sIdx * 8 + hour;
                      const intensity = Math.sin((actualHour / 24) * Math.PI * 2 + sIdx) * 0.5 + 0.5 + Math.random() * 0.2;
                      return (
                        <div
                          key={hour}
                          className="flex-1 relative group cursor-pointer transition-all duration-200 hover:scale-105"
                          style={{
                            background: `linear-gradient(135deg, 
                              rgba(59, 130, 246, ${intensity * 0.9}), 
                              rgba(139, 92, 246, ${intensity * 0.7}))`
                          }}
                        >
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-xs font-medium text-white drop-shadow-lg">
                              {actualHour}:00
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Simplified legend */}
            <div className="mt-6 flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="w-12 h-3 rounded-full bg-gradient-to-r from-blue-500/30 to-blue-500/50"></div>
                <span className="text-xs text-gray-400">Low</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-3 rounded-full bg-gradient-to-r from-blue-500/60 to-purple-500/80"></div>
                <span className="text-xs text-gray-400">High</span>
              </div>
            </div>
          </motion.div>
          
          {/* CTA Button after analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-12"
          >
            <p className="text-gray-400 mb-4">See how Veles can transform your operations</p>
            <motion.a
              href="/contact?trial=true"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
            >
              Start Free Trial
            </motion.a>
          </motion.div>
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
              Universal Platform Integration
            </h2>
            <p className="text-xl text-gray-400 mb-4">
              Connect with major trading platforms, bridge systems, and proprietary solutions
            </p>
            <p className="text-sm text-gray-500 italic">
              * All mentioned third-party platforms and systems are trademarks of their respective owners. Veles provides integration capabilities but is not affiliated with these companies.
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

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-400">
              Professional risk management solutions starting from $1,000 per month
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto bg-gray-800 rounded-2xl p-8 border border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise Solutions</h3>
              <p className="text-gray-400">Tailored to your business needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Modular pricing based on features</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Volume-based discounts available</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">24/7 technical support included</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Custom integration services</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Fully customizable solutions</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">Tailored to your workflow</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-6">Contact us for a personalized quote based on your requirements</p>
              <motion.a
                href="/quote"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
              >
                Get Custom Quote
              </motion.a>
            </div>
          </motion.div>
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
              Advanced Analytics • Real-time Monitoring • Customized Setup
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact?trial=true"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg shadow-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
              >
                Start Free Trial
              </motion.a>
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
    description: 'Fully customizable reports and dashboards',
    icon: <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
    features: ['Any data source', 'Custom layouts', 'Your branding', 'Tailored metrics'],
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
  { label: 'Risk Reduction', value: '73.2', unit: '%', change: '-65%', trend: 'down', sparkline: '0,40 20,35 40,25 60,18 80,12 100,5' },
  { label: 'Clean Clients', value: '1,189', unit: 'verified', change: '+847', trend: 'up', sparkline: '0,20 20,35 40,50 60,65 80,78 100,85' },
  { label: 'Daily Alerts', value: '4', unit: 'critical', change: '-86%', trend: 'down', sparkline: '0,40 20,38 40,28 60,18 80,8 100,2' }
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
  { value: '18+', label: 'Years Team Experience' },
  { value: '50+', label: 'Customizable Modules' }
];

const apiIntegrations = [
  {
    name: 'Trading Platforms',
    type: 'MT4/MT5/cTrader',
    icon: 'MT',
    description: 'Connect with major retail trading platforms for real-time monitoring and risk management',
    features: ['Real-time feeds', 'Trade monitoring', 'Risk alerts', 'Multi-server support']
  },
  {
    name: 'Bridge Systems',
    type: 'Liquidity Bridges',
    icon: 'BR',
    description: 'Integrate with leading bridge solutions for liquidity aggregation and smart order routing',
    features: ['Price aggregation', 'Smart routing', 'Latency optimization', 'Multiple LPs']
  },
  {
    name: 'CRM Systems',
    type: 'Client Management',
    icon: 'CRM',
    description: 'Connect with popular broker CRM systems for comprehensive client data analysis',
    features: ['Client profiling', 'Risk scoring', 'Automated workflows', 'Compliance tracking']
  },
  {
    name: 'Back Office',
    type: 'Operations',
    icon: 'BO',
    description: 'Seamless integration with back office systems for complete operational oversight',
    features: ['Trade processing', 'Settlement', 'Reconciliation', 'Reporting']
  },
  {
    name: 'FIX Protocol',
    type: 'Institutional',
    icon: 'FIX',
    description: 'Professional FIX connectivity for prime brokers and institutional liquidity providers',
    features: ['Low latency', 'Order routing', 'Market data', 'ECN connectivity']
  },
  {
    name: 'Custom APIs',
    type: 'Proprietary',
    icon: 'API',
    description: 'Flexible API framework for custom integrations with proprietary systems',
    features: ['REST/GraphQL', 'WebSockets', 'Custom protocols', 'Legacy systems']
  }
];