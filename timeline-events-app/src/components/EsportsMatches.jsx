import { useState, useEffect } from 'react';
import MatchCard from './MatchCard';
import { fetchLoLMatches, getRegions } from '../services/lolEsportsApi';
import './EsportsMatches.css';

const EsportsMatches = () => {
  const [matches, setMatches] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const regions = getRegions();

  useEffect(() => {
    loadMatches();
  }, [selectedRegion]);

  const loadMatches = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetchLoLMatches(selectedRegion);
      setMatches(response.data);
    } catch (err) {
      setError('Erreur lors du chargement des matchs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="esports-container">
      <div className="esports-header">
        <h1>Matchs eSport League of Legends</h1>
        <p className="esports-subtitle">Prochains matchs par région</p>
      </div>

      <div className="region-filter">
        <label htmlFor="region-select" className="filter-label">
          Filtrer par région :
        </label>
        <select
          id="region-select"
          className="region-select"
          value={selectedRegion}
          onChange={(e) => setSelectedRegion(e.target.value)}
        >
          {regions.map(region => (
            <option key={region.code} value={region.code}>
              {region.name}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Chargement des matchs...</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p>{error}</p>
          <button onClick={loadMatches} className="retry-button">
            Réessayer
          </button>
        </div>
      )}

      {!loading && !error && (
        <div className="matches-grid">
          {matches.length === 0 ? (
            <div className="no-matches">
              <p>Aucun match trouvé pour cette région.</p>
            </div>
          ) : (
            matches.map(match => (
              <MatchCard key={match.id} match={match} />
            ))
          )}
        </div>
      )}

      <div className="matches-count">
        {!loading && !error && (
          <p>{matches.length} match{matches.length > 1 ? 's' : ''} trouvé{matches.length > 1 ? 's' : ''}</p>
        )}
      </div>
    </div>
  );
};

export default EsportsMatches;
