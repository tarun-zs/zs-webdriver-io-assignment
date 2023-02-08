const testData = require("/Users/raramuri/Documents/webdriver_io_assignmment/test/testData/data.json")

/*
This describe() block contains 1st question of the assignment. 
*/
describe("Assignment 1",function (){
    //Assignment 1, 1st test case.
    it("Write a test that validates that the team has only 4 foreign players",async () =>{
        var countForForeignPlayers =0;//This variable contains the count of the foreign players.
        /**
         * Iterate the list testData.player which contains player's data.
         * Assert the country field in the player's details. 
         * Increment  
         */
        for(playerDetail in testData.player){
            if(testData.player[playerDetail].country != "India"){
                countForForeignPlayers += 1;
            }
            if(countForForeignPlayers > 4){
                throw new Error("Error!! Foreign player limit is 4.");//Throw an error if foreign player count is more than 4.
            }
        }
    })
    //Assignmment 1, 2nd test case.
    it("Write a test that validates that there is at least one wicket keeper", async () =>{
        var hasWicketKeeper = false;
        /**
         * Iterate through the testData.player list and 
         * assert the role field.
         */
        for(playerDetail in testData.player){
            if(testData.player[playerDetail].role == "Wicket-keeper"){
                hasWicketKeeper = true;
                break;
            }
        }
        if(!hasWicketKeeper){
            throw new Error("Error!! Team should have atleast one wicket-keeper.");//Throw an error if there is no wicket-keeper in the team.
        }
    })
})


