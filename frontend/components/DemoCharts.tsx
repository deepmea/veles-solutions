import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// Fake data generator
const generateFakeData = () => {
  // Suspicious clients data - showing improvement after Veles implementation
  const suspiciousClientsData = [
    { month: 'Jan (Pre)', detected: 85, verified: 79, confirmed: 72, period: 'Before Veles' },
    { month: 'Feb (Pre)', detected: 92, verified: 88, confirmed: 81, period: 'Before Veles' },
    { month: 'Mar (Impl)', detected: 78, verified: 71, confirmed: 63, period: 'Implementation' },
    { month: 'Apr', detected: 65, verified: 58, confirmed: 48, period: 'After Veles' },
    { month: 'May', detected: 52, verified: 45, confirmed: 35, period: 'After Veles' },
    { month: 'Jun', detected: 41, verified: 35, confirmed: 26, period: 'After Veles' },
  ];

  // Risk analysis by server - improved after Veles
  const riskByServer = [
    { server: 'Trading-PRO', high: 2, medium: 8, low: 18, normal: 224 },
    { server: 'Trading-ECN', high: 1, medium: 5, low: 12, normal: 188 },
    { server: 'Trading-DEMO', high: 0, medium: 2, low: 6, normal: 124 },
    { server: 'Trading-PRIME', high: 3, medium: 9, low: 21, normal: 267 },
  ];

  // Detection efficiency - improved with Veles
  const detectionEfficiency = [
    { name: 'False Positives', value: 5, color: '#ef4444' },
    { name: 'Clean Clients', value: 87, color: '#10b981' },
    { name: 'Under Review', value: 8, color: '#f59e0b' },
  ];

  // Activity dynamics - showing decreased suspicious activity
  const activityDynamics = Array.from({ length: 24 }, (_, i) => {
    // Higher suspicious activity in early hours, then decreasing after Veles monitoring
    const baseSuspicious = i < 8 ? 15 : (i < 16 ? 8 : 4);
    const variation = Math.floor(Math.random() * 3);
    return {
      time: `${i}:00`,
      activity: Math.floor(Math.random() * 80) + 40,
      suspicious: Math.max(1, baseSuspicious + variation - Math.floor(i / 4)),
    };
  });

  // Violation types - significant reduction after implementation
  const violationTypes = [
    { type: 'Prevented', count: 156, color: '#10b981' },
    { type: 'Manipulation', count: 8, color: '#ef4444' },
    { type: 'Arbitrage', count: 5, color: '#f59e0b' },
    { type: 'Scalping', count: 3, color: '#8b5cf6' },
    { type: 'Other', count: 2, color: '#6b7280' },
  ];

  return {
    suspiciousClientsData,
    riskByServer,
    detectionEfficiency,
    activityDynamics,
    violationTypes,
  };
};

const DemoCharts: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setData(generateFakeData());
    // Update data every 5 seconds for demo
    const interval = setInterval(() => {
      setData(generateFakeData());
      setAnimationKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div className="text-gray-400 text-center p-8">Loading analytics...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Suspicious clients detection dynamics */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Risk Reduction After Veles Implementation
        </h3>
        <p className="text-sm text-gray-400 mb-4">↓ 68% reduction in suspicious activity</p>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.suspiciousClientsData} key={`line-${animationKey}`}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="month" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
              labelStyle={{ color: '#f3f4f6' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="detected" 
              stroke="#818cf8" 
              strokeWidth={2}
              animationDuration={1000}
              dot={{ fill: '#818cf8', r: 4 }}
              name="Detected"
            />
            <Line 
              type="monotone" 
              dataKey="verified" 
              stroke="#a78bfa" 
              strokeWidth={2}
              animationDuration={1200}
              dot={{ fill: '#a78bfa', r: 4 }}
              name="Verified"
            />
            <Line 
              type="monotone" 
              dataKey="confirmed" 
              stroke="#c084fc" 
              strokeWidth={2}
              animationDuration={1400}
              dot={{ fill: '#c084fc', r: 4 }}
              name="Confirmed"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Risk distribution by servers */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Server Risk Status - Post Implementation
        </h3>
        <p className="text-sm text-gray-400 mb-4">↓ 85% reduction in high-risk clients</p>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.riskByServer} key={`bar-${animationKey}`}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="server" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
              labelStyle={{ color: '#f3f4f6' }}
            />
            <Legend />
            <Bar dataKey="high" stackId="a" fill="#dc2626" animationDuration={800} name="High Risk" />
            <Bar dataKey="medium" stackId="a" fill="#f97316" animationDuration={1000} name="Medium Risk" />
            <Bar dataKey="low" stackId="a" fill="#3b82f6" animationDuration={1200} name="Low Risk" />
            <Bar dataKey="normal" stackId="a" fill="#10b981" animationDuration={1400} name="Clean" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detection system efficiency */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">
          System Performance Results
        </h3>
        <p className="text-sm text-gray-400 mb-4">✓ 95% accuracy with minimal false positives</p>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart key={`pie-${animationKey}`}>
            <Pie
              data={data.detectionEfficiency}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={1500}
            >
              {data.detectionEfficiency.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
              labelStyle={{ color: '#f3f4f6' }}
            />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center space-x-4">
          {data.detectionEfficiency.map((item: any) => (
            <div key={item.name} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Real-time activity monitoring */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Suspicious Activity Suppression
        </h3>
        <p className="text-sm text-gray-400 mb-4">↓ Real-time prevention in action</p>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data.activityDynamics} key={`area-${animationKey}`}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="time" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1f2937', border: '1px solid #374151' }}
              labelStyle={{ color: '#f3f4f6' }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="activity" 
              stackId="1" 
              stroke="#6366f1" 
              fill="#6366f1" 
              fillOpacity={0.4}
              animationDuration={1000}
              name="Normal Activity"
            />
            <Area 
              type="monotone" 
              dataKey="suspicious" 
              stackId="1" 
              stroke="#8b5cf6" 
              fill="#8b5cf6" 
              fillOpacity={0.6}
              animationDuration={1200}
              name="Suspicious Activity"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DemoCharts;