//Variables
var gem = {
    diamond:
    {
        name: "diamond",
        value: 0
    },
    citrine:
    {
        name: "citrine",
        value: 0
    },
    ruby:
    {
        name: "ruby",
        value: 0
    },
    sapphire:
    {
        name: "sapphire",
        value: 0
    },

};

// SCORES
var numberToMatch = 0;
var currentScore = 0;

//Wins and losses
var yourLosses = 0;
var yourWins = 0;

//START UP FUNCTIONS
var getRandom = function(min, max) {
    return Math.floor(Math.random() * (max + min + 1)) + min;
}

var startGame = function() {
    var currentScore = 0;

    targetScore = getRandom(19, 120);

    gem.diamond.value = getRandom(1, 12);
    gem.citrine.value = getRandom(1, 12);
    gem.ruby.value = getRandom(1, 12);
    gem.sapphire.value = getRandom(1, 12);
}


//ONCLICKS
$("#first").click(function(){
    alert("test");
});
$("#second").click(function(){
    alert("test");
});
$("#third").click(function(){
    alert("test");
});
$("#fourth").click(function(){
    alert("test");
});



{/* <button onclick="document.getElementById ('Diamond Gem').src = 'assets/images/diamondButton.gif' ">Click For Number</button>

var random
consol.log("random")
Math.floor(Math.random() * 101) + 1;
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var min = 1;
var max = 100;
var random =
    Math.floor(Math.random() * (+max - +min)) + +min;
document.write("number-to-match : " + random); */}






