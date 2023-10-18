const findMostDismissedPlayer = require('../server/8_DismissalsByPlayer.js');


  test('should return the player dismissed the most by another player', () => {
    const data = [
      {
        batsman: 'V Kohli',
        player_dismissed: 'AB de Villiers',
      },
      {
        batsman: 'V Kohli',
        player_dismissed: 'AB de Villiers',
      },
      {
        batsman: 'V Kohli',
        player_dismissed: 'AB de Villiers',
      },
      {
        batsman: 'V Kohli',
        player_dismissed: 'MS Dhoni',
      },
      {
        batsman: 'MS Dhoni',
        player_dismissed: 'V Kohli',
      },
      {
        batsman: 'AB de Villiers',
        player_dismissed: 'V Kohli',
      },
    ];

    const result = findMostDismissedPlayer(data);

   
    expect(result).toEqual([
      {
        batsman: 'V Kohli',
        dismissedBy: 'AB de Villiers',
        count: 3,
      },
    ]);
  });

  it('should handle empty data', () => {
    const data = [];
    const result = findMostDismissedPlayer(data);
    expect(result).toEqual([]);
  });


