import { formatMatchDate, getTimeUntilMatch } from '../services/lolEsportsApi';
import './MatchCard.css';

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <div className="match-header">
        <div className="match-region-badge" style={{ backgroundColor: getRegionColor(match.region) }}>
          {match.region}
        </div>
        <div className="match-tournament">{match.tournament}</div>
      </div>

      <div className="match-teams">
        <div className="team team-left">
          <div className="team-logo-container">
            <img src={match.team1.logo} alt={match.team1.name} className="team-logo" />
          </div>
          <div className="team-name">{match.team1.name}</div>
          {match.team1.score !== null && (
            <div className="team-score">{match.team1.score}</div>
          )}
        </div>

        <div className="match-vs">
          <span className="vs-text">VS</span>
          <div className="best-of">Bo{match.bestOf}</div>
        </div>

        <div className="team team-right">
          {match.team2.score !== null && (
            <div className="team-score">{match.team2.score}</div>
          )}
          <div className="team-name">{match.team2.name}</div>
          <div className="team-logo-container">
            <img src={match.team2.logo} alt={match.team2.name} className="team-logo" />
          </div>
        </div>
      </div>

      <div className="match-footer">
        <div className="match-date">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {formatMatchDate(match.date)}
        </div>
        <div className="match-countdown">
          <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {getTimeUntilMatch(match.date)}
        </div>
      </div>
    </div>
  );
};

// Helper function to get region color
const getRegionColor = (region) => {
  const colors = {
    'LEC': '#0E4C92',
    'LCS': '#B8860B',
    'LCK': '#DC143C',
    'LPL': '#C8102E',
    'LLA': '#00A859',
    'CBLOL': '#00A859',
    'LJL': '#BC002D',
    'PCS': '#FF6B35'
  };
  return colors[region] || '#667eea';
};

export default MatchCard;
