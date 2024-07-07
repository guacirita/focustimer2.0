import { controls } from "./elements.js";
import * as actions from "./actions.js";
import * as sounds from "./sounds.js";

export function registerControls() {

  //target onde foi clicado

  controls.addEventListener("click", (event) => {
  const action = event.target.dataset.action;
  if(typeof actions[action] != "function") {
    return
  }

  actions[action]();

  sounds.buttonPressAudio.play();

});
}


export function playAudio() {

controls.addEventListener("click", (event) => {
  const sound = event.target.dataset.sound;
  if(typeof sounds[sound] != "function") {
    return
  }

  sounds[sound]();

 
});
}

export default { registerControls, playAudio }