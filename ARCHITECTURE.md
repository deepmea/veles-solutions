# Veles SaaS Architecture

## Overview
Veles is a multi-tenant SaaS platform for risk management in brokerage companies.

## Architecture Components

### 1. Frontend (Next.js) - veles.solutions
- Landing page for marketing
- Client portal (/dashboard)
- Authentication & authorization
- Real-time monitoring dashboards
- Report viewing & download

### 2. Backend API (FastAPI) - api.veles.solutions
- REST API for all operations
- WebSocket for real-time updates
- Multi-tenant data isolation
- Report generation queue
- Integration APIs

### 3. Report Generation Service
- Separate microservice for heavy computations
- Celery + Redis for task queue
- PDF/Excel generation
- Scheduled reports
- Email delivery

### 4. Database (PostgreSQL)
```sql
-- Multi-tenant schema
tenants (
  id, name, domain, subscription_plan, created_at
)

users (
  id, tenant_id, email, role, permissions
)

client_accounts (
  id, tenant_id, account_number, server, risk_score
)

reports (
  id, tenant_id, user_id, type, status, file_url, created_at
)

api_connections (
  id, tenant_id, platform, credentials_encrypted, status
)
```

### 5. Infrastructure
- **Frontend**: Vercel (auto-scaling, CDN, DDoS protection)
- **Backend**: DigitalOcean App Platform or AWS ECS
- **Database**: DigitalOcean Managed PostgreSQL
- **Queue**: Redis (DigitalOcean Managed)
- **Storage**: S3-compatible (DigitalOcean Spaces)
- **Monitoring**: Prometheus + Grafana

## Security Features
1. Row-level security in PostgreSQL
2. JWT tokens with tenant isolation
3. API rate limiting per tenant
4. Encrypted credentials storage
5. Audit logging

## Report Generation Flow
1. User requests report in dashboard
2. Frontend calls API endpoint
3. API creates job in queue
4. Worker picks up job
5. Worker generates report using client data
6. Report saved to S3
7. User notified via WebSocket
8. Report available for download

## Integration Flow
1. Tenant adds MT4/5 credentials
2. System encrypts and stores credentials
3. Background worker connects to MT servers
4. Real-time data streamed to database
5. AI analyzes patterns
6. Alerts sent to dashboard

## Pricing Model
- Starter: $199/mo - 1 server, 100 accounts
- Professional: $499/mo - 5 servers, 1000 accounts  
- Enterprise: $999/mo - Unlimited servers/accounts

## Deployment Steps
1. Deploy PostgreSQL database
2. Deploy Redis queue
3. Deploy FastAPI backend
4. Deploy Celery workers
5. Configure S3 storage
6. Deploy Next.js frontend
7. Setup SSL certificates
8. Configure monitoring