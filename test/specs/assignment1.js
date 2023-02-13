const players =require('../testData/data.json').player;
const chai = require('chai');
const dataUtil = require('../utils/dataUtil.json');
var expect = chai.expect;
var totalTeamPlayersCount = dataUtil.initialValueForCount;

/*
This describe() block contains 1st question of the assignment. 
*/

describe("Assignment 1",function (){
    //Assignment 1, 1st test case.
    it("Write a test that validates that the team has only 4 foreign players",async () =>{
        var countForForeignPlayers =dataUtil.initialValueForCount;//This variable contains the count of the foreign players.
        
        /**
         * Iterate the list testData.player which contains player's data.
         * Assert the country field in the player's details. 
         * Increment  the foreign player count if country is not India.
         */
        for(playerDetail in players){
            /**
             * If player's country doesn't match with string 'India' then the count increases.
             */
            try{
                // assert.doesNotMatch(players[playerDetail].country, /India/);
                expect(players[playerDetail].country).to.not.equal(dataUtil.countryToBeAsserted)
                countForForeignPlayers += dataUtil.incrementBy1;
            }catch(error){
                console.log(players[playerDetail].name+" is not a foreign player."+"\n");
            }
            totalTeamPlayersCount += dataUtil.incrementBy1;//Increment the count for total players after each for loop iteration.
        }
        if(countForForeignPlayers > dataUtil.foreignPlayerLimit){
            throw new Error(dataUtil.errorMessage1);//Throw an error if foreign player count is more than 4.
        }
        if(totalTeamPlayersCount > dataUtil.expectedTotalPlayerCount){
            throw new Error(dataUtil.errorMessageForTotalPlayersCount);//Throw an error if total players are more than 11.
        }
    })

    //Assignmment 1, 2nd test case
    it("Write a test that validates that there is at least one wicket keeper", async () =>{
        var hasWicketKeeper = false;
        totalTeamPlayersCount =dataUtil.initialValueForCount;

        /**
         * Iterate through the testData.player list and 
         * assert the role field.
         */ 
        for(playerDetail in players){
            try{
                expect(players[playerDetail].role).to.equal(dataUtil.roleToBeAsserted)
                hasWicketKeeper = true;
            }catch(error){
                console.log("\n"+players[playerDetail].name+"'s role is not Wicket-keeper.");
            }
            totalTeamPlayersCount += dataUtil.incrementBy1;//Increment the count for total players after each for loop iteration.
        }
        if(!hasWicketKeeper){
            throw new Error("Error!! Team should have atleast one wicket-keeper.");//Throw an error if there is no wicket-keeper in the team.
        }
        if(totalTeamPlayersCount > dataUtil.expectedTotalPlayerCount){
            throw new Error("Error!! Team can have only 11 players.");//Throw an error if total players are more than 11.
        }
    })
})
