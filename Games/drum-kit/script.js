let allBtn = document.querySelectorAll(".set");
console.log(allBtn);

for (let i = 0; i < allBtn.length; i++) {
  allBtn[i].addEventListener("click", function() {
    let btnInnerHtml = this.innerHTML;
    makeSound(btnInnerHtml);
    btnAnimation(btnInnerHtml);
  });
}

document.addEventListener('keypress', function(event) {
  makeSound(event.key);
  btnAnimation(event.key);
});


function makeSound(key) {
  switch (key) {
    case "w":
      let tom1Audio = new Audio("./sounds/tom-1.mp3");
      tom1Audio.play();
    case "a":
      let tom2Audio = new Audio("./sounds/tom-2.mp3");
      tom2Audio.play();
    case "s":
      let tom3Audio = new Audio("./sounds/tom-3.mp3");
      tom3Audio.play();
    case "d":
      let tom4Audio = new Audio("./sounds/tom-4.mp3");
      tom4Audio.play();
    case "j":
      let crashAudio = new Audio("./sounds/crash.mp3");
      crashAudio.play();
    case "k":
      let kickAudio = new Audio("./sounds/kick-bass.mp3");
      kickAudio.play();
    case "l":
      let snareAudio = new Audio("./sounds/snare.mp3");
      snareAudio.play();
  };
}

function btnAnimation(key){
  let activeBtn = document.querySelector("." + key)
  activeBtn.classList.add("pressed")
  setTimeout(function(){
  activeBtn.classList.remove("pressed");
},100);
}
