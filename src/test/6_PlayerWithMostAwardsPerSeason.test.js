const findPlayerWithMostPOMAwards = require('../server/6_PlayerWithMostPOMAwards.js'); 

test('returns the player with the most Player of the Match awards by season', () => {
  const sampleData = [
    { season: '2008', player_of_match: 'SE Marsh' },
    { season: '2008', player_of_match: 'SR Tendulkar' },
    { season: '2008', player_of_match: 'SE Marsh' },
    { season: '2009', player_of_match: 'YK Pathan' },
    { season: '2009', player_of_match: 'YK Pathan' },
    { season: '2009', player_of_match: 'AB de Villiers' },
  ];

  const result = findPlayerWithMostPOMAwards(sampleData);

  const expectedPlayerWithMostAwards = {
    "2008": "SE Marsh",
    "2009": "YK Pathan",
  };

  expect(result).toEqual(expectedPlayerWithMostAwards);
});

it('handles empty data', () => {
  const emptyData = [];
  const result = findPlayerWithMostPOMAwards(emptyData);

  expect(result).toEqual({});
});
