function calculateBatsmanStrikeRate(deliveriesData, matchesData) {
    const strikeRateData = {};
  
    deliveriesData.forEach((delivery) => {
      const batsman = delivery.batsman;
      const runs = parseInt(delivery.batsman_runs, 10);
      const wideRuns = parseInt(delivery.wide_runs, 10);
      const season = matchesData.find((match) => match.id === delivery.match_id)?.season;
  
      if (batsman === 'V Kohli' && wideRuns === 0) {
        if (season) {
          if (!strikeRateData[season]) {
            strikeRateData[season] = { runs: 0, balls: 0 };
          }
  
          strikeRateData[season].runs += runs;
          strikeRateData[season].balls++;
        }
      }
    });
  
    const result = {};
  
    for (const season in strikeRateData) {
      const { runs, balls } = strikeRateData[season];
      if (balls > 0) {
        const strikeRate = ((runs / balls) * 100).toFixed(2);
        result[season] = parseFloat(strikeRate);
      }
    }
  
    return result;
  }
  
  module.exports = calculateBatsmanStrikeRate;
  