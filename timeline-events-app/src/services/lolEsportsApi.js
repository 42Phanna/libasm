// Mock data for League of Legends eSports matches
// In production, this would be replaced with real API calls

const mockMatches = [
  // LEC - Europe
  {
    id: 1,
    region: 'LEC',
    regionName: 'League of Legends EMEA Championship',
    team1: {
      name: 'G2 Esports',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Fnatic',
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-22T18:00:00Z',
    tournament: 'LEC Winter Split 2025',
    status: 'upcoming',
    bestOf: 3
  },
  {
    id: 2,
    region: 'LEC',
    regionName: 'League of Legends EMEA Championship',
    team1: {
      name: 'MAD Lions',
      logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Team Vitality',
      logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-22T19:30:00Z',
    tournament: 'LEC Winter Split 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // LCS - North America
  {
    id: 3,
    region: 'LCS',
    regionName: 'League of Legends Championship Series',
    team1: {
      name: 'Cloud9',
      logo: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Team Liquid',
      logo: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-23T20:00:00Z',
    tournament: 'LCS Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },
  {
    id: 4,
    region: 'LCS',
    regionName: 'League of Legends Championship Series',
    team1: {
      name: 'FlyQuest',
      logo: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: '100 Thieves',
      logo: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-23T21:30:00Z',
    tournament: 'LCS Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // LCK - Korea
  {
    id: 5,
    region: 'LCK',
    regionName: 'League of Legends Champions Korea',
    team1: {
      name: 'T1',
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Gen.G',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-24T09:00:00Z',
    tournament: 'LCK Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },
  {
    id: 6,
    region: 'LCK',
    regionName: 'League of Legends Champions Korea',
    team1: {
      name: 'DRX',
      logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'KT Rolster',
      logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-24T11:00:00Z',
    tournament: 'LCK Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // LPL - China
  {
    id: 7,
    region: 'LPL',
    regionName: 'League of Legends Pro League',
    team1: {
      name: 'JD Gaming',
      logo: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'EDward Gaming',
      logo: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-24T10:00:00Z',
    tournament: 'LPL Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },
  {
    id: 8,
    region: 'LPL',
    regionName: 'League of Legends Pro League',
    team1: {
      name: 'BiliBili Gaming',
      logo: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Royal Never Give Up',
      logo: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-24T12:00:00Z',
    tournament: 'LPL Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // LLA - Latin America
  {
    id: 9,
    region: 'LLA',
    regionName: 'Liga Latinoamérica',
    team1: {
      name: 'Estral Esports',
      logo: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Infinity Esports',
      logo: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-25T22:00:00Z',
    tournament: 'LLA Opening 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // CBLOL - Brazil
  {
    id: 10,
    region: 'CBLOL',
    regionName: 'Campeonato Brasileiro de League of Legends',
    team1: {
      name: 'LOUD',
      logo: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'paiN Gaming',
      logo: 'https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-25T23:00:00Z',
    tournament: 'CBLOL Split 1 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // LJL - Japan
  {
    id: 11,
    region: 'LJL',
    regionName: 'League of Legends Japan League',
    team1: {
      name: 'DetonatioN FocusMe',
      logo: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'Sengoku Gaming',
      logo: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-26T08:00:00Z',
    tournament: 'LJL Spring 2025',
    status: 'upcoming',
    bestOf: 3
  },

  // PCS - Pacific
  {
    id: 12,
    region: 'PCS',
    regionName: 'Pacific Championship Series',
    team1: {
      name: 'PSG Talon',
      logo: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=100&h=100&fit=crop',
      score: null
    },
    team2: {
      name: 'CTBC Flying Oyster',
      logo: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=100&h=100&fit=crop',
      score: null
    },
    date: '2025-11-26T10:00:00Z',
    tournament: 'PCS Spring 2025',
    status: 'upcoming',
    bestOf: 3
  }
];

// Simulates an API call to fetch LoL eSports matches
export const fetchLoLMatches = async (region = null) => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let matches = [...mockMatches];

  // Filter by region if specified
  if (region && region !== 'ALL') {
    matches = matches.filter(match => match.region === region);
  }

  // Sort by date
  matches.sort((a, b) => new Date(a.date) - new Date(b.date));

  return {
    success: true,
    data: matches,
    regions: getRegions()
  };
};

// Get all available regions
export const getRegions = () => {
  return [
    { code: 'ALL', name: 'Toutes les régions' },
    { code: 'LEC', name: 'LEC - Europe' },
    { code: 'LCS', name: 'LCS - Amérique du Nord' },
    { code: 'LCK', name: 'LCK - Corée' },
    { code: 'LPL', name: 'LPL - Chine' },
    { code: 'LLA', name: 'LLA - Amérique Latine' },
    { code: 'CBLOL', name: 'CBLOL - Brésil' },
    { code: 'LJL', name: 'LJL - Japon' },
    { code: 'PCS', name: 'PCS - Pacifique' }
  ];
};

// Format date for display
export const formatMatchDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return date.toLocaleDateString('fr-FR', options);
};

// Get time until match
export const getTimeUntilMatch = (dateString) => {
  const now = new Date();
  const matchDate = new Date(dateString);
  const diff = matchDate - now;

  if (diff < 0) return 'En cours ou terminé';

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  if (days > 0) return `Dans ${days}j ${hours}h`;
  if (hours > 0) return `Dans ${hours}h ${minutes}min`;
  return `Dans ${minutes}min`;
};
