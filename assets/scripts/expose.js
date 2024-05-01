// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
const log = document.getElementById("horn-select");

// Responsible for being responsible for deciding what happens 
// if option chosen for sound changes

log.addEventListener("change", updateValue);
const sound = document.querySelector("audio");

let selected = false;

function updateValue(e) {
  const picture = document.querySelector("img");

  if(e.target.value == "air-horn")
  {
    picture.src = "assets/images/air-horn.svg";  
    sound.src =  "assets/audio/air-horn.mp3";
    selected = false;
  }
  else if(e.target.value == "car-horn")
  {
    picture.src = "assets/images/car-horn.svg";
    sound.src =  "assets/audio/car-horn.mp3";
    selected = false;
  }
  else
  {
    picture.src = "assets/images/party-horn.svg";
    sound.src =  "assets/audio/party-horn.mp3";
    selected = true;
  }
}


//Below is the process for changing size of volume icon 
//when we adjust the volume toggle
const newLog = document.getElementById("volume");
newLog.addEventListener("change",updatePicture);

function updatePicture(e) {
  const picture = document.querySelector("div img");
  
  if(e.target.value == 0)
  {
    picture.src = "assets/icons/volume-level-0.svg";  
    sound.volume = 0;
    
    
  }
  else if(e.target.value < 33)
  {
    picture.src = "assets/icons/volume-level-1.svg";
    sound.volume = e.target.value / 100;
    
  }
  else if (e.target.value < 67)
  {
    picture.src = "assets/icons/volume-level-2.svg";
    sound.volume = e.target.value / 100;
    
  }
  else
  {
    picture.src = "assets/icons/volume-level-3.svg";
    sound.volume = e.target.value / 100;
    
  }
}

const button = document.querySelector("button");
button.addEventListener("click",giveOutSound);

function giveOutSound(e) {
  
  if(selected == true)
  {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();

  }
  sound.play();




}

  
}