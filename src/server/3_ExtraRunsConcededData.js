function calculateExtraRunsConceded(matches, deliveries) {
  const extraRunsConceded = {};

  // Filter matches for the year 2016
  const matches2016 = matches.filter(match => match.season === '2016');

  for (const match of matches2016) {
    const matchId = match.id;

    // Filter deliveries for the current match
    const deliveriesForMatch = deliveries.filter(delivery => delivery.match_id === matchId);

    for (const delivery of deliveriesForMatch) {
      const bowlingTeam = delivery.bowling_team;
      const extraRuns = parseInt(delivery.extra_runs, 10);

      if (extraRunsConceded[bowlingTeam]) {
        extraRunsConceded[bowlingTeam] += extraRuns;
      } else {
        extraRunsConceded[bowlingTeam] = extraRuns;
      }
    }
  }

  return extraRunsConceded;
}

module.exports = calculateExtraRunsConceded;
