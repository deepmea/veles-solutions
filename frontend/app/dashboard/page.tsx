'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Tenant {
  id: string;
  name: string;
  plan: string;
  servers: number;
  accounts: number;
}

export default function DashboardPage() {
  const router = useRouter();
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In production, check authentication
    // For demo, mock tenant data
    setTimeout(() => {
      setTenant({
        id: 'tenant-123',
        name: 'Demo Broker Ltd',
        plan: 'Professional',
        servers: 3,
        accounts: 487
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-white">Veles Dashboard</h1>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{tenant?.name}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-blue-900/50 text-blue-400 rounded-full text-sm">
                {tenant?.plan} Plan
              </span>
              <button className="text-gray-400 hover:text-white">
                Settings
              </button>
              <button className="text-gray-400 hover:text-white">
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Connected Servers</h3>
            <p className="text-3xl font-bold text-white">{tenant?.servers}</p>
            <p className="text-green-400 text-sm mt-2">All active</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Total Accounts</h3>
            <p className="text-3xl font-bold text-white">{tenant?.accounts}</p>
            <p className="text-blue-400 text-sm mt-2">+23 this week</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Risk Alerts</h3>
            <p className="text-3xl font-bold text-white">12</p>
            <p className="text-yellow-400 text-sm mt-2">3 critical</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700"
          >
            <h3 className="text-gray-400 text-sm mb-2">Reports Generated</h3>
            <p className="text-3xl font-bold text-white">156</p>
            <p className="text-gray-400 text-sm mt-2">This month</p>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/dashboard/monitoring')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-left hover:from-blue-500 hover:to-purple-500 transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Real-time Monitoring</h3>
            <p className="text-blue-100">View live trading activity and risk metrics</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/dashboard/reports')}
            className="bg-gray-800 rounded-xl p-6 text-left border border-gray-700 hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">Generate Reports</h3>
            <p className="text-gray-400">Create custom risk analysis reports</p>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => router.push('/dashboard/connections')}
            className="bg-gray-800 rounded-xl p-6 text-left border border-gray-700 hover:border-blue-500 transition-all"
          >
            <h3 className="text-xl font-semibold text-white mb-2">API Connections</h3>
            <p className="text-gray-400">Manage your trading platform integrations</p>
          </motion.button>
        </div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Recent Activity</h2>
          <div className="space-y-3">
            {[
              { time: '2 minutes ago', event: 'High risk alert', client: 'ACC-4521', type: 'alert' },
              { time: '15 minutes ago', event: 'Report generated', report: 'Daily Risk Analysis', type: 'report' },
              { time: '1 hour ago', event: 'New account detected', server: 'MT5-PRO', type: 'info' },
              { time: '3 hours ago', event: 'API connection verified', platform: 'MetaTrader 5', type: 'success' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-2 h-2 rounded-full ${
                    activity.type === 'alert' ? 'bg-red-500' :
                    activity.type === 'report' ? 'bg-blue-500' :
                    activity.type === 'success' ? 'bg-green-500' :
                    'bg-gray-500'
                  }`} />
                  <div>
                    <p className="text-white">{activity.event}</p>
                    <p className="text-gray-400 text-sm">
                      {activity.client && `Client: ${activity.client}`}
                      {activity.report && `${activity.report}`}
                      {activity.server && `Server: ${activity.server}`}
                      {activity.platform && `Platform: ${activity.platform}`}
                    </p>
                  </div>
                </div>
                <span className="text-gray-500 text-sm">{activity.time}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}