const timer = document.getElementById("timer");

window.addEventListener("load", () => {
  timer.innerText = `${times.minutes} ${times.seconds}`;
});

const times = {
  minutes: 25,
  seconds: "0" + "0",
};
