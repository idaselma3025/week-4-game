$(document).ready(function() {
  //VARIABLES
  var random;

  //function to create and print random number on restart of game
  function getRandomNumber(min,max){
    random = Math.floor(Math.random() *(120-18)) + 18;
    $("#randomNumber").text(random);
  }
  getRandomNumber();

  //function to assign hidden gem values between 1 and 12

  $("input").each(function(){
    var hidden = Math.floor(Math.random() * (11)) + 1;
    $(this).attr("data-hidden",hidden);
    console.log($(this).attr("data-hidden"));
    console.log(hidden);
  });
});
