// Select the  elements and assigns it to the specific constant variable
const display = document.querySelector('.display');
const startBtn = document.querySelector('.start');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');

//Define variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

// Define functions
function startTimer() {
  running = true;
  timer = setInterval(function() {
    seconds++;
     
     // Checks if the seconds value has reached 60, indicating a minute has elapsed. If true, resets seconds to 0 and increments minutes by 1.
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
     
     // Checks if the minutes value has reached 60, indicating an hour has elapsed. If true, resets minutes to 0 and increments hour by 1.
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    // Sets the innerHTML of the display element with the current elapsed time in hours, minutes, and seconds
    display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }, 1000);
}

// Stops the timer by setting the 'running' boolean variable to false and clearing the interval set by the 'timer' variable.
function stopTimer() {
  running = false;
  clearInterval(timer);
}


// Resets the timer by setting the 'running' boolean variable to false, clearing the interval set by the 'timer' variable, and resetting the seconds, minutes, and hours variables to 0. Also updates the display with the reset time of '00:00:00'.
function resetTimer() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  minutes = 0;
  hours = 0;
  display.innerHTML = '00:00:00';
}

// Adds a click event listener to the start button and executes a callback function
startBtn.addEventListener('click', function() {
  if (!running) {
    startTimer();
  }
});

// Adds a click event listener to the stop button and executes a callback function
stopBtn.addEventListener('click', function() {
  if (running) {
    stopTimer();
  }
});

// Adds a click event listener to the reset button and executes a callback function
resetBtn.addEventListener('click', function() {
  resetTimer();
});
