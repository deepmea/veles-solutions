import React, { useEffect, useState } from 'react';
import {
  LineChart, Line, AreaChart, Area, BarChart, Bar,
  PieChart, Pie, Cell, ResponsiveContainer,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';

// Генератор фейковых данных
const generateFakeData = () => {
  // Данные по подозрительным клиентам
  const suspiciousClientsData = [
    { month: 'Январь', обнаружено: 45, проверено: 42, подтверждено: 38 },
    { month: 'Февраль', обнаружено: 52, проверено: 48, подтверждено: 41 },
    { month: 'Март', обнаружено: 61, проверено: 58, подтверждено: 52 },
    { month: 'Апрель', обнаружено: 68, проверено: 64, подтверждено: 57 },
    { month: 'Май', обнаружено: 75, проверено: 71, подтверждено: 63 },
    { month: 'Июнь', обнаружено: 83, проверено: 79, подтверждено: 72 },
  ];

  // Риск-анализ по серверам
  const riskByServer = [
    { server: 'MT5-PRO', высокий: 12, средний: 25, низкий: 45, нормальный: 167 },
    { server: 'MT5-ECN', высокий: 8, средний: 18, низкий: 38, нормальный: 142 },
    { server: 'MT5-DEMO', высокий: 3, средний: 12, низкий: 28, нормальный: 89 },
    { server: 'MT5-PRIME', высокий: 15, средний: 32, низкий: 52, нормальный: 201 },
  ];

  // Эффективность обнаружения
  const detectionEfficiency = [
    { name: 'Ложные срабатывания', value: 12, color: '#ef4444' },
    { name: 'Подтвержденные угрозы', value: 73, color: '#10b981' },
    { name: 'Требуют проверки', value: 15, color: '#f59e0b' },
  ];

  // Динамика активности
  const activityDynamics = Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    активность: Math.floor(Math.random() * 100) + 20,
    подозрительная: Math.floor(Math.random() * 20) + 5,
  }));

  // Типы нарушений
  const violationTypes = [
    { type: 'Манипуляции', count: 42 },
    { type: 'Арбитраж', count: 38 },
    { type: 'Скальпинг', count: 31 },
    { type: 'Мартингейл', count: 27 },
    { type: 'Другое', count: 19 },
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
    // Обновляем данные каждые 5 секунд для демонстрации
    const interval = setInterval(() => {
      setData(generateFakeData());
      setAnimationKey(prev => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return <div>Загрузка...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* График обнаружения подозрительных клиентов */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Динамика обнаружения подозрительных клиентов
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data.suspiciousClientsData} key={`line-${animationKey}`}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
              labelStyle={{ color: '#111827' }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="обнаружено" 
              stroke="#ef4444" 
              strokeWidth={2}
              animationDuration={1000}
              dot={{ fill: '#ef4444', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="проверено" 
              stroke="#f59e0b" 
              strokeWidth={2}
              animationDuration={1200}
              dot={{ fill: '#f59e0b', r: 4 }}
            />
            <Line 
              type="monotone" 
              dataKey="подтверждено" 
              stroke="#10b981" 
              strokeWidth={2}
              animationDuration={1400}
              dot={{ fill: '#10b981', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Риск-анализ по серверам */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Распределение рисков по серверам
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data.riskByServer} key={`bar-${animationKey}`}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="server" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
              labelStyle={{ color: '#111827' }}
            />
            <Legend />
            <Bar dataKey="высокий" stackId="a" fill="#ef4444" animationDuration={800} />
            <Bar dataKey="средний" stackId="a" fill="#f59e0b" animationDuration={1000} />
            <Bar dataKey="низкий" stackId="a" fill="#3b82f6" animationDuration={1200} />
            <Bar dataKey="нормальный" stackId="a" fill="#10b981" animationDuration={1400} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Эффективность обнаружения */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Эффективность системы обнаружения
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
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="mt-4 flex justify-center space-x-4">
          {data.detectionEfficiency.map((item: any) => (
            <div key={item.name} className="flex items-center">
              <div 
                className="w-3 h-3 rounded-full mr-2" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Активность в реальном времени */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-800">
          Мониторинг активности (24 часа)
        </h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={data.activityDynamics} key={`area-${animationKey}`}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb' }}
              labelStyle={{ color: '#111827' }}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="активность" 
              stackId="1" 
              stroke="#3b82f6" 
              fill="#3b82f6" 
              fillOpacity={0.6}
              animationDuration={1000}
            />
            <Area 
              type="monotone" 
              dataKey="подозрительная" 
              stackId="1" 
              stroke="#ef4444" 
              fill="#ef4444" 
              fillOpacity={0.8}
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DemoCharts;