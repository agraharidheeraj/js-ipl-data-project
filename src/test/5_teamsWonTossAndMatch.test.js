const findTossWinners = require('../server/5_teamsWonTossAndMatch.js');

test('teamsWonTossAndMatch handles no data', () => {
    const data = [
      { toss_winner: 'MI', winner: 'MI' },
      { toss_winner: 'RCB', winner: 'RCB' },
      { toss_winner: 'KKR', winner: 'KKR' },
      { toss_winner: 'RCB', winner: 'RCB' },
      { toss_winner: 'MI', winner: 'MI' },
    ];

    const result = findTossWinners(data);

    expect(result).toEqual(
        { MI: 2, RCB: 2, KKR: 1 }
        );
  });


