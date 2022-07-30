const timer = document.getElementById("timer");
const startButton = document.getElementById("startButton");

let stopTime = true;

let [minutes, seconds] = [25, 0];

function startTimer() {
  if (startButton.innerText === "Start") {
    stopTime = false;
    startButton.innerText = "Stop";
    decreaseSeconds();
    decreaseMinutes();
  } else if (startButton.innerText === "Stop") {
    startButton.innerText = "Start";
  }
}

function decreaseSeconds() {
  seconds = parseInt(seconds);
  if (seconds < 10 || seconds === 0) {
    seconds = "0" + seconds;
  }

  if (seconds === "0" + 0 || minutes === 25) {
    seconds = 59;
  }

  seconds = seconds - 1;
  timer.innerHTML = `${minutes}:${seconds}`;
  setTimeout("decreaseSeconds()", 1000);
}

function decreaseMinutes() {
  minutes = parseInt(minutes);

  if (minutes < 10 || minutes === 0) {
    minutes = "0" + seconds;
  }

  if (seconds === "0" + 0 || minutes === 25) {
    minutes = minutes - 1;
  }
  setTimeout("decreaseMinutes()", 60000);
}

// Event listeners

document.addEventListener("click", () => {
  startTimer();
});
