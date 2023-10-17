function findTop10EconomicalBowlersIn2015BasedOnDeliveries(matchesData, deliveriesData) {

    // Filter matches for the 2015 season
    const matches2015 = matchesData
      .filter((match) => match.season === '2015')
      .reduce((acc, match) => {
        acc[match.id] = true;
        return acc;
      }, {});
  
   
    const bowlerData = deliveriesData.reduce((match, delivery) => {
      const matchId = delivery.match_id;
      const bowler = delivery.bowler;
      const wideRuns = parseInt(delivery.wide_runs, 10);
      const noballRuns = parseInt(delivery.noball_runs, 10);
      const totalConcededRuns = parseInt(delivery.total_runs, 10);
  
      if (matches2015[matchId]) {
        if (!match[bowler]) {
            match[bowler] = { runs: 0, balls: 0 };
        }
  
        match[bowler].runs += totalConcededRuns;
        if (!(wideRuns || noballRuns)) {
            match[bowler].balls++;
        }
      }
  
      return match;
    }, {});
  
    // Calculate economy for each bowler and filter top 10
    const economicalBowlers = Object.keys(bowlerData)
      .filter((bowler) => bowlerData[bowler].balls > 0)
      .map((bowler) => ({
        bowler,
        economy: ((bowlerData[bowler].runs / bowlerData[bowler].balls) * 6).toFixed(2),
      }))
      .sort((a, b) => a.economy - b.economy)
      .slice(0, 10);
  
    return economicalBowlers;
  }
  
  module.exports = findTop10EconomicalBowlersIn2015BasedOnDeliveries;
  