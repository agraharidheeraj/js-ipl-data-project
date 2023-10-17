const findTop10EconomicalBowlersIn2015BasedOnDeliveries = require('../server/4_EconomicalBowlers.js');

test('Find the Top 10 Economical Bowlers in 2015', () => {
const matchesData = [
    { id: '1', season: '2015' },
    { id: '2', season: '2015' },
    { id: '3', season: '2015' },
    { id: '4', season: '2016' },
  ];
  
  const deliveriesData = [
    { match_id: '1', bowler: 'Bowler1', wide_runs: '1', noball_runs: '0', total_runs: '1' },
    { match_id: '1', bowler: 'Bowler2', wide_runs: '0', noball_runs: '0', total_runs: '2' },
    { match_id: '1', bowler: 'Bowler1', wide_runs: '0', noball_runs: '0', total_runs: '4' },
    { match_id: '1', bowler: 'Bowler3', wide_runs: '0', noball_runs: '1', total_runs: '1' },
    { match_id: '1', bowler: 'Bowler1', wide_runs: '0', noball_runs: '0', total_runs: '2' },
    { match_id: '1', bowler: 'Bowler3', wide_runs: '0', noball_runs: '0', total_runs: '1' },
    { match_id: '2', bowler: 'Bowler4', wide_runs: '0', noball_runs: '0', total_runs: '4' },
    { match_id: '2', bowler: 'Bowler5', wide_runs: '0', noball_runs: '0', total_runs: '5' },
    { match_id: '2', bowler: 'Bowler4', wide_runs: '0', noball_runs: '0', total_runs: '8' },
    { match_id: '2', bowler: 'Bowler5', wide_runs: '1', noball_runs: '0', total_runs: '1' },
    { match_id: '2', bowler: 'Bowler11',wide_runs: '0', noball_runs: '0', total_runs: '4' },
    { match_id: '2', bowler: 'Bowler11',wide_runs: '0', noball_runs: '0', total_runs: '5' },
    { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '1' },
    { match_id: '3', bowler: 'Bowler9', wide_runs: '0', noball_runs: '0', total_runs: '0' },
    { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '0', total_runs: '3' },
    { match_id: '3', bowler: 'Bowler9', wide_runs: '1', noball_runs: '0', total_runs: '1' },
    { match_id: '3', bowler: 'Bowler8', wide_runs: '0', noball_runs: '1', total_runs: '1' },
    { match_id: '3', bowler: 'Bowler10',wide_runs: '0', noball_runs: '0', total_runs: '2' },
    { match_id: '3', bowler: 'Bowler6', wide_runs: '0', noball_runs: '0', total_runs: '6' },
    { match_id: '3', bowler: 'Bowler6', wide_runs: '0', noball_runs: '0', total_runs: '1' },
    { match_id: '3', bowler: 'Bowler7', wide_runs: '1', noball_runs: '0', total_runs: '1' },
    { match_id: '3', bowler: 'Bowler7', wide_runs: '0', noball_runs: '0', total_runs: '2' },
    { match_id: '4', bowler: 'Bowler12', wide_runs: '0', noball_runs: '0', total_runs: '1' },
  ];
  
    const result = findTop10EconomicalBowlersIn2015BasedOnDeliveries(matchesData, deliveriesData);
  
    expect(deliveriesData.length).toBeGreaterThan(10);
  
    expect(result).toHaveLength(10);
    const expectedData = [
        { bowler: 'Bowler9', economy: '6.00' },
        { bowler: 'Bowler2', economy: '12.00' },
        { bowler: 'Bowler3', economy: '12.00' },
        { bowler: 'Bowler10', economy: '12.00' },
        { bowler: 'Bowler8', economy: '15.00' },
        { bowler: 'Bowler7', economy: '18.00' },
        { bowler: 'Bowler1', economy: '21.00' },
        { bowler: 'Bowler6', economy: '21.00' },
        { bowler: 'Bowler11', economy: '27.00' },
        { bowler: 'Bowler4', economy: '36.00' }

    ]
  
    expect(result).toEqual(expectedData);
  });