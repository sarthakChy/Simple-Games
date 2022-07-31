let startBtn = document.querySelector("button");
let fstImg = document.querySelector(".player-1 img");
let sndImg = document.querySelector(".player-2 img");
let textBtn = document.querySelector("button");
let winnerText = document.querySelector("h1");
let fstSpan;
let sndSpan;


startBtn.addEventListener("click", randomGenImg);

startBtn.addEventListener("click", winner);


function randomGenImg(){

  fstSpan = Math.floor(Math.random()*6) + 1;
  sndSpan = Math.floor(Math.random()*6) + 1;
  fstImg.setAttribute("src",`./images/dice${fstSpan}.png`);
  sndImg.setAttribute("src",`./images/dice${sndSpan}.png`);
  fstImg.setAttribute("alt",`dice${fstSpan}`);
  sndImg.setAttribute("alt",`dice${fstSpan}`);
  textBtn.textContent = "Again";

}

function winner(){
  if (fstSpan > sndSpan ){
    winnerText.textContent = "Player 1 wins";
  }else if(fstSpan < sndSpan ){
    winnerText.textContent = "Player 2 wins";
  }else{
    winnerText.textContent = "it's a tie";
  }

}
