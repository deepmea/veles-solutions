from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List, Optional
import uvicorn

from database import get_db, init_db
from models import Match, Team, League, MatchStatistics, Prediction
from schemas import (
    MatchResponse, MatchCreate, 
    TeamResponse, TeamCreate,
    LeagueResponse, LeagueCreate,
    PredictionResponse, PredictionCreate
)

app = FastAPI(
    title="Football Predictions API",
    description="API для прогнозов футбольных матчей",
    version="1.0.0"
)

security = HTTPBearer()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    init_db()

@app.get("/")
async def root():
    return {"message": "Football Predictions API", "version": "1.0.0"}

# Teams endpoints
@app.get("/teams", response_model=List[TeamResponse])
async def get_teams(db: Session = Depends(get_db)):
    teams = db.query(Team).all()
    return teams

@app.post("/teams", response_model=TeamResponse)
async def create_team(team: TeamCreate, db: Session = Depends(get_db)):
    db_team = Team(**team.dict())
    db.add(db_team)
    db.commit()
    db.refresh(db_team)
    return db_team

# Leagues endpoints
@app.get("/leagues", response_model=List[LeagueResponse])
async def get_leagues(db: Session = Depends(get_db)):
    leagues = db.query(League).all()
    return leagues

@app.post("/leagues", response_model=LeagueResponse)
async def create_league(league: LeagueCreate, db: Session = Depends(get_db)):
    db_league = League(**league.dict())
    db.add(db_league)
    db.commit()
    db.refresh(db_league)
    return db_league

# Matches endpoints
@app.get("/matches", response_model=List[MatchResponse])
async def get_matches(
    limit: int = 100,
    skip: int = 0,
    league_id: Optional[int] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Match)
    if league_id:
        query = query.filter(Match.league_id == league_id)
    matches = query.offset(skip).limit(limit).all()
    return matches

@app.get("/matches/{match_id}", response_model=MatchResponse)
async def get_match(match_id: int, db: Session = Depends(get_db)):
    match = db.query(Match).filter(Match.id == match_id).first()
    if not match:
        raise HTTPException(status_code=404, detail="Match not found")
    return match

@app.post("/matches", response_model=MatchResponse)
async def create_match(match: MatchCreate, db: Session = Depends(get_db)):
    db_match = Match(**match.dict())
    db.add(db_match)
    db.commit()
    db.refresh(db_match)
    return db_match

# Predictions endpoints
@app.get("/predictions", response_model=List[PredictionResponse])
async def get_predictions(
    match_id: Optional[int] = None,
    prediction_type: Optional[str] = None,
    db: Session = Depends(get_db)
):
    query = db.query(Prediction)
    if match_id:
        query = query.filter(Prediction.match_id == match_id)
    if prediction_type:
        query = query.filter(Prediction.prediction_type == prediction_type)
    predictions = query.all()
    return predictions

@app.post("/predictions", response_model=PredictionResponse)
async def create_prediction(prediction: PredictionCreate, db: Session = Depends(get_db)):
    db_prediction = Prediction(**prediction.dict())
    db.add(db_prediction)
    db.commit()
    db.refresh(db_prediction)
    return db_prediction

# Stats endpoints
@app.get("/stats/teams/{team_id}")
async def get_team_stats(team_id: int, db: Session = Depends(get_db)):
    team = db.query(Team).filter(Team.id == team_id).first()
    if not team:
        raise HTTPException(status_code=404, detail="Team not found")
    
    home_matches = db.query(Match).filter(Match.home_team_id == team_id).all()
    away_matches = db.query(Match).filter(Match.away_team_id == team_id).all()
    
    total_matches = len(home_matches) + len(away_matches)
    home_wins = len([m for m in home_matches if m.home_goals > m.away_goals])
    away_wins = len([m for m in away_matches if m.away_goals > m.home_goals])
    draws = len([m for m in home_matches if m.home_goals == m.away_goals]) + \
            len([m for m in away_matches if m.away_goals == m.home_goals])
    
    return {
        "team": team.name,
        "total_matches": total_matches,
        "wins": home_wins + away_wins,
        "draws": draws,
        "losses": total_matches - (home_wins + away_wins + draws),
        "home_matches": len(home_matches),
        "away_matches": len(away_matches)
    }

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)