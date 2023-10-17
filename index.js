const csv = require('csv-parser');
const fs = require('fs');

const calculateMatchesPerYearData = require('./src/server/1_MatchesPerYearData.js');
const calculateMatchesWonPerTeamPerYearData = require('./src/server/2_MatchesWonPerTeamPerYearData.js');
const calculateExtraRunsConceded= require('./src/server/3_ExtraRunsConcededData.js')
const calculatetopEconomicalBowlers= require('./src/server/4_EconomicalBowlers.js')
const calculateteamsWonTossAndMatch= require('./src/server/5_teamsWonTossAndMatch.js')
const calculateplayerWithMostAwardsPerSeason= require('./src/server/6_PlayerWithMostPOMAwards.js');
const calculateBatsmanStrikeRate = require('./src/server/7_BatsmanStrikeRatePerSeason.js');
const calculateMostDismissedPlayer= require('./src/server/8_DismissalsByPlayer.js')
const calculatebestEconomyInSuperOvers= require('./src/server/9_bestEconomyInSuperOvers.js')

const matches = './src/data/matches.csv';
const deliveries = './src/data/deliveries.csv';

const matchesData = [];

// Reading matches data
fs.createReadStream(matches)
  .pipe(csv())
  .on('data', (match) => {
    matchesData.push(match);
  })
  .on('end', () => {
    const deliveriesData = [];

    // Reading deliveriesData
    fs.createReadStream(deliveries)
      .pipe(csv())
      .on('data', (delivery) => {
        deliveriesData.push(delivery);
      })
      .on('end', () => {
        const outputFile1 = './src/public/output/1_MatchesPerYearData';
        const outputFile2 = './src/public/output/2_MatchesWonPerTeamPerYearData.json';
        const outputFile3 = './src/public/output/3_ExtraRunsConcededData.json'; 
        const outputFile4 = './src/public/output/4_topEconomicalBowlers.json';
        const outputFile5 = './src/public/output/5_teamsWonTossAndMatch.json';
        const outputFile6 =  './src/public/output/6_playerWithMostAwardsPerSeason.json';
        const outputFile7 =  './src/public/output/7_batsmanStrikeRatePerSeason.json';
        const outputFile8 = './src/public/output/8_MostDismissedPlayer.json';
        const outputFile9 = './src/public/output/9_EconomyInSuperOvers.json'



        const input1 = calculateMatchesPerYearData(matchesData);
        const input2 = calculateMatchesWonPerTeamPerYearData(matchesData);
        const input3= calculateExtraRunsConceded(matchesData,deliveriesData);
        const input4=  calculatetopEconomicalBowlers(matchesData,deliveriesData);
        const input5= calculateteamsWonTossAndMatch(matchesData);
        const input6= calculateplayerWithMostAwardsPerSeason(matchesData,deliveriesData);
        const input7= calculateBatsmanStrikeRate(deliveriesData,matchesData);
        const input8= calculateMostDismissedPlayer(deliveriesData);
        const input9= calculatebestEconomyInSuperOvers(deliveriesData);
      
        fs.writeFileSync(outputFile1, JSON.stringify(input1, null, 2));
        fs.writeFileSync(outputFile2, JSON.stringify(input2, null, 2));
        fs.writeFileSync(outputFile3, JSON.stringify(input3, null, 2));
        fs.writeFileSync(outputFile4, JSON.stringify(input4, null, 2));
        fs.writeFileSync(outputFile5, JSON.stringify(input5, null, 2));
        fs.writeFileSync(outputFile6, JSON.stringify(input6, null, 2));
        fs.writeFileSync(outputFile7, JSON.stringify(input7, null, 2));
        fs.writeFileSync(outputFile8, JSON.stringify(input8, null, 2));
        fs.writeFileSync(outputFile9, JSON.stringify(input9, null, 2));


        // Console log statements
        console.log('MatchesPerYearData :', input1); 
        console.log('MatchesWonPerTeamPerYearData :', input2);
        console.log('ExtraRunsConceded :', input3);
        console.log('EconomicalBowlers :', input4);
        console.log('teamsWonTossAndMatch:', input5);
       console.log('playerWithMostAwardsPerSeason:',  input6);
       console.log('BatsmanStrikeRate :', input7);
       console.log('MostDismissedPlayer:', input8);
       console.log('EconomyInSuperOvers:', input9);
      });
  });
