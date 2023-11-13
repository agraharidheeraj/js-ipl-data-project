
// Function to fetch data from JSON and create a Highcharts chart
const createHighchartFromJSON = (jsonData, containerId, titleText,season,dataGet,Data) => {
    fetch(`./output/${jsonData}.json`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            Highcharts.chart(containerId, {
                title: {
                    text: titleText
                },
                xAxis: {
                    categories: Object.keys(data),
                    title: {
                        text: season 
                    }
                },
                yAxis: {
                    title: {
                        text: dataGet
                    }
                },
                series: [{
                    name: Data,
                    data: Object.values(data)
                   
                }]
            });
        })

        .catch(error => {
            console.error('Error fetching data:', error);
        });
};



createHighchartFromJSON('1_MatchesPerYearData', 'container-1', 'IPL Matches Per Year','season','Matches Play Per Season','Series Of Matches Play per Season');
createHighchartFromJSON('3_ExtraRunsConcededData', 'container-3', 'IPL Extra Runs Conceded','Teams','Extra Run by Each Team');
createHighchartFromJSON('5_teamsWonTossAndMatch', 'container-5', 'Teams Winning Toss and Match','Teams','Number of Times','Series of Winner Toss and Match');




fetch('./output/2_MatchesWonPerTeamPerYearData.json')
.then(response => response.json())
.then(data => {
    const years = Object.keys(data);
    const teamNames = new Set();

    years.forEach(year => {
        const yearTeamNames = Object.keys(data[year]);
        yearTeamNames.forEach(teamName => {
            teamNames.add(teamName);
        });
    });

    // Prepare the series data
    const seriesData = Array.from(teamNames).map(teamName => ({
        name: teamName,
        data: years.map(year => {
            return data[year][teamName] || "N/A";
        })
    }));

        // Create the Highcharts chart
        Highcharts.chart('container-2', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Matches Won by Teams Over the Years'
            },
            xAxis: {
                categories: years,
                title: {
                    text: 'Year'
                }
            },
            yAxis: {
                title: {
                    text: 'Matches Won'
                }
            },
            series: seriesData
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    // Fetch the data from the specified path
fetch('./output/4_topEconomicalBowlers.json')
.then(response => response.json())
.then(data => {
    const bowlers = data.map(item => item.bowler);
    const economyValues = data.map(item => parseFloat(item.economy));

    // Create the Highcharts chart
    Highcharts.chart('container-4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Bowler Economy'
        },
        xAxis: {
            categories: bowlers,
            title: {
                text: 'Bowler'
            }
        },
        yAxis: {
            title: {
                text: 'Economy'
            }
        },
        series: [{
            name: 'Economy',
            data: economyValues
        }]
    });
})
.catch(error => {
    console.error('Error fetching data:', error);
});



fetch('./output/6_playerWithMostAwardsPerSeason.json')
  .then(response => response.json())
  .then(data => {
    const years = Object.keys(data);

    const playerData = years.map(year => {
      const players = Object.keys(data[year] || {});
      const topPlayer = players.reduce((a, b) => (data[year][a] > data[year][b] ? a : b), '');
      return {
        name: topPlayer,
        y: data[year] ? data[year][topPlayer] : 0,
        drilldown: year
      };
    });

    const drilldownData = years.map(year => ({
      id: year,
      data: Object.entries(data[year] || {}).map(([player, count]) => [player, count])
    }));

    Highcharts.chart('container-6', {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Players with Most Player of the Match Awards by Year'
      },
      xAxis: {
        categories: years,
        title: {
          text: 'Year'
        }
      },
      yAxis: {
        title: {
          text: 'Count of Awards'
        }
      },
      series: [{
        name: 'Award Count',
        data: playerData
      }],
      drilldown: {
        series: drilldownData
      }
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


  fetch('./output/7_batsmanStrikeRatePerSeason.json')
    .then(response => response.json())
    .then(data => {
        const years = Object.keys(data);
        const strikeRates = Object.values(data);
    

        // Create the Highcharts chart
        Highcharts.chart('container-7', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'V Kohli Strike Rates Over the Years'
            },
            xAxis: {
                categories: years,
                title: {
                    text: 'Year'
                }
            },
            yAxis: {
                title: {
                    text: 'Strike Rate'
                }
            },
            series: [{
                name: 'Strike Rate',
                data: strikeRates
            }]
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });



    fetch('./output/8_MostDismissedPlayer.json')
    .then(response => response.json())
    .then(data => {
        const maxDismissals = data.maxDismissals;
        const mostDismissedCombinations = data.mostDismissedCombinations;

        // Create the Highcharts chart
        Highcharts.chart('container-8', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Most Dismissed Combinations and Maximum Dismissals'
            },
            xAxis: {
                categories: mostDismissedCombinations,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Dismissals'
                }
            },
            series: [{
                name: 'Dismissals',
                data: mostDismissedCombinations.map(() => maxDismissals)
            }]
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });


    fetch('./output/9_EconomyInSuperOvers.json')
    .then(response => response.json())
    .then(data => {
        Highcharts.chart('container-9', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Best Economy Bowler in Super Overs'
            },
            xAxis: {
                categories: [data.bestEconomyBowler],
                title: {
                    text: 'Bowler'
                }
            },
            yAxis: {
                title: {
                    text: 'Economy'
                }
            },
            series: [{
                name: 'Economy',
                data: [parseFloat(data.bestEconomy)]
            }]
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

