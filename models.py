from sqlalchemy import Column, Integer, String, Date, Float, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from datetime import datetime

Base = declarative_base()

class Team(Base):
    __tablename__ = "teams"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False, index=True)
    country = Column(String(50))
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    home_matches = relationship("Match", foreign_keys="Match.home_team_id", back_populates="home_team")
    away_matches = relationship("Match", foreign_keys="Match.away_team_id", back_populates="away_team")

class League(Base):
    __tablename__ = "leagues"
    
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False, index=True)
    country = Column(String(50))
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    matches = relationship("Match", back_populates="league")

class Match(Base):
    __tablename__ = "matches"
    
    id = Column(Integer, primary_key=True, index=True)
    date = Column(Date, nullable=False, index=True)
    season = Column(String(20))
    league_id = Column(Integer, ForeignKey("leagues.id"))
    home_team_id = Column(Integer, ForeignKey("teams.id"))
    away_team_id = Column(Integer, ForeignKey("teams.id"))
    home_goals = Column(Integer)
    away_goals = Column(Integer)
    home_goals_ht = Column(Integer)
    away_goals_ht = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    league = relationship("League", back_populates="matches")
    home_team = relationship("Team", foreign_keys=[home_team_id], back_populates="home_matches")
    away_team = relationship("Team", foreign_keys=[away_team_id], back_populates="away_matches")
    statistics = relationship("MatchStatistics", back_populates="match", cascade="all, delete-orphan")
    predictions = relationship("Prediction", back_populates="match")

class MatchStatistics(Base):
    __tablename__ = "match_statistics"
    
    id = Column(Integer, primary_key=True, index=True)
    match_id = Column(Integer, ForeignKey("matches.id"))
    home_shots = Column(Integer)
    away_shots = Column(Integer)
    home_shots_target = Column(Integer)
    away_shots_target = Column(Integer)
    home_corners = Column(Integer)
    away_corners = Column(Integer)
    home_fouls = Column(Integer)
    away_fouls = Column(Integer)
    home_yellow = Column(Integer)
    away_yellow = Column(Integer)
    home_red = Column(Integer)
    away_red = Column(Integer)
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    match = relationship("Match", back_populates="statistics")

class Prediction(Base):
    __tablename__ = "predictions"
    
    id = Column(Integer, primary_key=True, index=True)
    match_id = Column(Integer, ForeignKey("matches.id"))
    prediction_type = Column(String(50))  # 'over2.5', 'over1.5', 'btts', etc
    predicted_value = Column(Float)
    actual_value = Column(Float)
    confidence = Column(Float)
    model_version = Column(String(50))
    created_at = Column(DateTime, default=datetime.utcnow)
    
    # Relationships
    match = relationship("Match", back_populates="predictions")