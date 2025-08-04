'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Connection {
  id: string;
  name: string;
  platform: string;
  server: string;
  status: 'active' | 'inactive' | 'error';
  accounts: number;
  lastSync: string;
}

export default function ConnectionsPage() {
  const router = useRouter();
  const [connections, setConnections] = useState<Connection[]>([
    {
      id: 'conn-1',
      name: 'MT5 Production Server',
      platform: 'MetaTrader 5',
      server: 'mt5.broker.com:443',
      status: 'active',
      accounts: 342,
      lastSync: '2 minutes ago'
    },
    {
      id: 'conn-2',
      name: 'MT4 Demo Server',
      platform: 'MetaTrader 4',
      server: 'demo.mt4broker.com:443',
      status: 'active',
      accounts: 145,
      lastSync: '5 minutes ago'
    },
    {
      id: 'conn-3',
      name: 'FIX Gateway',
      platform: 'FIX Protocol',
      server: 'fix.liquidity-provider.com',
      status: 'error',
      accounts: 0,
      lastSync: '1 hour ago'
    }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newConnection, setNewConnection] = useState({
    platform: 'MetaTrader 5',
    name: '',
    server: '',
    login: '',
    password: ''
  });

  const handleAddConnection = () => {
    // In production, this would call the API
    const connection: Connection = {
      id: `conn-${Date.now()}`,
      name: newConnection.name || `${newConnection.platform} Server`,
      platform: newConnection.platform,
      server: newConnection.server,
      status: 'inactive',
      accounts: 0,
      lastSync: 'Never'
    };
    setConnections([...connections, connection]);
    setShowAddModal(false);
    setNewConnection({
      platform: 'MetaTrader 5',
      name: '',
      server: '',
      login: '',
      password: ''
    });
  };

  const testConnection = (id: string) => {
    // Simulate connection test
    setConnections(connections.map(conn => 
      conn.id === id 
        ? { ...conn, status: 'active' as const, lastSync: 'Just now' }
        : conn
    ));
  };

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
              <h1 className="text-2xl font-bold text-white">API Connections</h1>
            </div>
            <button
              onClick={() => setShowAddModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              + Add Connection
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Connections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {connections.map((connection, index) => (
            <motion.div
              key={connection.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{connection.name}</h3>
                  <p className="text-gray-400 text-sm">{connection.platform}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  connection.status === 'active' ? 'bg-green-900/50 text-green-400' :
                  connection.status === 'error' ? 'bg-red-900/50 text-red-400' :
                  'bg-gray-700 text-gray-400'
                }`}>
                  {connection.status}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Server</span>
                  <span className="text-gray-300 font-mono text-xs">{connection.server}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Accounts</span>
                  <span className="text-gray-300">{connection.accounts}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Last Sync</span>
                  <span className="text-gray-300">{connection.lastSync}</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={() => testConnection(connection.id)}
                  className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm"
                >
                  Test
                </button>
                <button className="flex-1 px-3 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors text-sm">
                  Configure
                </button>
                <button className="px-3 py-2 bg-gray-700 text-red-400 rounded-lg hover:bg-gray-600 transition-colors text-sm">
                  Delete
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supported Platforms */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gray-800 rounded-xl p-6 border border-gray-700"
        >
          <h2 className="text-xl font-semibold text-white mb-4">Supported Platforms</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'MetaTrader 4', icon: 'MT4', supported: true },
              { name: 'MetaTrader 5', icon: 'MT5', supported: true },
              { name: 'cTrader', icon: 'CT', supported: true },
              { name: 'FIX Protocol', icon: 'FIX', supported: true },
              { name: 'Centroid', icon: 'CN', supported: true },
              { name: 'FX Cubic', icon: 'FXC', supported: true },
              { name: 'BrokerPilot', icon: 'BP', supported: true },
              { name: 'Custom API', icon: 'API', supported: true },
            ].map((platform) => (
              <div
                key={platform.name}
                className={`p-4 rounded-lg border text-center ${
                  platform.supported
                    ? 'border-gray-600 text-gray-300'
                    : 'border-gray-700 text-gray-500'
                }`}
              >
                <div className="text-2xl font-bold mb-2">{platform.icon}</div>
                <p className="text-sm">{platform.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add Connection Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Add New Connection</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Platform</label>
                <select
                  value={newConnection.platform}
                  onChange={(e) => setNewConnection({...newConnection, platform: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                >
                  <option>MetaTrader 5</option>
                  <option>MetaTrader 4</option>
                  <option>cTrader</option>
                  <option>FIX Protocol</option>
                  <option>Centroid</option>
                  <option>FX Cubic</option>
                  <option>BrokerPilot</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Connection Name</label>
                <input
                  type="text"
                  placeholder="e.g., Production MT5"
                  value={newConnection.name}
                  onChange={(e) => setNewConnection({...newConnection, name: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Server Address</label>
                <input
                  type="text"
                  placeholder="e.g., mt5.broker.com:443"
                  value={newConnection.server}
                  onChange={(e) => setNewConnection({...newConnection, server: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Manager Login</label>
                <input
                  type="text"
                  placeholder="Manager account login"
                  value={newConnection.login}
                  onChange={(e) => setNewConnection({...newConnection, login: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={newConnection.password}
                  onChange={(e) => setNewConnection({...newConnection, password: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={handleAddConnection}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                Add Connection
              </button>
              <button
                onClick={() => setShowAddModal(false)}
                className="flex-1 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}