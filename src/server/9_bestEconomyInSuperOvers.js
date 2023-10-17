function bestEconomyInSuperOvers(deliveries) {
  const superOverData = {};

  deliveries.forEach((delivery) => {
    const isSuperOver = delivery.is_super_over === '1';
    const bowler = delivery.bowler;
    const totalRuns = parseInt(delivery.total_runs, 10);

    if (isSuperOver && bowler) {
      if (superOverData[bowler]) {
        superOverData[bowler].runs += totalRuns;
        superOverData[bowler].balls++;
      } else {
        superOverData[bowler] = { runs: totalRuns, balls: 1 };
      }
    }
  });

  let bestEconomy = Infinity;
  let bestEconomyBowler = '';

  for (const bowler in superOverData) {
    const { runs, balls } = superOverData[bowler];
    const economy = (runs / balls) * 6;

    if (economy < bestEconomy) {
      bestEconomy = economy;
      bestEconomyBowler = bowler;
    }
  }

  return { bestEconomyBowler, bestEconomy: bestEconomy.toFixed(2) };
}

module.exports = bestEconomyInSuperOvers;
