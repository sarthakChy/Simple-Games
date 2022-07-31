let colors = ["red", "blue", "green", "yellow"];
let gamePattern = [];

let userPattern =[];

let started = false
let level = 0

$(document).keypress(function(){
  if(!started){

    nextSequence()
    started = true
  }


})

$("button").click(function(){

  let userChosenColour = this.className;
  userPattern.push(userChosenColour);
  btnAnimate(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userPattern.length-1)

})

function checkAnswer(currentLevel){
  if (userPattern[currentLevel] === gamePattern[currentLevel]){
    if (userPattern.length === gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);

    }

  }else{
    $("h1").text("Game Over, Press Any Key to Restart")
    playSound("wrong");

    $("body").addClass("wrong");
    setTimeout(function(){
      $("body").removeClass("wrong");
    },100);

    startOver();
  }

}
function nextSequence(){

  userPattern = []
  level++
  $("h1").text("Level"+level);
  let num = Math.floor(Math.random()*4);
  randomChosenColour = colors[num];
  gamePattern.push(randomChosenColour);
  btnAnimate(randomChosenColour)
  playSound(randomChosenColour);

}

function btnAnimate(color){

  let pressedBtn = $(`.${color}`);
  pressedBtn.addClass("clicked");

  setTimeout(function(){
    pressedBtn.removeClass("clicked");
  },100);

}


function playSound(color){

  let audio = new Audio(`./sounds/${color}.mp3`);
  audio.play();
}

function startOver(){

  started = false;
  gamePattern = [];
  level = 0;

}
