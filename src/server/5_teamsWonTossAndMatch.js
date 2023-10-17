function teamsWonTossAndMatch(matches) {
    const tossAndMatchStats = {};
  
    matches.forEach((match) => {
        const tossWinner = match.toss_winner;
        const matchWinner = match.winner;
    
        if (tossWinner ==matchWinner) {
          if (tossWinner in tossAndMatchStats) {
            tossAndMatchStats[tossWinner]++;
          } else {
            tossAndMatchStats[tossWinner] = 1;
          }
        }
      });
    
      return tossAndMatchStats;
  }
  
  module.exports = teamsWonTossAndMatch;
  