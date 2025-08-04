'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

export default function DemoPage() {
  const [selectedClient, setSelectedClient] = useState('all');
  const [dateRange, setDateRange] = useState('7d');
  const [reportType, setReportType] = useState('risk');
  const [searchTerm, setSearchTerm] = useState('');
  const [suspiciousClients, setSuspiciousClients] = useState<any[]>([]);
  const [selectedSuspicious, setSelectedSuspicious] = useState<any>(null);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<any[]>([]);
  const [chatInput, setChatInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [detectionMode, setDetectionMode] = useState('suspicious');

  // Generate demo data based on selections
  const generateReportData = () => {
    if (reportType === 'risk') {
      return [
        { date: 'Mon', highRisk: 12, mediumRisk: 45, lowRisk: 143, total: 200 },
        { date: 'Tue', highRisk: 15, mediumRisk: 52, lowRisk: 133, total: 200 },
        { date: 'Wed', highRisk: 8, mediumRisk: 48, lowRisk: 144, total: 200 },
        { date: 'Thu', highRisk: 22, mediumRisk: 55, lowRisk: 123, total: 200 },
        { date: 'Fri', highRisk: 18, mediumRisk: 42, lowRisk: 140, total: 200 },
        { date: 'Sat', highRisk: 14, mediumRisk: 38, lowRisk: 148, total: 200 },
        { date: 'Sun', highRisk: 10, mediumRisk: 40, lowRisk: 150, total: 200 },
      ];
    } else if (reportType === 'activity') {
      return [
        { time: '00:00', trades: 234, volume: 1250000, alerts: 3 },
        { time: '04:00', trades: 156, volume: 890000, alerts: 1 },
        { time: '08:00', trades: 478, volume: 3400000, alerts: 8 },
        { time: '12:00', trades: 612, volume: 4500000, alerts: 12 },
        { time: '16:00', trades: 534, volume: 3900000, alerts: 9 },
        { time: '20:00', trades: 423, volume: 2800000, alerts: 6 },
      ];
    } else {
      return [
        { metric: 'Risk Score', current: 87, previous: 82, target: 85 },
        { metric: 'Compliance', current: 94, previous: 91, target: 95 },
        { metric: 'Efficiency', current: 78, previous: 75, target: 80 },
        { metric: 'Accuracy', current: 96, previous: 94, target: 95 },
        { metric: 'Response Time', current: 92, previous: 88, target: 90 },
      ];
    }
  };

  // Generate random suspicious clients
  const generateSuspiciousClients = () => {
    const names = ['John Smith', 'Elena Petrova', 'Michael Chen', 'Sarah Johnson', 'Alex Wong', 'Maria Garcia', 'David Kim', 'Anna Mueller'];
    const servers = ['MT5-PRO', 'MT5-ECN', 'MT5-PRIME', 'MT5-DEMO'];
    const types = ['High-frequency trading', 'Arbitrage patterns', 'Martingale usage', 'Price manipulation', 'News trading', 'Scalping abuse'];
    const statuses = ['Confirmed', 'Investigating', 'Monitoring', 'Cleared'];
    
    return Array.from({ length: Math.floor(Math.random() * 8) + 3 }, (_, i) => ({
      id: `CL${1000 + i}`,
      name: names[Math.floor(Math.random() * names.length)],
      server: servers[Math.floor(Math.random() * servers.length)],
      riskScore: Math.floor(Math.random() * 40) + 60,
      suspiciousType: types[Math.floor(Math.random() * types.length)],
      lastActivity: new Date(Date.now() - Math.random() * 86400000 * 7).toISOString(),
      tradingVolume: Math.floor(Math.random() * 1000000) + 50000,
      profitLoss: Math.floor(Math.random() * 200000) - 50000,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      violations: Math.floor(Math.random() * 20) + 1
    }));
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
        `Historical data shows similar patterns were associated with ${detectionMode} in 89% of confirmed cases. Additional monitoring is strongly advised.`
      ];
      
      const aiMessage = {
        role: 'ai',
        content: aiResponses[Math.floor(Math.random() * aiResponses.length)]
      };
      setChatMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  useEffect(() => {
    if (selectedSuspicious && chatMessages.length === 0) {
      setChatMessages([{
        role: 'ai',
        content: `I'm analyzing the trading patterns for ${selectedSuspicious.name}. This client has a risk score of ${selectedSuspicious.riskScore}% and has been flagged for ${selectedSuspicious.suspiciousType}. What would you like to know?`
      }]);
    }
  }, [selectedSuspicious]);

  const riskDistribution = [
    { name: 'Low Risk', value: 68, color: '#10b981' },
    { name: 'Medium Risk', value: 24, color: '#f59e0b' },
    { name: 'High Risk', value: 8, color: '#ef4444' },
  ];

  const clientMetrics = [
    { name: 'Total Clients', value: '1,247', change: '+12.5%', icon: '👥' },
    { name: 'Active Monitoring', value: '1,189', change: '+8.3%', icon: '📊' },
    { name: 'Alerts Generated', value: '423', change: '-15.2%', icon: '🚨' },
    { name: 'Reports Created', value: '89', change: '+22.1%', icon: '📄' },
  ];

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
              <span className="text-gray-400">Demo Cabinet</span>
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
                      <p className="text-gray-400 text-xs">Volume: ${(client.tradingVolume / 1000).toFixed(0)}k</p>
                      <p className="text-gray-400 text-xs">P&L: ${(client.profitLoss / 1000).toFixed(0)}k</p>
                      <p className="text-gray-400 text-xs">Violations: {client.violations}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
        {/* Controls */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Client Filter</label>
            <select 
              value={selectedClient}
              onChange={(e) => setSelectedClient(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            >
              <option value="all">All Clients</option>
              <option value="high-risk">High Risk Only</option>
              <option value="vip">VIP Clients</option>
              <option value="new">New Clients</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Time Period</label>
            <select 
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            >
              <option value="24h">Last 24 Hours</option>
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="90d">Last 90 Days</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">Report Type</label>
            <select 
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            >
              <option value="risk">Risk Analysis</option>
              <option value="activity">Activity Report</option>
              <option value="performance">Performance Metrics</option>
            </select>
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {clientMetrics.map((metric, index) => (
            <motion.div
              key={metric.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl">{metric.icon}</span>
                <span className={`text-sm px-2 py-1 rounded ${
                  metric.change.startsWith('+') ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                }`}>
                  {metric.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
              <div className="text-sm text-gray-400">{metric.name}</div>
            </motion.div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Main Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-lg font-semibold text-white mb-4">
              {reportType === 'risk' ? 'Risk Distribution Over Time' : 
               reportType === 'activity' ? 'Trading Activity' : 
               'Performance Comparison'}
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              {reportType === 'risk' ? (
                <AreaChart data={generateReportData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                  <Legend />
                  <Area type="monotone" dataKey="lowRisk" stackId="1" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="mediumRisk" stackId="1" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                  <Area type="monotone" dataKey="highRisk" stackId="1" stroke="#ef4444" fill="#ef4444" fillOpacity={0.6} />
                </AreaChart>
              ) : reportType === 'activity' ? (
                <LineChart data={generateReportData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                  <Legend />
                  <Line type="monotone" dataKey="trades" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="alerts" stroke="#ef4444" strokeWidth={2} />
                </LineChart>
              ) : (
                <BarChart data={generateReportData()}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: '#1f2937', border: 'none' }} />
                  <Legend />
                  <Bar dataKey="current" fill="#3b82f6" />
                  <Bar dataKey="target" fill="#10b981" />
                </BarChart>
              )}
            </ResponsiveContainer>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Risk Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={riskDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {riskDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Report Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Generate Test Report</h3>
          <p className="text-gray-400 mb-6">
            This is a demo cabinet where you can test report generation with sample data. 
            In the full version, you'll have access to real-time data and advanced analytics.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all duration-200">
              Generate PDF Report
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              Export to Excel
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              Schedule Reports
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
              API Documentation
            </button>
          </div>
        </motion.div>

        {/* Feature Notice */}
        <div className="mt-8 bg-blue-900/20 border border-blue-800 rounded-xl p-6">
          <h4 className="text-blue-400 font-semibold mb-2">🎯 Demo Mode Active</h4>
          <p className="text-gray-300">
            You're viewing the demo cabinet with sample data. The full Veles system includes:
          </p>
          <ul className="mt-4 space-y-2 text-gray-400">
            <li>• Real-time data processing from multiple sources</li>
            <li>• AI-powered risk detection and analysis</li>
            <li>• Custom alert configurations</li>
            <li>• Advanced reporting with 50+ metrics</li>
            <li>• API integration with your existing systems</li>
          </ul>
        </div>
      </main>

      {/* AI Chat Modal */}
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
              className="bg-gray-800 rounded-xl w-full max-w-2xl max-h-[80vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Chat Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-white">AI Analysis: {selectedSuspicious.name}</h3>
                    <p className="text-gray-400 mt-1">Risk Score: {selectedSuspicious.riskScore}% • {selectedSuspicious.suspiciousType}</p>
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
              </div>

              {/* Chat Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
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
              </div>

              {/* Chat Input */}
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}