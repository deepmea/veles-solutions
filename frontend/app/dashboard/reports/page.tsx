'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

interface Report {
  id: string;
  name: string;
  type: string;
  status: 'completed' | 'generating' | 'failed';
  createdAt: string;
  size: string;
  downloadUrl?: string;
}

export default function ReportsPage() {
  const router = useRouter();
  const [reports, setReports] = useState<Report[]>([
    {
      id: 'rep-1',
      name: 'Daily Risk Analysis',
      type: 'Risk Report',
      status: 'completed',
      createdAt: '2025-08-04 14:30',
      size: '2.4 MB',
      downloadUrl: '/api/reports/download?id=rep-1'
    },
    {
      id: 'rep-2',
      name: 'Weekly Activity Summary',
      type: 'Activity Report',
      status: 'completed',
      createdAt: '2025-08-03 09:15',
      size: '1.8 MB',
      downloadUrl: '/api/reports/download?id=rep-2'
    },
    {
      id: 'rep-3',
      name: 'Monthly Compliance Report',
      type: 'Compliance',
      status: 'generating',
      createdAt: '2025-08-04 18:45',
      size: '-'
    }
  ]);
  const [showGenerateModal, setShowGenerateModal] = useState(false);
  const [reportConfig, setReportConfig] = useState({
    type: 'risk',
    period: '7d',
    format: 'pdf',
    includeCharts: true,
    includeDetails: true
  });

  const generateReport = async () => {
    const newReport: Report = {
      id: `rep-${Date.now()}`,
      name: `${reportConfig.type === 'risk' ? 'Risk Analysis' : 'Activity Report'} - ${new Date().toLocaleDateString()}`,
      type: reportConfig.type === 'risk' ? 'Risk Report' : 'Activity Report',
      status: 'generating',
      createdAt: new Date().toLocaleString(),
      size: '-'
    };
    
    setReports([newReport, ...reports]);
    setShowGenerateModal(false);
    
    // Simulate report generation
    setTimeout(() => {
      setReports(prev => prev.map(r => 
        r.id === newReport.id 
          ? { ...r, status: 'completed' as const, size: '1.2 MB', downloadUrl: `/api/reports/download?id=${r.id}` }
          : r
      ));
    }, 5000);
  };

  const downloadReport = (url: string) => {
    window.open(url, '_blank');
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
              <h1 className="text-2xl font-bold text-white">Reports</h1>
            </div>
            <button
              onClick={() => setShowGenerateModal(true)}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
            >
              + Generate Report
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Report Templates */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { name: 'Risk Analysis', icon: '📊', description: 'Comprehensive risk assessment' },
            { name: 'Activity Report', icon: '📈', description: 'Trading activity overview' },
            { name: 'Compliance', icon: '📋', description: 'Regulatory compliance check' },
            { name: 'Custom Report', icon: '⚙️', description: 'Build your own report' }
          ].map((template, index) => (
            <motion.button
              key={template.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setShowGenerateModal(true)}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-all text-left"
            >
              <div className="text-3xl mb-3">{template.icon}</div>
              <h3 className="text-white font-semibold">{template.name}</h3>
              <p className="text-gray-400 text-sm mt-1">{template.description}</p>
            </motion.button>
          ))}
        </div>

        {/* Recent Reports */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-800 rounded-xl border border-gray-700"
        >
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold text-white">Recent Reports</h2>
          </div>
          
          <div className="divide-y divide-gray-700">
            {reports.map((report) => (
              <div key={report.id} className="p-6 hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      report.status === 'completed' ? 'bg-green-900/50' :
                      report.status === 'generating' ? 'bg-blue-900/50' :
                      'bg-red-900/50'
                    }`}>
                      {report.status === 'completed' ? '✓' :
                       report.status === 'generating' ? '⟳' : '✗'}
                    </div>
                    <div>
                      <h3 className="text-white font-medium">{report.name}</h3>
                      <p className="text-gray-400 text-sm">
                        {report.type} • {report.createdAt} • {report.size}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    {report.status === 'completed' && report.downloadUrl ? (
                      <>
                        <button
                          onClick={() => downloadReport(report.downloadUrl!)}
                          className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                        >
                          Download
                        </button>
                        <button className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                          Share
                        </button>
                      </>
                    ) : report.status === 'generating' ? (
                      <div className="flex items-center space-x-2 text-blue-400">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Generating...</span>
                      </div>
                    ) : (
                      <button className="px-4 py-2 bg-red-900/50 text-red-400 rounded-lg">
                        Retry
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Generate Report Modal */}
      {showGenerateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-800 rounded-xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-semibold text-white mb-4">Generate New Report</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Report Type</label>
                <select
                  value={reportConfig.type}
                  onChange={(e) => setReportConfig({...reportConfig, type: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="risk">Risk Analysis</option>
                  <option value="activity">Activity Report</option>
                  <option value="compliance">Compliance Report</option>
                  <option value="custom">Custom Report</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Time Period</label>
                <select
                  value={reportConfig.period}
                  onChange={(e) => setReportConfig({...reportConfig, period: e.target.value})}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                  <option value="90d">Last 90 Days</option>
                  <option value="custom">Custom Range</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Format</label>
                <div className="grid grid-cols-3 gap-2">
                  {['pdf', 'excel', 'csv'].map((format) => (
                    <button
                      key={format}
                      onClick={() => setReportConfig({...reportConfig, format})}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        reportConfig.format === format
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {format.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={reportConfig.includeCharts}
                    onChange={(e) => setReportConfig({...reportConfig, includeCharts: e.target.checked})}
                    className="rounded bg-gray-700 border-gray-600"
                  />
                  <span className="text-gray-300">Include charts and visualizations</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={reportConfig.includeDetails}
                    onChange={(e) => setReportConfig({...reportConfig, includeDetails: e.target.checked})}
                    className="rounded bg-gray-700 border-gray-600"
                  />
                  <span className="text-gray-300">Include detailed transaction data</span>
                </label>
              </div>
            </div>
            
            <div className="flex space-x-3 mt-6">
              <button
                onClick={generateReport}
                className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 transition-all"
              >
                Generate Report
              </button>
              <button
                onClick={() => setShowGenerateModal(false)}
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