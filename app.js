const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");

let stopTime = true;
let timeout;

let [minutes, seconds] = [25, 0];

function startTimer() {
  if (startButton.innerText === "Start") {
    stopTime = false;
    startButton.innerText = "Stop";
    decreaseSeconds();
  } else if (startButton.innerText === "Stop") {
    startButton.innerText = "Start";
  }
}

function decreaseSeconds() {
  seconds = parseInt(seconds);
  if (stopTime === false) {
    if (seconds < 10 || seconds === 0) {
      seconds = "0" + seconds;
    }

    if (seconds === "0" + 0) {
      setTimeout("seconds = 59", 1000);
    }
    if (seconds === 59) {
      seconds = seconds - 1;
    }
    seconds = seconds - 1;

    timer.innerHTML = `${minutes}:${seconds}`;
    timeout = setTimeout("decreaseSeconds()", 1000);
  }
}

function decreaseMinutes() {}

// Event listeners

document.addEventListener("click", () => {
  startTimer();
});
