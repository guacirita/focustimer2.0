import state from "./state.js"
import * as timer from "./timer.js";
import { playCafe, playFire, playRain, playFlorest, stopFlorest, stopRain, stopCafe, stopFire } from "./sounds.js";

import {
  minutes, buttonCafe, buttonFire, buttonForest, buttonRain, svgCafe, svgFire, svgForest,
  svgRain
} from "./elements.js";



export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();

}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  timer.upDateDisplay();

}

export function increase5Minutes() {

  if (state.minutes >= 60) {
    state.minutes = 60;
    return
  }
  state.minutes = state.minutes + 5;
  minutes.textContent = String(state.minutes).padStart(2, "0");

}

export function decrease5Minutes() {

  if (state.minutes <= 0 || state.minutes < 5) {
    state.minutes = 0; // pra não ficar -1 min
    state.seconds = 1;
    return
  }
  state.minutes = state.minutes - 5;
  minutes.textContent = String(state.minutes).padStart(2, "0");
}


/* Button Cards Audio */

buttonForest.addEventListener('click', () => {

  if(buttonForest.classList.toggle('selected')){
    playFlorest();
  } else {
    stopFlorest();
  }
  
  svgForest.classList.toggle('color'); 
})


buttonRain.addEventListener('click', () => {
  if(buttonRain.classList.toggle('selected')) {
    playRain();
  } else {
    stopRain();
  }
  svgRain.classList.toggle('color');
  
})

buttonCafe.addEventListener('click', () => {

 if(buttonCafe.classList.toggle('selected'))  {
  playCafe();
 } else {
  stopCafe();
 }
  svgCafe.classList.toggle('color');
  
})

buttonFire.addEventListener('click', () => {

  if(buttonFire.classList.toggle('selected')) {
    playFire();
  } else {
    stopFire();
  }
  svgFire.classList.toggle('color');
 
})



export default { toggleRunning, reset, increase5Minutes, decrease5Minutes }