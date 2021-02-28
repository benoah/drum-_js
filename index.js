function removeTransition(e) {
  // if propertyname is not equel to transform
  if (e.propertyName !== "transform") return; // skip it if its not a transform
  e.target.classList.remove("playing");
}

function playSound(e) {
  // put the the element in a value
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // going to use this for the animation
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  // if it no audio
  if (!audio) return; // this will stop the function from running

  // adding classs playing for animation
  key.classList.add("playing");

  audio.currentTime = 0; // this is going to restart the sound
  audio.play(); // functon that play the audio
}
// selecting every key
const keys = Array.from(document.querySelectorAll(".key"));
// going to get every key and going to add addEvenTListner

keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

// we are adding eventlistner on keydown, when thats happen we going to run the function
//Playsound
window.addEventListener("keydown", playSound);
