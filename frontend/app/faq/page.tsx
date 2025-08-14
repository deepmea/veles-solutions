'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'General',
    question: 'What is Veles Risk Management System?',
    answer: 'Veles is a comprehensive B2B risk management platform designed specifically for forex brokers, prime brokers, and liquidity providers. It combines AI-powered analytics with real-time monitoring to detect and prevent fraudulent activities, market manipulation, and operational risks.'
  },
  {
    category: 'General',
    question: 'Who can benefit from using Veles?',
    answer: 'Veles is designed for forex brokers of all sizes, from small boutique firms to Tier-1 institutions. Prime brokers, liquidity providers, and prop trading firms also benefit from our comprehensive risk management tools.'
  },
  {
    category: 'Features',
    question: 'What makes Veles different from other risk management solutions?',
    answer: 'Veles offers modular architecture allowing you to choose only the features you need. Our AI-powered detection system is trained on millions of trading patterns, providing 99.9% accuracy in identifying suspicious activities. We also offer seamless integration with major trading platforms.'
  },
  {
    category: 'Features',
    question: 'Can Veles detect arbitrage and latency trading?',
    answer: 'Yes, our Market Impact Analysis module specifically detects various forms of arbitrage including latency arbitrage, triangular arbitrage, and cross-broker arbitrage. The system analyzes execution times, price discrepancies, and trading patterns in real-time.'
  },
  {
    category: 'Features',
    question: 'Does Veles support multi-account detection?',
    answer: 'Our Connection Analysis module uses advanced algorithms to identify related accounts based on trading patterns, IP addresses, device fingerprints, and behavioral analysis. This helps prevent bonus abuse and coordinated market manipulation.'
  },
  {
    category: 'Features',
    question: 'Can I customize reports and dashboards?',
    answer: 'Absolutely! All reports, modules, and dashboards in Veles are fully customizable to meet your specific needs. You can configure layouts, metrics, alerts, and visualizations exactly how you want them. Our team will work with you during onboarding to set up everything according to your preferences.'
  },
  {
    category: 'Integration',
    question: 'Which trading platforms does Veles integrate with?',
    answer: 'Veles integrates with MetaTrader 4/5, cTrader, FIX Protocol, and most proprietary trading platforms. We provide REST API and WebSocket connections for real-time data streaming and can work with any system that can export trade data.'
  },
  {
    category: 'Integration',
    question: 'How long does integration typically take?',
    answer: 'Basic integration can be completed in 1-2 days for standard platforms like MT4/MT5. Custom integrations typically take 1-2 weeks depending on complexity. Our technical team provides full support throughout the integration process.'
  },
  {
    category: 'Pricing',
    question: 'How is Veles priced?',
    answer: 'We offer modular pricing starting from $1,000 per month. You only pay for the modules you use. Volume discounts are available for larger brokers, and we offer custom enterprise packages for Tier-1 institutions.'
  },
  {
    category: 'Pricing',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial with full access to all features. This includes integration support and basic onboarding. No credit card required to start.'
  },
  {
    category: 'Security',
    question: 'How does Veles ensure data security?',
    answer: 'We use enterprise-grade encryption for all data transmission and storage. Our infrastructure is hosted in secure data centers with SOC 2 compliance. We never store sensitive client information, and all data access is logged and audited.'
  },
  {
    category: 'Security',
    question: 'Can Veles be deployed on-premise?',
    answer: 'Yes, we offer on-premise deployment options for enterprise clients with specific security requirements. This includes full installation support and ongoing maintenance.'
  },
  {
    category: 'Support',
    question: 'What kind of support do you provide?',
    answer: '24/7 technical support is included with all plans. We provide email, phone, and chat support, with guaranteed response times based on issue severity. Enterprise clients get dedicated account managers.'
  },
  {
    category: 'Support',
    question: 'Do you provide training for our team?',
    answer: 'Basic onboarding and system training is included with all plans. For teams that need advanced training on risk management best practices and compliance strategies, we offer comprehensive training programs as an additional service. This includes personalized workshops, advanced tutorials, and ongoing education to help your team maximize the system\'s potential.'
  }
];

export default function FAQPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const categories = ['All', ...Array.from(new Set(faqData.map(item => item.category)))];
  
  const filteredFAQ = selectedCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === selectedCategory);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-gray-950 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to know about Veles Risk Management System
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {filteredFAQ.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-800 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                    <span className="text-sm text-indigo-400 mt-1">{item.category}</span>
                  </div>
                  <motion.svg
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-4">
                        <p className="text-gray-300">{item.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-400 mb-6">
              Our team is here to help. Contact us for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-lg hover:from-indigo-500 hover:to-violet-500 transition-all duration-200"
              >
                Contact Support
              </motion.a>
              <motion.a
                href="/demo"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-200"
              >
                Try Demo
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}