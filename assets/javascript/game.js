$(document).ready(function(){
    var Random = Math.floor(Math.random() * 200 + 15)

    //attach to randomized number to "number-to-match" in the HTML section
    $('#number-to-match').text(Random);

    //Setting random number for each gem. changed random number span from 1-30
    var num1 = Math.floor(Math.random() * 31 + 1)
    var num2 = Math.floor(Math.random() * 31 + 1)
    var num3 = Math.floor(Math.random() * 31 + 1)
    var num4 = Math.floor(Math.random() * 31 + 1)

    //set variable wins losses and player total points
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    //variables to tally declaration
    $('#yourWins').text(wins);
    $('#yourLosses').text(losses);

    //reset function to reset game after each win/loss

    function reset() {
        Random = Math.floor(Math.random() * 200 + 15);
        console.log(Random)
        //not gettin result from console.log

        //randomizing gem values
        $('#number-to-match').text(Random);
        num1 = Math.floor(Math.random() * 31 + 1);
        num2 = Math.floor(Math.random() * 31 + 1);
        num3 = Math.floor(Math.random() * 31 + 1);
        num4 = Math.floor(Math.random() * 31 + 1);

        //players total should populate
        playerTotal = 0;
        $('#finalScore').text(playerTotal);

    }

    //set winning and losing function alerts (would like to use a banner or gif of Ryu/Ken winning, or baby crying gif if you lose)
    function winning() {
        alert("YOU WIN... PERFECT!");
        wins++;
        $('#yourWins'.text(wins);
        reset();
    }
    function losing(){
        alert ("YOU LOST...LEWHOO...SUHERR!")
        losses++;
        $('#yourLosses').text(losses);
        reset()
    }
    //Gem clicks for points using num1-num4
    $("#first").on('click', function(){
        playerTotal = playerTotal + num1;
        console.log("playerTotal")
        //win or lose outcomes
        if (playerTotal == Random){
            winning();
        }
        else if (playerTotal > Random){
            losing();
        }

        $("#second").on('click', function(){
        playerTotal = playerTotal + num2;
        if (playerTotal == Random){
            winning();
        }
        else if (playerTotal > Random){
            losing();
        }

        $("#third").on('click', function(){
        playerTotal = playerTotal + num3;
        if (playerTotal == Random){
            winning();
        }
        else if (playerTotal > Random){
            losing();
        }

        $("#fourth").on('click', function(){
        playerTotal = playerTotal + num1;
        if (playerTotal == Random){
            winning();
        }
        else if (playerTotal > Random){
            losing();
        }
    }


}