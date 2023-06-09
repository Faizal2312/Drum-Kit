const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll(".audio");
// console.log(audio);
// console.log(keys);

const info = {
  path: [
    "sounds\\kick.wav",
    "sounds\\boom.wav",
    "sounds\\clap.wav",
    "sounds\\hihat.wav",
    "sounds\\kick.wav",
    "sounds\\tink.wav",
    "sounds\\tom.wav",
    "sounds\\snare.wav",
    "sounds\\ride.wav",
  ],
  class: [
    "kick",
    "boom",
    "clap",
    "hihat",
    "kick",
    "tink",
    "tom",
    "snare",
    "ride",
  ],
};

const Symbol = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];

// console.log(info);

keys.forEach((key, index) => {
  key.addEventListener("click", () => {
    audio[index].src = info.path[index];
    audio[index].setAttribute("class", info.class[index]);
    document.querySelector(`.${info.class[index]}`).play();
  });
});

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < Symbol.length; i++) {
    if (e.key == Symbol[i]) {
      audio[i].src = info.path[i];
      audio[i].setAttribute("class", info.class[i]);
      document.querySelector(`.${info.class[i]}`).play();

      keys[i].classList.add("hover");

      document.addEventListener("keyup", (e) => {
        keys[i].classList.remove("hover");
      });
    }
  }
});
