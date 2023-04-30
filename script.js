const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

function startTimer() {
  running = true;
  timer = setInterval(function() {
    seconds++;

    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }

    if (minutes == 60) {
      minutes = 0;
      hours++;
    }

    display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

function stopTimer() {
  running = false;
  clearInterval(timer);
}

function resetTimer() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = '00:00:00';
}

startBtn.addEventListener('click', function() {
  if (!running) {
    startTimer();
  }
});

stopBtn.addEventListener('click', function() {
  if (running) {
    stopTimer();
  }
});

resetBtn.addEventListener('click', function() {
  resetTimer();
});
