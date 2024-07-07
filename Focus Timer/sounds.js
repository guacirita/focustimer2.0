

export const musicForest = new Audio('./audio/Floresta.wav');
export const musicRain = new Audio('./audio/Chuva.wav');
export const musicCafe = new Audio('./audio/Cafeteria.wav');
export const musicFire = new Audio('./audio/Lareira.wav');

export const buttonPressAudio = new Audio("./audio/button-press.mp3");
export const alarm = new Audio("./audio/kitchen-timer.mp3");

  musicForest.loop = true 
  musicRain.loop = true
  musicCafe.loop = true
  musicFire.loop = true


  export function playFlorest() {
    musicForest.play();
  }

  export function stopFlorest() {
    musicForest.pause();
  }


  export function playRain() {
    musicRain.play();
  }

  export function stopRain() {
    musicRain.pause();
  }

  export function playCafe(){
    musicCafe.play();
  }

  export function stopCafe(){
    musicCafe.pause();
  }

  export function playFire(){
    musicFire.play();
  }

  export function stopFire(){
    musicFire.pause();
  }

  
export function pressButton() {
  buttonPressAudio.play();
}

export function timeEnd() {
    alarm.play();
    
  }
  


export default { musicForest, musicCafe, musicFire, musicRain, pressButton, timeEnd, buttonPressAudio, 
  alarm, playFlorest, playCafe, playFire, playRain, stopFlorest, stopRain, stopCafe, stopFire  }