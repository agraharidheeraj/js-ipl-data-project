const matchesplayperyear = require('../server/1_MatchesPerYearData.js');

test('matchesplayperyear calculates matches per year correctly', () => {
  const matches = [
    { season: '2020' },
    { season: '2021' },
    { season: '2020' },
    { season: '2022' },
    { season: '2021' },
  ];

  const result = matchesplayperyear(matches);

  expect(result).toEqual({
    '2020': 2,
    '2021': 2,
    '2022': 1,
  });
});

test('matchesplayperyear handles empty input', () => {
  const matches = [];

  const result = matchesplayperyear(matches);

  expect(result).toEqual({});
});

test('matchesplayperyear handles input with missing season data', () => {
  const matches = [
    { season: '2020' },
    { season: '2021' },
    { team: 'TeamA' }, 
  ];

  const result = matchesplayperyear(matches);

  expect(result).toEqual({
    '2020': 1,
    '2021': 1,
  });
});
