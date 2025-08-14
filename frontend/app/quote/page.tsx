'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Module {
  id: string;
  name: string;
  description: string;
  category: string;
}

const availableModules: Module[] = [
  {
    id: 'suspicious-detection',
    name: 'AI-Powered Suspicious Client Detection',
    description: 'Detect fraudulent patterns and unusual trading behavior in real-time',
    category: 'AI Analytics'
  },
  {
    id: 'market-impact',
    name: 'Market Impact Analysis',
    description: 'Analyze client trades impact on market prices and detect manipulative behavior',
    category: 'AI Analytics'
  },
  {
    id: 'connection-analysis',
    name: 'Connection Analysis',
    description: 'Identify multi-account users and related trading groups',
    category: 'AI Analytics'
  },
  {
    id: 'realtime-monitoring',
    name: 'Real-Time Monitoring Dashboard',
    description: 'Live monitoring of all trading activities with customizable alerts',
    category: 'Monitoring'
  },
  {
    id: 'risk-analytics',
    name: 'Risk Analytics',
    description: 'Comprehensive risk assessment and exposure management',
    category: 'Risk Management'
  },
  {
    id: 'mt4-integration',
    name: 'MetaTrader 4/5 Integration',
    description: 'Seamless integration with MT4 and MT5 platforms',
    category: 'Integrations'
  },
  {
    id: 'ctrader-integration',
    name: 'cTrader Integration',
    description: 'Full integration with cTrader platform',
    category: 'Integrations'
  },
  {
    id: 'fix-api',
    name: 'FIX API Integration',
    description: 'Connect via FIX protocol for institutional clients',
    category: 'Integrations'
  },
  {
    id: 'custom-reports',
    name: 'Custom Report Builder',
    description: 'Create and schedule custom reports with your branding',
    category: 'Reporting'
  },
  {
    id: 'abook-bbook',
    name: 'A-Book/B-Book Management',
    description: 'Smart order routing and exposure management',
    category: 'Risk Management'
  },
  {
    id: 'liquidity-management',
    name: 'Liquidity Provider Management',
    description: 'Manage multiple LPs with smart routing',
    category: 'Risk Management'
  }
];

export default function QuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    selectedModules: [] as string[],
    message: '',
    monthlyVolume: '',
    numberOfClients: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request submitted:', formData);
    alert('Thank you for your quote request! We will prepare a customized proposal and contact you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleModuleToggle = (moduleId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedModules: prev.selectedModules.includes(moduleId)
        ? prev.selectedModules.filter(id => id !== moduleId)
        : [...prev.selectedModules, moduleId]
    }));
  };

  const categories = Array.from(new Set(availableModules.map(m => m.category)));

  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get Your Custom Quote
          </h1>
          <p className="text-xl text-gray-400">
            Select the modules you need and we\'ll prepare a tailored solution for your brokerage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Module Selection */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Select Your Modules</h2>
              
              <div className="mb-6 p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
                <p className="text-gray-300 text-sm">
                  ✓ All modules are fully customizable<br/>
                  ✓ Volume-based pricing discounts available<br/>
                  ✓ Enterprise support included<br/>
                  ✓ Free 14-day trial for all modules
                </p>
              </div>

              <div className="mb-6 p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                <p className="text-green-300 text-sm font-semibold mb-2">Custom Development Available</p>
                <p className="text-gray-300 text-sm">
                  The modules listed are just a selection of what we offer. We can develop and integrate exactly what your business needs. Contact us to discuss your specific requirements.
                </p>
              </div>

              {categories.map(category => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-3">{category}</h3>
                  <div className="space-y-3">
                    {availableModules
                      .filter(module => module.category === category)
                      .map(module => (
                        <label
                          key={module.id}
                          className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={formData.selectedModules.includes(module.id)}
                            onChange={() => handleModuleToggle(module.id)}
                            className="mt-1 w-5 h-5 text-indigo-600 bg-gray-700 border-gray-600 rounded focus:ring-indigo-500"
                          />
                          <div className="flex-1">
                            <p className="text-white font-medium">{module.name}</p>
                            <p className="text-gray-400 text-sm mt-1">{module.description}</p>
                          </div>
                        </label>
                      ))}
                  </div>
                </div>
              ))}

              <div className="mt-6 p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-300 text-sm">
                  <strong className="text-white">Selected Modules:</strong> {formData.selectedModules.length}<br/>
                  <span className="text-gray-400">Base pricing starts from $1,000/month</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
              <h2 className="text-2xl font-bold text-white mb-6">Your Information</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="ABC Brokers Ltd."
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="monthlyVolume" className="block text-sm font-medium text-gray-300 mb-2">
                      Monthly Trading Volume
                    </label>
                    <select
                      id="monthlyVolume"
                      name="monthlyVolume"
                      value={formData.monthlyVolume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select volume</option>
                      <option value="under-100m">Under $100M</option>
                      <option value="100m-500m">$100M - $500M</option>
                      <option value="500m-1b">$500M - $1B</option>
                      <option value="1b-5b">$1B - $5B</option>
                      <option value="over-5b">Over $5B</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="numberOfClients" className="block text-sm font-medium text-gray-300 mb-2">
                      Number of Active Clients
                    </label>
                    <select
                      id="numberOfClients"
                      name="numberOfClients"
                      value={formData.numberOfClients}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors"
                    >
                      <option value="">Select range</option>
                      <option value="under-1k">Under 1,000</option>
                      <option value="1k-5k">1,000 - 5,000</option>
                      <option value="5k-10k">5,000 - 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="over-50k">Over 50,000</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Additional Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-indigo-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about any specific requirements or customizations you need..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-400">
                    * Required fields
                  </p>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={formData.selectedModules.length === 0}
                    className={`px-8 py-3 font-semibold rounded-lg transition-all duration-200 ${
                      formData.selectedModules.length > 0
                        ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:from-indigo-500 hover:to-violet-500'
                        : 'bg-gray-700 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Get Custom Quote
                  </motion.button>
                </div>
              </form>

              {formData.selectedModules.length === 0 && (
                <p className="mt-4 text-sm text-yellow-500 text-center">
                  Please select at least one module to proceed
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}