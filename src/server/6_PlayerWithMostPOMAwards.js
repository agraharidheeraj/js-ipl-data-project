function findPlayerWithMostPOMAwards(matches) {
    const playerOfTheMatchBySeason = {};
    const highestPlayerOfTheMatchBySeason={};
  
    matches.forEach((match) => {
      const season = match.season;
      const playerOfTheMatch = match.player_of_match;
  
  
      if (playerOfTheMatch) {
        if (playerOfTheMatchBySeason[season]) {
          if (playerOfTheMatchBySeason[season][playerOfTheMatch]) {
            playerOfTheMatchBySeason[season][playerOfTheMatch]++;
          } else {
            playerOfTheMatchBySeason[season][playerOfTheMatch] = 1;
          }
        } else {
          playerOfTheMatchBySeason[season] = { [playerOfTheMatch]: 1 };
        }
      }
    });
  
    for (const season in playerOfTheMatchBySeason) {
      const players = playerOfTheMatchBySeason[season];
      const highestPlayer = Object.keys(players).reduce((a, b) => players[a] > players[b] ? a : b);
      highestPlayerOfTheMatchBySeason[season] = highestPlayer;
    }
  
    const formattedResult = {};
    for (const season in highestPlayerOfTheMatchBySeason) {
      const player = highestPlayerOfTheMatchBySeason[season];
      formattedResult[season] = player;
    }
    return formattedResult;
  }
    module.exports = findPlayerWithMostPOMAwards;
    