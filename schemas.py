from pydantic import BaseModel
from typing import Optional, List
from datetime import date, datetime

# Team schemas
class TeamBase(BaseModel):
    name: str
    country: Optional[str] = None

class TeamCreate(TeamBase):
    pass

class TeamResponse(TeamBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# League schemas
class LeagueBase(BaseModel):
    name: str
    country: Optional[str] = None

class LeagueCreate(LeagueBase):
    pass

class LeagueResponse(LeagueBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Match schemas
class MatchBase(BaseModel):
    date: date
    season: Optional[str] = None
    league_id: int
    home_team_id: int
    away_team_id: int
    home_goals: Optional[int] = None
    away_goals: Optional[int] = None
    home_goals_ht: Optional[int] = None
    away_goals_ht: Optional[int] = None

class MatchCreate(MatchBase):
    pass

class MatchResponse(MatchBase):
    id: int
    created_at: datetime
    league: Optional[LeagueResponse] = None
    home_team: Optional[TeamResponse] = None
    away_team: Optional[TeamResponse] = None
    
    class Config:
        from_attributes = True

# Match Statistics schemas
class MatchStatisticsBase(BaseModel):
    match_id: int
    home_shots: Optional[int] = None
    away_shots: Optional[int] = None
    home_shots_target: Optional[int] = None
    away_shots_target: Optional[int] = None
    home_corners: Optional[int] = None
    away_corners: Optional[int] = None
    home_fouls: Optional[int] = None
    away_fouls: Optional[int] = None
    home_yellow: Optional[int] = None
    away_yellow: Optional[int] = None
    home_red: Optional[int] = None
    away_red: Optional[int] = None

class MatchStatisticsCreate(MatchStatisticsBase):
    pass

class MatchStatisticsResponse(MatchStatisticsBase):
    id: int
    created_at: datetime
    
    class Config:
        from_attributes = True

# Prediction schemas
class PredictionBase(BaseModel):
    match_id: int
    prediction_type: str
    predicted_value: float
    actual_value: Optional[float] = None
    confidence: Optional[float] = None
    model_version: Optional[str] = None

class PredictionCreate(PredictionBase):
    pass

class PredictionResponse(PredictionBase):
    id: int
    created_at: datetime
    match: Optional[MatchResponse] = None
    
    class Config:
        from_attributes = True