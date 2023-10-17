const calculateMatchesWonPerTeamPerYearData = require('../server/2_MatchesWonPerTeamPerYearData.js');


  test('calculates the number of matches won by each team for each year', () => {
    const data = [
      { season: '2008', winner: 'Kolkata Knight Riders' },
      { season: '2008', winner: 'Chennai Super Kings' },
      { season: '2009', winner: 'Mumbai Indians' },
      { season: '2009', winner: 'Royal Challengers Bangalore' },
      { season: '2010', winner: 'Kolkata Knight Riders' },
      { season: '2010', winner: 'Mumbai Indians' },
    ];

    const result = calculateMatchesWonPerTeamPerYearData(data);

    expect(result).toEqual({
      '2008': {
        'Kolkata Knight Riders': 1,
        'Chennai Super Kings': 1,
      },
      '2009': {
        'Mumbai Indians': 1,
        'Royal Challengers Bangalore': 1,
      },
      '2010': {
        'Kolkata Knight Riders': 1,
        'Mumbai Indians': 1,
      },
    });
  });

  it('handles cases where there are no matches won data', () => {
    const data = [];

    const result = calculateMatchesWonPerTeamPerYearData(data);

    expect(result).toEqual({});
  });
