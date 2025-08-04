import pandas as pd
from sqlalchemy.orm import Session
from database import SessionLocal
from models import Team, League, Match, MatchStatistics
from datetime import datetime
import os

class DataImporter:
    def __init__(self):
        self.db = SessionLocal()
    
    def import_csv_data(self, csv_file: str):
        """Import data from CSV file"""
        try:
            if not os.path.exists(csv_file):
                print(f"[ERROR] Файл {csv_file} не найден")
                return
            
            # Read CSV
            df = pd.read_csv(csv_file)
            print(f"[INFO] Загружено {len(df)} записей из CSV")
            
            # Import leagues
            leagues = df['League'].unique()
            for league in leagues:
                existing = self.db.query(League).filter(League.name == league).first()
                if not existing:
                    db_league = League(name=league)
                    self.db.add(db_league)
            
            # Import teams
            teams = set(df['HomeTeam'].unique()) | set(df['AwayTeam'].unique())
            for team in teams:
                existing = self.db.query(Team).filter(Team.name == team).first()
                if not existing:
                    db_team = Team(name=team)
                    self.db.add(db_team)
            
            self.db.commit()
            
            # Get team and league IDs
            team_ids = {team.name: team.id for team in self.db.query(Team).all()}
            league_ids = {league.name: league.id for league in self.db.query(League).all()}
            
            # Import matches
            imported = 0
            for _, row in df.iterrows():
                try:
                    # Parse date
                    date_obj = pd.to_datetime(row['Date'], format='%d/%m/%Y').date()
                    
                    # Check if match already exists
                    existing = self.db.query(Match).filter(
                        Match.date == date_obj,
                        Match.home_team_id == team_ids[row['HomeTeam']],
                        Match.away_team_id == team_ids[row['AwayTeam']]
                    ).first()
                    
                    if existing:
                        continue
                    
                    # Create match
                    match = Match(
                        date=date_obj,
                        season=row['Season'],
                        league_id=league_ids[row['League']],
                        home_team_id=team_ids[row['HomeTeam']],
                        away_team_id=team_ids[row['AwayTeam']],
                        home_goals=int(row['FTHG']) if pd.notna(row['FTHG']) else None,
                        away_goals=int(row['FTAG']) if pd.notna(row['FTAG']) else None,
                        home_goals_ht=int(row['HTHG']) if pd.notna(row['HTHG']) else None,
                        away_goals_ht=int(row['HTAG']) if pd.notna(row['HTAG']) else None
                    )
                    
                    self.db.add(match)
                    self.db.flush()  # Get the match ID
                    
                    # Add statistics if available
                    statistics = MatchStatistics(
                        match_id=match.id,
                        home_shots=int(row['HS']) if pd.notna(row.get('HS')) else None,
                        away_shots=int(row['AS']) if pd.notna(row.get('AS')) else None,
                        home_shots_target=int(row['HST']) if pd.notna(row.get('HST')) else None,
                        away_shots_target=int(row['AST']) if pd.notna(row.get('AST')) else None,
                        home_corners=int(row['HC']) if pd.notna(row.get('HC')) else None,
                        away_corners=int(row['AC']) if pd.notna(row.get('AC')) else None,
                        home_fouls=int(row['HF']) if pd.notna(row.get('HF')) else None,
                        away_fouls=int(row['AF']) if pd.notna(row.get('AF')) else None,
                        home_yellow=int(row['HY']) if pd.notna(row.get('HY')) else None,
                        away_yellow=int(row['AY']) if pd.notna(row.get('AY')) else None,
                        home_red=int(row['HR']) if pd.notna(row.get('HR')) else None,
                        away_red=int(row['AR']) if pd.notna(row.get('AR')) else None
                    )
                    
                    self.db.add(statistics)
                    imported += 1
                    
                except Exception as e:
                    print(f"[WARNING] Ошибка при импорте строки: {e}")
                    continue
            
            self.db.commit()
            print(f"[OK] Импортировано {imported} матчей в базу данных")
            
        except Exception as e:
            print(f"[ERROR] Ошибка при импорте данных: {e}")
            self.db.rollback()
        finally:
            self.db.close()
    
    def check_data(self):
        """Check imported data"""
        try:
            teams_count = self.db.query(Team).count()
            leagues_count = self.db.query(League).count()
            matches_count = self.db.query(Match).count()
            stats_count = self.db.query(MatchStatistics).count()
            
            print("\n=== СТАТИСТИКА БАЗЫ ДАННЫХ ===")
            print(f"Команд: {teams_count}")
            print(f"Лиг: {leagues_count}")
            print(f"Матчей: {matches_count}")
            print(f"Записей статистики: {stats_count}")
            
        except Exception as e:
            print(f"[ERROR] Ошибка при проверке данных: {e}")
        finally:
            self.db.close()

def main():
    # Initialize database
    from database import init_db
    init_db()
    
    # Import data
    importer = DataImporter()
    csv_file = r"C:\Users\Администратор\OneDrive\PycharmProjects\rates\data\combined_football_data.csv"
    
    print("=== ИМПОРТ ДАННЫХ ===")
    importer.import_csv_data(csv_file)
    
    # Check results
    importer = DataImporter()
    importer.check_data()
    
    print("\n[OK] База данных готова к использованию!")

if __name__ == "__main__":
    main()