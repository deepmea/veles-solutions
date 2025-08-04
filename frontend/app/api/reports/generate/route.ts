import { NextRequest, NextResponse } from 'next/server';

// Mock report generation - in production this would call your backend
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { reportType, clientId, dateRange, format } = body;

    // In production, this would call your FastAPI backend
    // const response = await fetch(`${process.env.API_URL}/api/reports/generate`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ reportType, clientId, dateRange, format })
    // });

    // Mock response for demo
    const reportId = `REP-${Date.now()}`;
    
    // Simulate report generation delay
    setTimeout(() => {
      // In production, this would trigger background job
      console.log(`Generating report ${reportId}...`);
    }, 100);

    return NextResponse.json({
      success: true,
      reportId,
      status: 'generating',
      estimatedTime: 30, // seconds
      message: 'Report generation started'
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    );
  }
}

// Get report status
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const reportId = searchParams.get('reportId');

  if (!reportId) {
    return NextResponse.json(
      { error: 'Report ID required' },
      { status: 400 }
    );
  }

  // Mock status check - in production would check backend
  const mockStatus = Math.random() > 0.3 ? 'completed' : 'generating';
  
  return NextResponse.json({
    reportId,
    status: mockStatus,
    progress: mockStatus === 'completed' ? 100 : Math.floor(Math.random() * 80) + 20,
    downloadUrl: mockStatus === 'completed' ? `/api/reports/download?id=${reportId}` : null
  });
}