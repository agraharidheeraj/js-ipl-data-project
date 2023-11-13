function findPlayerWithMostPOMAwards(matches) {
  const playersManOfTheMatchCount = {};

  matches.forEach((match) => {
    const { season, player_of_match } = match;

    if (!playersManOfTheMatchCount[season]) {
      playersManOfTheMatchCount[season] = {};
    }

    if (!playersManOfTheMatchCount[season][player_of_match]) {
      playersManOfTheMatchCount[season][player_of_match] = 1;
    } else {
      playersManOfTheMatchCount[season][player_of_match]++;
    }

    if (
      !playersManOfTheMatchCount[season].maxCount ||
      playersManOfTheMatchCount[season][player_of_match] >
        playersManOfTheMatchCount[season].maxCount
    ) {
      playersManOfTheMatchCount[season].maxCount =
        playersManOfTheMatchCount[season][player_of_match];

      playersManOfTheMatchCount[season].player = {
        [player_of_match]: playersManOfTheMatchCount[season].maxCount,
      };
    } else if (
      playersManOfTheMatchCount[season][player_of_match] ===
      playersManOfTheMatchCount[season].maxCount
    ) {
      playersManOfTheMatchCount[season].player[player_of_match] =
        playersManOfTheMatchCount[season].maxCount;
    }
  });

  const PlayerWithMostPOMAwards = {};

  for (const season in playersManOfTheMatchCount) {
    PlayerWithMostPOMAwards[season] =
      playersManOfTheMatchCount[season].player;
  }

  return PlayerWithMostPOMAwards;
}

module.exports = findPlayerWithMostPOMAwards;
