$(document).ready(function() {
  //VARIABLES
  var random;
  var score;
  var hidden;
  var poop;
  var winCounter=0;
  var lossCounter=0;

function setCurrent (){
  $("#currentScore").attr("data-current",0);
  poop = ($("#currentScore").attr("data-current"));
  poop = parseInt(poop);
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
    if (poop === 0) {
    var crap = ($(this).attr("data-hidden"));
    crap = parseInt(crap);
    $("#currentScore").attr("data-current",crap);
    $("#currentScore").text(crap);
    poop = crap;
}
else{
  var crap = ($(this).attr("data-hidden"));
  crap = parseInt(crap);
  poop = crap + poop;
  $("#currentScore").text(poop);
}
getWins();
});
function getWins(){
if(poop === random){
  alert("good job");
  getRandomNumber();
  $("#currentScore").empty();
  setCurrent();
  winCounter ++;
  $("#wins").text(winCounter);
}
else if(poop>random){
  alert("you suck");
  getRandomNumber();
  $("#currentScore").empty();
  setCurrent();
  lossCounter++;
  $("#losses").text(lossCounter);

}
}

});
