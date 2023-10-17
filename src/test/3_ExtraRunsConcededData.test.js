const calculateExtraRunsConceded = require('../server/3_ExtraRunsConcededData.js');

const matches = [
  { id: '536', season: '2017' },
  { id: '577', season: '2016' },
  { id: '579', season: '2016' },
  { id: '581', season: '2016' },
  { id: '582', season: '2016' },
  { id: '585', season: '2016' },
  { id: '636', season: '2016' },
];

const deliveries = [
  { match_id: '536', bowling_team: 'CSK', extra_runs: '10' },
  { match_id: '577', bowling_team: 'CSK', extra_runs: '5' },
  { match_id: '579', bowling_team: 'MI', extra_runs: '8' },
  { match_id: '581', bowling_team: 'RCB', extra_runs: '7' },
  { match_id: '582', bowling_team: 'RCB', extra_runs: '5' },
  { match_id: '585', bowling_team: 'SRH', extra_runs: '3' },
  { match_id: '636', bowling_team: 'CSK', extra_runs: '9' },
];

test('calculateExtraRunsConceded calculates extra runs conceded per team in 2016', () => {
  const result = calculateExtraRunsConceded(matches, deliveries);

  expect(result).toEqual({
    'CSK': 14,
    'MI': 8,
    'RCB': 12,
    'SRH': 3,
  });
});

test('calculateExtraRunsConceded handles no data for the year 2016', () => {
  const matches = [
    { id: '1', season: '2015' },
    { id: '2', season: '2017' },
  ];

  const deliveries = [
    { match_id: '1', bowling_team: 'Mumbai Indians', extra_runs: '2' },
    { match_id: '2', bowling_team: 'Kolkata Knight Riders', extra_runs: '1' },
  ];

  const result = calculateExtraRunsConceded(matches, deliveries);

  expect(result).toEqual({});
});
