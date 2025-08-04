'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default function EnhancedDemoPage() {
  const [selectedClient, setSelectedClient] = useState('all');
  const [dateRange, setDateRange] = useState('7d');
  const [searchTerm, setSearchTerm] = useState('');
  const [suspiciousClients, setSuspiciousClients] = useState<any[]>([]);
  const [selectedSuspicious, setSelectedSuspicious] = useState<any>(null);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [detectionMode, setDetectionMode] = useState('suspicious');
  const [activeTab, setActiveTab] = useState('chat');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Generate enhanced suspicious clients with financial data
  const generateSuspiciousClients = () => {
    const names = ['John Smith', 'Elena Petrova', 'Michael Chen', 'Sarah Johnson', 'Alex Wong', 'Maria Garcia', 'David Kim', 'Anna Mueller'];
    const servers = ['MT5-PRO', 'MT5-ECN', 'MT5-PRIME', 'MT5-DEMO'];
    const types = ['High-frequency trading', 'Arbitrage patterns', 'Martingale usage', 'Price manipulation', 'News trading', 'Scalping abuse'];
    const statuses = ['Confirmed', 'Investigating', 'Monitoring', 'Cleared'];
    
    return Array.from({ length: Math.floor(Math.random() * 8) + 3 }, (_, i) => {
      const balance = Math.floor(Math.random() * 500000) + 10000;
      const equity = balance + Math.floor(Math.random() * 100000) - 50000;
      const margin = Math.floor(Math.random() * balance * 0.3);
      const freeMargin = equity - margin;
      
      // Generate time-series data
      const equityCurve = Array.from({ length: 30 }, (_, j) => ({
        day: j + 1,
        equity: balance + Math.floor(Math.random() * 50000) - 25000 + (j * 1000)
      }));
      
      const exposureData = Array.from({ length: 24 }, (_, h) => ({
        hour: h,
        exposure: Math.floor(Math.random() * 100000) + 10000
      }));
      
      const tradeDistribution = [
        { name: 'Forex', value: 45, color: '#6366f1' },
        { name: 'Indices', value: 30, color: '#8b5cf6' },
        { name: 'Commodities', value: 15, color: '#a78bfa' },
        { name: 'Crypto', value: 10, color: '#c084fc' }
      ];
      
      // Market Impact Analysis for Arbitrage Detection
      const marketImpactData = Array.from({ length: 50 }, (_, i) => {
        const entryPrice = 1.1000 + (Math.random() * 0.0050);
        const immediatePrice = entryPrice + (Math.random() > 0.7 ? Math.random() * 0.0010 : -Math.random() * 0.0003);
        const profitTime = Math.random() > 0.7 ? Math.floor(Math.random() * 5) : Math.floor(Math.random() * 60);
        return {
          tradeId: i + 1,
          entryPrice,
          immediatePrice,
          profitTime,
          suspicious: profitTime < 5 && ((immediatePrice - entryPrice) * 10000) > 2
        };
      });
      
      // Connection patterns (like BrokerPilot features)
      const connectionPatterns = {
        ipAddresses: [
          { ip: '192.168.1.100', country: 'UK', connections: 45, suspicious: false },
          { ip: '10.0.0.25', country: 'Russia', connections: 123, suspicious: true },
          { ip: '172.16.0.50', country: 'China', connections: 89, suspicious: true }
        ],
        deviceFingerprints: 3,
        multiAccountLinks: Math.floor(Math.random() * 5) + 1,
        sameStrategyAccounts: Math.floor(Math.random() * 8) + 2
      };
      
      return {
        id: `CL${1000 + i}`,
        name: names[Math.floor(Math.random() * names.length)],
        server: servers[Math.floor(Math.random() * servers.length)],
        riskScore: Math.floor(Math.random() * 40) + 60,
        suspiciousType: types[Math.floor(Math.random() * types.length)],
        lastActivity: new Date(Date.now() - Math.random() * 86400000 * 7).toISOString(),
        tradingVolume: Math.floor(Math.random() * 1000000) + 50000,
        profitLoss: Math.floor(Math.random() * 200000) - 50000,
        status: statuses[Math.floor(Math.random() * statuses.length)],
        violations: Math.floor(Math.random() * 20) + 1,
        // Financial metrics
        balance,
        equity,
        margin,
        freeMargin,
        marginLevel: margin > 0 ? ((equity / margin) * 100).toFixed(2) : '0',
        leverage: `1:${Math.floor(Math.random() * 400) + 100}`,
        openPositions: Math.floor(Math.random() * 50) + 1,
        totalTrades: Math.floor(Math.random() * 1000) + 100,
        winRate: Math.floor(Math.random() * 30) + 40,
        avgProfit: Math.floor(Math.random() * 500) + 50,
        avgLoss: Math.floor(Math.random() * 300) + 100,
        maxDrawdown: Math.floor(Math.random() * 30) + 10,
        // Chart data
        equityCurve,
        exposureData,
        tradeDistribution,
        marketImpactData,
        connectionPatterns,
        // Additional suspicious metrics
        instantProfitRate: Math.floor(Math.random() * 40) + 10, // % of trades profitable within 5 seconds
        slippageAbuse: Math.random() > 0.7,
        latencyArbitrage: Math.random() > 0.6,
        newsTrading: Math.random() > 0.5
      };
    });
  };

  // Search for suspicious clients
  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setSuspiciousClients(generateSuspiciousClients());
      setIsSearching(false);
    }, 1500);
  };

  // AI Chat functionality
  const sendChatMessage = () => {
    if (!chatInput.trim()) return;
    
    const userMessage = { role: 'user', content: chatInput };
    setChatMessages(prev => [...prev, userMessage]);
    setChatInput('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        `Based on my analysis of ${selectedSuspicious?.name || 'this client'}, I've detected multiple risk patterns. The trading behavior shows characteristics of ${selectedSuspicious?.suspiciousType || 'suspicious activity'}.`,
        `The client's risk score of ${selectedSuspicious?.riskScore || '85'}% is significantly above our threshold. Recent trading patterns indicate potential market manipulation attempts.`,
        `I recommend immediate review of this account. The trading volume spike combined with the profit pattern suggests coordinated activity.`,
        `Historical data shows similar patterns were associated with ${detectionMode} in 89% of confirmed cases. Additional monitoring is strongly advised.`,
        `The margin level of ${selectedSuspicious?.marginLevel || '150'}% combined with the leverage of ${selectedSuspicious?.leverage || '1:200'} indicates high-risk trading behavior.`
      ];
      
      const aiMessage = {
        role: 'ai',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)]
      };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  // Initialize chat when client selected
  useEffect(() => {
    if (selectedSuspicious && chatMessages.length === 0) {
      setChatMessages([{
        role: 'ai',
        content: `I'm analyzing the trading patterns for ${selectedSuspicious.name}. This client has a risk score of ${selectedSuspicious.riskScore}% and has been flagged for ${selectedSuspicious.suspiciousType}. Their current equity is $${selectedSuspicious.equity.toLocaleString()} with ${selectedSuspicious.openPositions} open positions. What would you like to know?`
      }]);
    }
  }, [selectedSuspicious]);
  
  // Auto-scroll chat
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages]);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <a href="/" className="text-2xl font-bold">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">VELES</span>
              </a>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400">Enhanced Demo Cabinet</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Demo User</span>
              <button className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors">
                Exit Demo
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Advanced Search Section */}
        <div className="mb-8 bg-gray-800 rounded-xl p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-white mb-4">AI-Powered Detection System</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Detection Mode</label>
              <select
                value={detectionMode}
                onChange={(e) => setDetectionMode(e.target.value)}
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="suspicious">Suspicious Clients</option>
                <option value="arbitrage">Arbitrageurs</option>
                <option value="cheaters">Market Cheaters</option>
                <option value="manipulation">Price Manipulators</option>
                <option value="highfrequency">HFT Abusers</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">Search Parameters</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Client ID, name, or pattern..."
                className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200 disabled:opacity-50"
              >
                {isSearching ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Analyzing...
                  </span>
                ) : (
                  'Start AI Detection'
                )}
              </button>
            </div>
          </div>
          
          {/* Detection Results */}
          {suspiciousClients.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-white mb-3">Detection Results: {suspiciousClients.length} {detectionMode} found</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {suspiciousClients.map((client) => (
                  <motion.div
                    key={client.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-gray-700 rounded-lg p-4 border border-gray-600 hover:border-blue-500 cursor-pointer transition-all"
                    onClick={() => {
                      setSelectedSuspicious(client);
                      setAiChatOpen(true);
                      setChatMessages([]);
                      setActiveTab('chat');
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="text-white font-medium">{client.name}</h4>
                        <p className="text-gray-400 text-sm">{client.id} • {client.server}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded ${
                        client.riskScore >= 80 ? 'bg-red-900/50 text-red-400' : 
                        client.riskScore >= 60 ? 'bg-yellow-900/50 text-yellow-400' : 
                        'bg-green-900/50 text-green-400'
                      }`}>
                        {client.riskScore}%
                      </span>
                    </div>
                    <div className="space-y-1">
                      <p className="text-gray-300 text-sm">{client.suspiciousType}</p>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Balance:</span>
                        <span className="text-gray-300">${(client.balance / 1000).toFixed(0)}k</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">P&L:</span>
                        <span className={client.profitLoss >= 0 ? 'text-green-400' : 'text-red-400'}>
                          ${(client.profitLoss / 1000).toFixed(0)}k
                        </span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="text-gray-400">Violations:</span>
                        <span className="text-yellow-400">{client.violations}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Enhanced AI Chat Modal */}
      <AnimatePresence>
        {aiChatOpen && selectedSuspicious && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            onClick={() => setAiChatOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-gray-800 rounded-xl w-full max-w-4xl max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with Tabs */}
              <div className="border-b border-gray-700">
                <div className="p-6 pb-0">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Client Analysis: {selectedSuspicious.name}</h3>
                      <p className="text-gray-400 mt-1">
                        Risk Score: {selectedSuspicious.riskScore}% • {selectedSuspicious.suspiciousType}
                      </p>
                    </div>
                    <button
                      onClick={() => setAiChatOpen(false)}
                      className="text-gray-400 hover:text-white"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => setActiveTab('chat')}
                      className={`pb-3 px-1 border-b-2 transition-colors ${
                        activeTab === 'chat' 
                          ? 'border-blue-500 text-white' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      AI Chat
                    </button>
                    <button
                      onClick={() => setActiveTab('financials')}
                      className={`pb-3 px-1 border-b-2 transition-colors ${
                        activeTab === 'financials' 
                          ? 'border-blue-500 text-white' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      Financial Metrics
                    </button>
                    <button
                      onClick={() => setActiveTab('charts')}
                      className={`pb-3 px-1 border-b-2 transition-colors ${
                        activeTab === 'charts' 
                          ? 'border-blue-500 text-white' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      Analytics
                    </button>
                    <button
                      onClick={() => setActiveTab('arbitrage')}
                      className={`pb-3 px-1 border-b-2 transition-colors ${
                        activeTab === 'arbitrage' 
                          ? 'border-blue-500 text-white' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      Market Impact
                    </button>
                    <button
                      onClick={() => setActiveTab('connections')}
                      className={`pb-3 px-1 border-b-2 transition-colors ${
                        activeTab === 'connections' 
                          ? 'border-blue-500 text-white' 
                          : 'border-transparent text-gray-400 hover:text-white'
                      }`}
                    >
                      Connections
                    </button>
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              <div className="flex-1 overflow-hidden">
                {/* AI Chat Tab */}
                {activeTab === 'chat' && (
                  <>
                    <div className="flex-1 overflow-y-auto p-6 space-y-4" style={{ maxHeight: 'calc(80vh - 200px)' }}>
                      {chatMessages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div className={`max-w-[80%] p-4 rounded-lg ${
                            message.role === 'user' 
                              ? 'bg-blue-600 text-white' 
                              : 'bg-gray-700 text-gray-200'
                          }`}>
                            {message.role === 'ai' && (
                              <div className="flex items-center mb-2">
                                <span className="text-xs font-medium text-gray-400">AI Assistant</span>
                              </div>
                            )}
                            <p className="text-sm">{message.content}</p>
                          </div>
                        </motion.div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>
                    <div className="p-6 border-t border-gray-700">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={chatInput}
                          onChange={(e) => setChatInput(e.target.value)}
                          onKeyPress={(e) => e.key === 'Enter' && sendChatMessage()}
                          placeholder="Ask about this client's trading patterns..."
                          className="flex-1 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                        />
                        <button
                          onClick={sendChatMessage}
                          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </>
                )}

                {/* Financial Metrics Tab */}
                {activeTab === 'financials' && (
                  <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 120px)' }}>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-gray-400 text-sm mb-1">Balance</h4>
                        <p className="text-2xl font-bold text-white">${selectedSuspicious.balance.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-gray-400 text-sm mb-1">Equity</h4>
                        <p className="text-2xl font-bold text-white">${selectedSuspicious.equity.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-gray-400 text-sm mb-1">Margin</h4>
                        <p className="text-2xl font-bold text-white">${selectedSuspicious.margin.toLocaleString()}</p>
                      </div>
                      <div className="bg-gray-700 rounded-lg p-4">
                        <h4 className="text-gray-400 text-sm mb-1">Free Margin</h4>
                        <p className="text-2xl font-bold text-white">${selectedSuspicious.freeMargin.toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="text-white font-medium">Trading Metrics</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Margin Level</span>
                            <span className="text-white font-medium">{selectedSuspicious.marginLevel}%</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Leverage</span>
                            <span className="text-white font-medium">{selectedSuspicious.leverage}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Open Positions</span>
                            <span className="text-white font-medium">{selectedSuspicious.openPositions}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Total Trades</span>
                            <span className="text-white font-medium">{selectedSuspicious.totalTrades}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h4 className="text-white font-medium">Performance</h4>
                        <div className="space-y-3">
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Win Rate</span>
                            <span className="text-green-400 font-medium">{selectedSuspicious.winRate}%</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Average Profit</span>
                            <span className="text-green-400 font-medium">+${selectedSuspicious.avgProfit}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Average Loss</span>
                            <span className="text-red-400 font-medium">-${selectedSuspicious.avgLoss}</span>
                          </div>
                          <div className="flex justify-between py-2 border-b border-gray-700">
                            <span className="text-gray-400">Max Drawdown</span>
                            <span className="text-yellow-400 font-medium">{selectedSuspicious.maxDrawdown}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Trade Distribution */}
                    <div className="mt-6">
                      <h4 className="text-white font-medium mb-4">Trade Distribution</h4>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={selectedSuspicious.tradeDistribution}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                            >
                              {selectedSuspicious.tradeDistribution.map((entry: any, index: number) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                )}

                {/* Analytics Tab */}
                {activeTab === 'charts' && (
                  <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 120px)' }}>
                    <div className="space-y-6">
                      {/* Equity Curve */}
                      <div>
                        <h4 className="text-white font-medium mb-3">Equity Curve (30 days)</h4>
                        <div className="h-64 bg-gray-700 rounded-lg p-4">
                          <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={selectedSuspicious.equityCurve}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                              <XAxis dataKey="day" stroke="#9ca3af" />
                              <YAxis stroke="#9ca3af" />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                                labelStyle={{ color: '#f3f4f6' }}
                              />
                              <Line 
                                type="monotone" 
                                dataKey="equity" 
                                stroke="#10b981" 
                                strokeWidth={2}
                                dot={false}
                              />
                            </LineChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                      
                      {/* Exposure Pattern */}
                      <div>
                        <h4 className="text-white font-medium mb-3">24-Hour Exposure Pattern</h4>
                        <div className="h-64 bg-gray-700 rounded-lg p-4">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={selectedSuspicious.exposureData}>
                              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                              <XAxis dataKey="hour" stroke="#9ca3af" />
                              <YAxis stroke="#9ca3af" />
                              <Tooltip 
                                contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                                labelStyle={{ color: '#f3f4f6' }}
                              />
                              <Area 
                                type="monotone" 
                                dataKey="exposure" 
                                stroke="#8b5cf6" 
                                fill="#8b5cf6" 
                                fillOpacity={0.6}
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Market Impact Analysis Tab */}
                {activeTab === 'arbitrage' && (
                  <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 120px)' }}>
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-2">Arbitrage Detection Metrics</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-red-900/20 border border-red-800 rounded-lg p-4">
                          <h5 className="text-red-400 text-sm mb-1">Instant Profit Rate</h5>
                          <p className="text-2xl font-bold text-white">{selectedSuspicious.instantProfitRate}%</p>
                          <p className="text-xs text-gray-400 mt-1">Trades profitable < 5 sec</p>
                        </div>
                        <div className={`rounded-lg p-4 border ${
                          selectedSuspicious.slippageAbuse 
                            ? 'bg-yellow-900/20 border-yellow-800' 
                            : 'bg-gray-700 border-gray-600'
                        }`}>
                          <h5 className="text-yellow-400 text-sm mb-1">Slippage Abuse</h5>
                          <p className="text-2xl font-bold text-white">
                            {selectedSuspicious.slippageAbuse ? 'Detected' : 'Clear'}
                          </p>
                        </div>
                        <div className={`rounded-lg p-4 border ${
                          selectedSuspicious.latencyArbitrage 
                            ? 'bg-orange-900/20 border-orange-800' 
                            : 'bg-gray-700 border-gray-600'
                        }`}>
                          <h5 className="text-orange-400 text-sm mb-1">Latency Arbitrage</h5>
                          <p className="text-2xl font-bold text-white">
                            {selectedSuspicious.latencyArbitrage ? 'Suspected' : 'No'}
                          </p>
                        </div>
                        <div className={`rounded-lg p-4 border ${
                          selectedSuspicious.newsTrading 
                            ? 'bg-purple-900/20 border-purple-800' 
                            : 'bg-gray-700 border-gray-600'
                        }`}>
                          <h5 className="text-purple-400 text-sm mb-1">News Trading</h5>
                          <p className="text-2xl font-bold text-white">
                            {selectedSuspicious.newsTrading ? 'Active' : 'No'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Recent Suspicious Trades (Entry → Immediate Profit)</h4>
                      <div className="bg-gray-700 rounded-lg overflow-hidden">
                        <div className="overflow-x-auto">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-gray-600">
                                <th className="text-left p-3 text-gray-400 text-sm">Trade ID</th>
                                <th className="text-left p-3 text-gray-400 text-sm">Entry Price</th>
                                <th className="text-left p-3 text-gray-400 text-sm">Price After 1s</th>
                                <th className="text-left p-3 text-gray-400 text-sm">Profit (pips)</th>
                                <th className="text-left p-3 text-gray-400 text-sm">Time to Profit</th>
                                <th className="text-left p-3 text-gray-400 text-sm">Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              {selectedSuspicious.marketImpactData
                                .filter((trade: any) => trade.suspicious)
                                .slice(0, 10)
                                .map((trade: any) => (
                                  <tr key={trade.tradeId} className="border-b border-gray-600 hover:bg-gray-600">
                                    <td className="p-3 text-white">#{trade.tradeId}</td>
                                    <td className="p-3 text-white font-mono text-sm">{trade.entryPrice.toFixed(5)}</td>
                                    <td className="p-3 text-white font-mono text-sm">{trade.immediatePrice.toFixed(5)}</td>
                                    <td className="p-3">
                                      <span className="text-green-400 font-medium">
                                        +{((trade.immediatePrice - trade.entryPrice) * 10000).toFixed(1)}
                                      </span>
                                    </td>
                                    <td className="p-3">
                                      <span className="text-yellow-400">{trade.profitTime}s</span>
                                    </td>
                                    <td className="p-3">
                                      <span className="px-2 py-1 bg-red-900/50 text-red-400 text-xs rounded">
                                        Suspicious
                                      </span>
                                    </td>
                                  </tr>
                                ))
                              }
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-900/20 border border-yellow-800 rounded-lg p-4">
                      <h5 className="text-yellow-400 font-medium mb-2">⚠️ Market Impact Analysis</h5>
                      <p className="text-gray-300 text-sm">
                        This client shows signs of potential arbitrage activity. {selectedSuspicious.instantProfitRate}% of trades 
                        become profitable within 5 seconds of entry, which is statistically improbable in normal market conditions. 
                        This pattern suggests possible latency arbitrage, price feed manipulation, or insider information.
                      </p>
                    </div>
                  </div>
                )}

                {/* Connections Analysis Tab (BrokerPilot-style) */}
                {activeTab === 'connections' && (
                  <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(80vh - 120px)' }}>
                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-4">Multi-Account Detection</h4>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="bg-gray-700 rounded-lg p-4">
                          <h5 className="text-gray-400 text-sm mb-3">Connected Accounts</h5>
                          <div className="space-y-2">
                            <div className="flex justify-between items-center py-2 border-b border-gray-600">
                              <span className="text-white">Same Device Fingerprint</span>
                              <span className="text-yellow-400 font-medium">
                                {selectedSuspicious.connectionPatterns.deviceFingerprints} accounts
                              </span>
                            </div>
                            <div className="flex justify-between items-center py-2 border-b border-gray-600">
                              <span className="text-white">Linked by Strategy</span>
                              <span className="text-orange-400 font-medium">
                                {selectedSuspicious.connectionPatterns.sameStrategyAccounts} accounts
                              </span>
                            </div>
                            <div className="flex justify-between items-center py-2">
                              <span className="text-white">Multi-Account Groups</span>
                              <span className="text-red-400 font-medium">
                                {selectedSuspicious.connectionPatterns.multiAccountLinks} detected
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-700 rounded-lg p-4">
                          <h5 className="text-gray-400 text-sm mb-3">Connection Sources</h5>
                          <div className="space-y-2">
                            {selectedSuspicious.connectionPatterns.ipAddresses.map((conn: any, idx: number) => (
                              <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-600 last:border-0">
                                <div>
                                  <span className="text-white font-mono text-sm">{conn.ip}</span>
                                  <span className="text-gray-400 text-xs ml-2">({conn.country})</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className="text-gray-300 text-sm">{conn.connections} logins</span>
                                  {conn.suspicious && (
                                    <span className="px-2 py-1 bg-red-900/50 text-red-400 text-xs rounded">
                                      VPN/Proxy
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-white font-medium mb-3">Behavioral Patterns</h4>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="bg-gray-700 rounded-lg p-4 text-center">
                          <div className="text-3xl mb-2">🤖</div>
                          <h5 className="text-gray-400 text-sm">Bot Probability</h5>
                          <p className="text-xl font-bold text-yellow-400">87%</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-4 text-center">
                          <div className="text-3xl mb-2">⚡</div>
                          <h5 className="text-gray-400 text-sm">Avg Response Time</h5>
                          <p className="text-xl font-bold text-white">0.3s</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-4 text-center">
                          <div className="text-3xl mb-2">🔄</div>
                          <h5 className="text-gray-400 text-sm">Pattern Matching</h5>
                          <p className="text-xl font-bold text-orange-400">High</p>
                        </div>
                        <div className="bg-gray-700 rounded-lg p-4 text-center">
                          <div className="text-3xl mb-2">🌐</div>
                          <h5 className="text-gray-400 text-sm">Geo Anomalies</h5>
                          <p className="text-xl font-bold text-red-400">3</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4">
                      <h5 className="text-blue-400 font-medium mb-2">💡 Connection Analysis</h5>
                      <p className="text-gray-300 text-sm">
                        This analysis reveals potential multi-account operations. The client appears to be connected to 
                        {selectedSuspicious.connectionPatterns.multiAccountLinks} other accounts through shared device fingerprints, 
                        IP addresses, and trading patterns. This is commonly seen in coordinated trading groups or automated 
                        trading operations that violate single-account policies.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}