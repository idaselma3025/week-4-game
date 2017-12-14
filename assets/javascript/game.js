$(document).ready(function() {
  //VARIABLES
  var random;
  var score;
  var hidden;
  var currentScore;
  var winCounter=0;
  var lossCounter=0;

function setCurrent (){
  $("#currentScore").attr("data-current",0);
  currentScore = ($("#currentScore").attr("data-current"));
  currentScore = parseInt(currentScore);
}
  // function to create and print random number on restart of game
  function getRandomNumber(){
    random = Math.floor(Math.random() *(120-18)) + 18;
    $("#randomNumber").text(random);
    $("img").each(function(){
      hidden = Math.floor(Math.random() * (12)) + 1;
      $(this).attr("data-hidden",hidden);
      console.log(hidden);
    });
  }
  getRandomNumber();
  setCurrent();

  $("img").on("click",function(){
    if (currentScore === 0) {
    var imgScore = ($(this).attr("data-hidden"));
    imgScore= parseInt(imgScore);
    $("#currentScore").attr("data-current",imgScore);
    $("#currentScore").text(imgScore);
    currentScore = imgScore;
}
else{
  var currentScore = ($(this).attr("data-hidden"));
  imgScore = parseInt(imgScore);
  currentScore = imgScore + currentScore;
  $("#currentScore").text(currentScore);
}
getWins();
});
function getWins(){
if(currentScore === random){
  winCounter ++;
  $("#wins").text(winCounter);
  getRandomNumber();
  $("#currentScore").empty();
  setCurrent();
}
else if(currentScore>random){
  lossCounter++;
  $("#losses").text(lossCounter);
  getRandomNumber();
  $("#currentScore").empty();
  setCurrent();
}
}

});
