function calculateMatchesWonPerTeamPerYearData(matches) {
    const matchesWonData = {};
  
    matches.forEach((match) => {
      const year = match.season;
      const winner = match.winner;
  
      if (matchesWonData[year]) {
        if (matchesWonData[year][winner]) {
          matchesWonData[year][winner]++;
        } else {
          matchesWonData[year][winner] = 1;
        }
      } else {
        matchesWonData[year] = { [winner]: 1 };
      }
    });
  
    return matchesWonData;
  }
  
  module.exports = calculateMatchesWonPerTeamPerYearData;