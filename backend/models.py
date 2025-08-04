from sqlalchemy import Column, Integer, String, DateTime, ForeignKey, JSON, Boolean, Enum, Text
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime
import enum

Base = declarative_base()

class SubscriptionPlan(str, enum.Enum):
    STARTER = "starter"
    PROFESSIONAL = "professional"
    ENTERPRISE = "enterprise"

class Tenant(Base):
    __tablename__ = "tenants"
    
    id = Column(Integer, primary_key=True)
    slug = Column(String(100), unique=True, nullable=False)  # subdomain
    name = Column(String(200), nullable=False)
    domain = Column(String(200))  # custom domain if any
    subscription_plan = Column(Enum(SubscriptionPlan), default=SubscriptionPlan.STARTER)
    
    # Limits based on plan
    max_servers = Column(Integer, default=1)
    max_accounts = Column(Integer, default=100)
    max_reports = Column(Integer, default=50)
    
    # Current usage
    current_servers = Column(Integer, default=0)
    current_accounts = Column(Integer, default=0)
    reports_this_month = Column(Integer, default=0)
    
    # Metadata
    created_at = Column(DateTime, default=datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    is_active = Column(Boolean, default=True)
    
    # Relationships
    users = relationship("User", back_populates="tenant")
    connections = relationship("Connection", back_populates="tenant")
    reports = relationship("Report", back_populates="tenant")
    client_accounts = relationship("ClientAccount", back_populates="tenant")

class User(Base):
    __tablename__ = "users"
    
    id = Column(Integer, primary_key=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=False)
    email = Column(String(200), nullable=False)
    hashed_password = Column(String(200))
    full_name = Column(String(200))
    role = Column(String(50), default="user")  # admin, user, viewer
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    tenant = relationship("Tenant", back_populates="users")
    
    # Unique constraint per tenant
    __table_args__ = (
        UniqueConstraint('tenant_id', 'email', name='_tenant_email_uc'),
    )

class Connection(Base):
    __tablename__ = "connections"
    
    id = Column(Integer, primary_key=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=False)
    name = Column(String(200), nullable=False)
    platform = Column(String(50))  # MT4, MT5, FIX, etc
    server = Column(String(200))
    credentials_encrypted = Column(Text)  # Encrypted JSON
    is_active = Column(Boolean, default=True)
    last_sync = Column(DateTime)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    tenant = relationship("Tenant", back_populates="connections")
    client_accounts = relationship("ClientAccount", back_populates="connection")

class ClientAccount(Base):
    __tablename__ = "client_accounts"
    
    id = Column(Integer, primary_key=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=False)
    connection_id = Column(Integer, ForeignKey("connections.id"), nullable=False)
    account_number = Column(String(50), nullable=False)
    name = Column(String(200))
    balance = Column(Integer)  # in cents
    equity = Column(Integer)  # in cents
    margin = Column(Integer)  # in cents
    risk_score = Column(Integer, default=0)  # 0-100
    is_suspicious = Column(Boolean, default=False)
    last_activity = Column(DateTime)
    metadata = Column(JSON)  # Additional data from trading platform
    
    # Relationships
    tenant = relationship("Tenant", back_populates="client_accounts")
    connection = relationship("Connection", back_populates="client_accounts")
    
    # Unique constraint per tenant
    __table_args__ = (
        UniqueConstraint('tenant_id', 'account_number', name='_tenant_account_uc'),
    )

class Report(Base):
    __tablename__ = "reports"
    
    id = Column(Integer, primary_key=True)
    tenant_id = Column(Integer, ForeignKey("tenants.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    type = Column(String(50))  # risk, activity, compliance, etc
    status = Column(String(50), default="pending")  # pending, generating, completed, failed
    file_url = Column(String(500))
    parameters = Column(JSON)  # Report generation parameters
    error_message = Column(Text)
    created_at = Column(DateTime, default=datetime.utcnow)
    completed_at = Column(DateTime)
    
    # Relationships
    tenant = relationship("Tenant", back_populates="reports")
    user = relationship("User")