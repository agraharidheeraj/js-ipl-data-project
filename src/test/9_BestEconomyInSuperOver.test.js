const bestEconomyInSuperOvers = require('../server/9_bestEconomyInSuperOvers.js');

test('bestEconomyInSuperOvers finds the bowler with the best economy in super overs', () => {
  const deliveriesData = [
    { is_super_over: '1', bowler: 'BowlerA', total_runs: '4' },
    { is_super_over: '1', bowler: 'BowlerB', total_runs: '8' },
    { is_super_over: '1', bowler: 'BowlerB', total_runs: '7' },
    { is_super_over: '1', bowler: 'BowlerC', total_runs: '10' },
  ];

  const result = bestEconomyInSuperOvers(deliveriesData);

  expect(result).toEqual({
    bestEconomyBowler: 'BowlerA',
    bestEconomy: '24.00',
  });
});

test('bestEconomyInSuperOvers handles no super over data', () => {
  const deliveriesData = [
    { is_super_over: '0', bowler: 'BowlerA', total_runs: '6' },
    { is_super_over: '0', bowler: 'BowlerB', total_runs: '8' },
  ];

  const result = bestEconomyInSuperOvers(deliveriesData);


});
