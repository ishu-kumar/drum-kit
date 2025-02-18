const buttons = document.querySelectorAll(".drum");

for (let button of buttons) {
  button.addEventListener("click", function () {
    const id = this.innerText;
    if (id === "A") {
      const audio = new Audio("sounds/boom.wav");
      audio.play();
    } else if (id === "S") {
      const audio = new Audio("sounds/clap.wav");
      audio.play();
    } else if (id === "D") {
      const audio = new Audio("sounds/hihat.wav");
      audio.play();
    } else if (id === "F") {
      const audio = new Audio("sounds/KICK.wav");
      audio.play();
    } else if (id === "G") {
      const audio = new Audio("sounds/openhat.wav");
      audio.play();
    } else if (id === "H") {
      const audio = new Audio("sounds/ride.wav");
      audio.play();
    } else if (id === "J") {
      const audio = new Audio("sounds/snare.wav");
      audio.play();
    } else if (id === "K") {
      const audio = new Audio("sounds/tink.wav");
      audio.play();
    } else if (id === "L") {
      const audio = new Audio("sounds/tom.wav");
      audio.play();
    }
  });
}
