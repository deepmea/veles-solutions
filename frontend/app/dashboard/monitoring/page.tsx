'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

export default function MonitoringPage() {
  const router = useRouter();
  const [selectedServer, setSelectedServer] = useState('all');
  const [timeRange, setTimeRange] = useState('1h');
  const [autoRefresh, setAutoRefresh] = useState(true);
  
  // Real-time metrics
  const [metrics, setMetrics] = useState({
    totalVolume: 15234567,
    activeAccounts: 487,
    riskAlerts: 12,
    avgLatency: 23
  });

  // Real-time chart data
  const [activityData, setActivityData] = useState(() => 
    Array.from({ length: 20 }, (_, i) => ({
      time: `${i}:00`,
      trades: Math.floor(Math.random() * 100) + 50,
      volume: Math.floor(Math.random() * 1000000) + 500000,
      alerts: Math.floor(Math.random() * 5)
    }))
  );

  const riskDistribution = [
    { name: 'Low Risk', value: 68, color: '#10b981' },
    { name: 'Medium Risk', value: 24, color: '#f59e0b' },
    { name: 'High Risk', value: 8, color: '#ef4444' }
  ];

  const serverMetrics = [
    { server: 'MT5-PRO', status: 'active', accounts: 234, load: 67, latency: 12 },
    { server: 'MT5-ECN', status: 'active', accounts: 156, load: 45, latency: 18 },
    { server: 'MT4-DEMO', status: 'active', accounts: 97, load: 23, latency: 25 },
  ];

  // Simulate real-time updates
  useEffect(() => {
    if (!autoRefresh) return;
    
    const interval = setInterval(() => {
      // Update metrics
      setMetrics({
        totalVolume: metrics.totalVolume + Math.floor(Math.random() * 100000),
        activeAccounts: 487 + Math.floor(Math.random() * 10) - 5,
        riskAlerts: Math.floor(Math.random() * 20),
        avgLatency: 20 + Math.floor(Math.random() * 10)
      });
      
      // Update chart data
      setActivityData(prev => {
        const newData = [...prev.slice(1)];
        const lastTime = parseInt(prev[prev.length - 1].time) + 1;
        newData.push({
          time: `${lastTime % 24}:00`,
          trades: Math.floor(Math.random() * 100) + 50,
          volume: Math.floor(Math.random() * 1000000) + 500000,
          alerts: Math.floor(Math.random() * 5)
        });
        return newData;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, [autoRefresh, metrics.totalVolume]);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => router.push('/dashboard')}
                className="text-gray-400 hover:text-white"
              >
                ← Back
              </button>
              <h1 className="text-2xl font-bold text-white">Real-time Monitoring</h1>
              <span className={`px-2 py-1 text-xs rounded-full ${
                autoRefresh ? 'bg-green-900/50 text-green-400' : 'bg-gray-700 text-gray-400'
              }`}>
                {autoRefresh ? '● Live' : '○ Paused'}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <select
                value={selectedServer}
                onChange={(e) => setSelectedServer(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="all">All Servers</option>
                <option value="mt5-pro">MT5-PRO</option>
                <option value="mt5-ecn">MT5-ECN</option>
                <option value="mt4-demo">MT4-DEMO</option>
              </select>
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
              </select>
              <button
                onClick={() => setAutoRefresh(!autoRefresh)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  autoRefresh 
                    ? 'bg-gray-700 text-white hover:bg-gray-600' 
                    : 'bg-blue-600 text-white hover:bg-blue-500'
                }`}
              >
                {autoRefresh ? 'Pause' : 'Resume'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Total Volume</h3>
            <p className="text-3xl font-bold text-white">
              ${(metrics.totalVolume / 1000000).toFixed(2)}M
            </p>
            <p className="text-green-400 text-sm mt-2">↑ +12.5%</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Active Accounts</h3>
            <p className="text-3xl font-bold text-white">{metrics.activeAccounts}</p>
            <p className="text-blue-400 text-sm mt-2">Live trading</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Risk Alerts</h3>
            <p className="text-3xl font-bold text-white">{metrics.riskAlerts}</p>
            <p className="text-yellow-400 text-sm mt-2">3 critical</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Avg Latency</h3>
            <p className="text-3xl font-bold text-white">{metrics.avgLatency}ms</p>
            <p className="text-green-400 text-sm mt-2">Excellent</p>
          </motion.div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Activity Chart */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-lg font-semibold text-white mb-4">Trading Activity</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
                  labelStyle={{ color: '#f3f4f6' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="trades" 
                  stroke="#6366f1" 
                  fill="#6366f1" 
                  fillOpacity={0.6}
                  animationDuration={0}
                />
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Risk Distribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
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

        {/* Server Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <h3 className="text-lg font-semibold text-white mb-4">Server Status</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 text-sm">Server</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm">Status</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm">Accounts</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm">Load</th>
                  <th className="text-left py-3 px-4 text-gray-400 text-sm">Latency</th>
                </tr>
              </thead>
              <tbody>
                {serverMetrics.map((server) => (
                  <tr key={server.server} className="border-b border-gray-700 hover:bg-gray-750">
                    <td className="py-3 px-4 text-white">{server.server}</td>
                    <td className="py-3 px-4">
                      <span className="px-2 py-1 text-xs rounded-full bg-green-900/50 text-green-400">
                        {server.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{server.accounts}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-24 bg-gray-700 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              server.load > 80 ? 'bg-red-500' :
                              server.load > 60 ? 'bg-yellow-500' :
                              'bg-green-500'
                            }`}
                            style={{ width: `${server.load}%` }}
                          />
                        </div>
                        <span className="text-gray-300 text-sm">{server.load}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-300">{server.latency}ms</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  );
}