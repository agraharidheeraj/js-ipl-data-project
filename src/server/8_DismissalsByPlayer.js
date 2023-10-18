function findMostDismissedPlayersAndBowler(deliveries) {
  const dismissedByBowlerMap = new Map();

  for (const delivery of deliveries) {
    const dismissedPlayer = delivery.player_dismissed;
    const bowler = delivery.bowler;

    if (dismissedPlayer && bowler) {
      const key = `${dismissedPlayer} dismissed by ${bowler}`;
      dismissedByBowlerMap.set(key, (dismissedByBowlerMap.get(key) || 0) + 1);
    }
  }

  let mostDismissedCombinations = [];
  let maxDismissals = 0;

  for (const [key, dismissals] of dismissedByBowlerMap) {
    if (dismissals > maxDismissals) {
      maxDismissals = dismissals;
      mostDismissedCombinations = [key];
    } else if (dismissals === maxDismissals) {
      mostDismissedCombinations.push(key);
    }
  }

  return { mostDismissedCombinations, maxDismissals };
}

module.exports = findMostDismissedPlayersAndBowler;
