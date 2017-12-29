//GLOBAL VARIABLES
//---------------------------------------------------

//Crystal Object
var crystal = {
  blue:{
    name:"blue",
    value:0
  },
  green:{
    name:"green",
    value:0
  },
  red:{
    name:"red",
    value:0
  },
  yellow:{
    name:"yellow",
    value:0
  },
};

//Scores (current and target)
var targetScore   = 0;
var currentScore  = 0;

//Wins and Losses
var winCount      = 0;
var lossCount     = 0;

//FUNCTIONS
//---------------------------------------------------

//generate a random number FUNCTION
function randomNumber(min,max){
  return Math.floor(Math.random()*(max-min + 1))+min;
}
//start game FUNCTION
function startGame(){
  //set a new targetScore to a random number 19-120
  targetScore = randomNumber(19,120);
  //set each gem to random number 1-12
  crystal.blue.value    = randomNumber(1,12);
  crystal.green.value   = randomNumber(1,12);
  crystal.yellow.value  = randomNumber(1,12);
  crystal.red.value     = randomNumber(1,12);
  //reset the currentScore to 0
  currentScore = 0;
  //change the html
  $("#currentScore").html(currentScore);
  $("#randomNumber").html(targetScore);
  //console logging
  console.log("targetScore: "+targetScore);
  console.log(" blue: "+ crystal.blue.value + " yellow: " + crystal.yellow.value + " red :"+ crystal.red.value + " green: "+ crystal.green.value);

}
//function to add crystal values
function crystalAdd(crystal){
  currentScore = currentScore + crystal.value;
  console.log("yourscore: " + currentScore);
  $("#currentScore").html(currentScore);
  checkWin();
}

//function check wins
function checkWin(){
  if (currentScore > targetScore){
    alert("you lost");
    ++lossCount
    $("#losses").html(lossCount);
    startGame();
  }
  else if (currentScore == targetScore){
    alert("you won");
    ++winCount
    $("#wins").html(winCount);
    startGame();
  }
}
//MAIN PROCESS
//---------------------------------------------------
startGame();

$("#gemBlue").click(function(){
  crystalAdd(crystal.blue);
});
$("#gemYellow").click(function(){
  crystalAdd(crystal.yellow);
});
$("#gemGreen").click(function(){
  crystalAdd(crystal.green);
});
$("#gemRed").click(function(){
  crystalAdd(crystal.red);
});
