const calculateBatsmanStrikeRate = require('../server/7_BatsmanStrikeRatePerSeason.js');

test('calculateBatsmanStrikeRate calculates the strike rate of a batsman for each season', () => {
    const matchesData = [
        { id: '1', season: '2008' },
        { id: '2', season: '2009' },
        { id: '3', season: '2010' },
       
      ];
  
      const deliveriesData = [
        {
          match_id: '1',
          batsman: 'V Kohli',
          batsman_runs: '4',
          wide_runs: '0',
        },
        {
          match_id: '2',
          batsman: 'V Kohli',
          batsman_runs: '1',
          wide_runs: '0',
        },
        {
          match_id: '3',
          batsman: 'V Kohli',
          batsman_runs: '1',
          wide_runs: '0',
        },
        {
            match_id: '3',
            batsman: 'V Kohli',
            batsman_runs: '2',
            wide_runs: '0',
          },
      
      ];
  
      const batsman = 'V Kohli';
      const result = calculateBatsmanStrikeRate(deliveriesData, matchesData);
      const expectedOutput = {
        '2008': 400.00,
        '2009': 100.00,
        '2010': 150.00,
      };
  
  
      expect(result).toEqual(expectedOutput);
});
