function findMostDismissedPlayer(deliveries) {
    const dismissalsCount = {};
  
    deliveries.forEach((delivery) => {
      const batsman = delivery.batsman;
      const dismissedBy = delivery.player_dismissed;
  
      if (dismissedBy !== '' && batsman !== dismissedBy) {
        const dismissalKey = `${batsman}-${dismissedBy}`;
  
        if (dismissalsCount[dismissalKey]) {
          dismissalsCount[dismissalKey]++;
        } else {
          dismissalsCount[dismissalKey] = 1;
        }
      }
    });
  
    let highestDismissalsCount = 0;
    let mostDismissedPlayers = [];
  
    for (const dismissalKey in dismissalsCount) {
      const count = dismissalsCount[dismissalKey];
  
      if (count > highestDismissalsCount) {
        highestDismissalsCount = count;
        mostDismissedPlayers = [dismissalKey];
      } else if (count === highestDismissalsCount) {
        mostDismissedPlayers.push(dismissalKey);
      }
    }
  
    const mostDismissedPlayersData = mostDismissedPlayers.map((dismissalKey) => {
      const [batsman, dismissedBy] = dismissalKey.split('-');
      return { batsman, dismissedBy, count: dismissalsCount[dismissalKey] };
    });
  
    return mostDismissedPlayersData;
  }
  
  module.exports = findMostDismissedPlayer;
  