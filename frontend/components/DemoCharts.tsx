import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// Fake data generator
const generateFakeData = () => {
  // Suspicious clients data
  const suspiciousClientsData = [
    { month: 'January', detected: 45, verified: 42, confirmed: 38 },
    { month: 'February', detected: 52, verified: 48, confirmed: 41 },
    { month: 'March', detected: 61, verified: 58, confirmed: 52 },
    { month: 'April', detected: 68, verified: 64, confirmed: 57 },
    { month: 'May', detected: 75, verified: 71, confirmed: 63 },
    { month: 'June', detected: 83, verified: 79, confirmed: 72 },
  ];

  // Risk analysis by server
  const riskByServer = [
    { server: 'MT5-PRO', high: 12, medium: 25, low: 45, normal: 167 },
    { server: 'MT5-ECN', high: 8, medium: 18, low: 38, normal: 142 },
    { server: 'MT5-DEMO', high: 3, medium: 12, low: 28, normal: 89 },
    { server: 'MT5-PRIME', high: 15, medium: 32, low: 52, normal: 201 },
  ];

  // Detection efficiency
  const detectionEfficiency = [
    { name: 'False Positives', value: 12, color: '#6366f1' },
    { name: 'Confirmed Threats', value: 73, color: '#8b5cf6' },
    { name: 'Pending Review', value: 15, color: '#a78bfa' },
  ];

  // Activity dynamics
  const activityDynamics = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    activity: Math.floor(Math.random() * 100) + 20,
    suspicious: Math.floor(Math.random() * 20) + 5,
  }));

  // Violation types
  const violationTypes = [
    { type: 'Manipulation', count: 42 },
    { type: 'Arbitrage', count: 38 },
    { type: 'Scalping', count: 31 },
    { type: 'Martingale', count: 27 },
    { type: 'Other', count: 19 },
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
          Suspicious Client Detection Dynamics
        </h3>
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
          Risk Distribution by Trading Servers
        </h3>
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
            <Bar dataKey="normal" stackId="a" fill="#1f2937" animationDuration={1400} name="Normal" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Detection system efficiency */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <h3 className="text-lg font-semibold mb-4 text-white">
          Detection System Efficiency
        </h3>
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
          24-Hour Activity Monitoring
        </h3>
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