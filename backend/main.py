from fastapi import FastAPI, Depends, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import os
from typing import Optional

# Multi-tenant imports
from .database import get_db, get_tenant_db
from .models import Tenant, User, Report
from .auth import get_current_tenant, get_current_user
from .routers import reports, connections, monitoring

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("Starting Veles API...")
    yield
    # Shutdown
    print("Shutting down...")

app = FastAPI(
    title="Veles Risk Management API",
    version="1.0.0",
    lifespan=lifespan
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://veles.solutions", "http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Middleware for tenant isolation
@app.middleware("http")
async def tenant_isolation_middleware(request: Request, call_next):
    # Extract tenant from subdomain or header
    host = request.headers.get("host", "")
    
    # For subdomain-based tenancy: client1.api.veles.solutions
    if ".api.veles.solutions" in host:
        tenant_slug = host.split(".")[0]
        request.state.tenant_slug = tenant_slug
    # For header-based tenancy
    elif "X-Tenant-ID" in request.headers:
        request.state.tenant_id = request.headers["X-Tenant-ID"]
    
    response = await call_next(request)
    return response

# Health check
@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "veles-api"}

# Tenant info endpoint
@app.get("/api/tenant/info")
async def get_tenant_info(tenant: Tenant = Depends(get_current_tenant)):
    return {
        "id": tenant.id,
        "name": tenant.name,
        "plan": tenant.subscription_plan,
        "limits": {
            "servers": tenant.max_servers,
            "accounts": tenant.max_accounts,
            "reports_per_month": tenant.max_reports
        },
        "usage": {
            "servers": tenant.current_servers,
            "accounts": tenant.current_accounts,
            "reports_this_month": tenant.reports_this_month
        }
    }

# Include routers with tenant isolation
app.include_router(
    reports.router,
    prefix="/api/reports",
    tags=["reports"],
    dependencies=[Depends(get_current_tenant)]
)

app.include_router(
    connections.router,
    prefix="/api/connections",
    tags=["connections"],
    dependencies=[Depends(get_current_tenant)]
)

app.include_router(
    monitoring.router,
    prefix="/api/monitoring",
    tags=["monitoring"],
    dependencies=[Depends(get_current_tenant)]
)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)