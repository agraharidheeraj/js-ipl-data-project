const getHighestDismissals = require('../server/8_DismissalsByPlayer.js');

const deliveriesData = [
  { player_dismissed: 'Virat Kohli', bowler: 'Bowler X' },
  { player_dismissed: 'Rohit Sharma', bowler: 'Bowler Y' },
  { player_dismissed: 'Virat Kohli', bowler: 'Bowler Z' },
  { player_dismissed: 'Virat Kohli', bowler: 'Bowler X' },
  { player_dismissed: 'MS Dhoni', bowler: 'Bowler Z' },
  { player_dismissed: 'MS Dhoni', bowler: 'Bowler Z' },
];

test('Calculate highest Dismissals', () => {
  const result = getHighestDismissals(deliveriesData);
  console.log(result);
  expect(result).toEqual({
    mostDismissedCombinations: [
      'Virat Kohli dismissed by Bowler X',
      'MS Dhoni dismissed by Bowler Z',
    ],
    maxDismissals: 2,
  });
});
  test('Calculate Other highest Dismissals', () => {
    const emptyDeliveriesData = [
      { player_dismissed: 'Player Virat Kohli', bowler: 'Bowler B' },
      { player_dismissed: 'Player Virat Kohli', bowler: 'Bowler B' },
      { player_dismissed: 'Player Ms Dhoni', bowler: 'Bowler D' },
      { player_dismissed: 'Player Rohit Sharma', bowler: 'Bowler F' },
      { player_dismissed: 'Player Virat Kohli', bowler: 'Bowler B' },
    ];
  
    const result = getHighestDismissals(emptyDeliveriesData);
    console.log(result);
    expect(result).toEqual( {
      mostDismissedCombinations: [ 'Player Virat Kohli dismissed by Bowler B' ],
      maxDismissals: 3
    });
});



