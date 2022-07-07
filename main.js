const container = document.querySelector(".container");

const sound1 = new Audio("audio/audio1.wav");
const sound2 = new Audio("audio/audio2.wav");
const sound3 = new Audio("audio/audio3.wav");
const sound4 = new Audio("audio/audio4.wav");
const sound5 = new Audio("audio/audio5.wav");
const sound6 = new Audio("audio/audio6.wav");
const sound7 = new Audio("audio/audio7.wav");
const sound8 = new Audio("audio/audio8.wav");
const sound9 = new Audio("audio/audio9.wav");

document.addEventListener("keydown", (e) => playSound(e));

container.addEventListener("click", function (e){
    if (e.target.classList.contains("sound")){
        playSound(e.target);
    }
});

function playSound(e) {
    switch (e.code || e.id) {
      case "KeyZ":
        sound1.play();
        break;
      case "KeyX":
        sound2.play();
        break;
      case "KeyC":
        sound3.play();
        break;
      case "KeyV":
        sound4.play();
        break;
      case "KeyB":
        sound5.play();
        break;
      case "KeyN":
        sound6.play();
        break;
      case "KeyM":
        sound7.play();
        break;
      case "KeyK":
        sound8.play();
        break;
      case "KeyL":
        sound9.play();
        break;
    }
  }