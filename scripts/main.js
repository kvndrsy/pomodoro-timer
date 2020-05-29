let phase = "Session";
let isStopped = true;
let isPaused = false;

function decrementSession() {
  if (isStopped) {
    sessionMinutesValue = getSessionMinutes();
    if (sessionMinutesValue > 1) {
      sessionMinutesDiv.innerText = sessionMinutesValue - 1;
    }
  }
}

function incrementSession() {
  if (isStopped) {
    sessionMinutesValue = parseInt(sessionMinutesDiv.innerText);
    sessionMinutesDiv.innerText = sessionMinutesValue + 1;
  }
}

function decrementBreak() {
  if (isStopped) {
    breakMinutesValue = parseInt(breakMinutesDiv.innerText);
    if (breakMinutesValue > 1) {
      breakMinutesDiv.innerText = breakMinutesValue - 1;
    }
  }
}

function incrementBreak() {
  if (isStopped) {
    breakMinutesValue = parseInt(breakMinutesDiv.innerText);
    breakMinutesDiv.innerText = breakMinutesValue + 1;
  }
}

function getSessionMinutes() {
  return parseInt(sessionMinutesDiv.innerText)
}

function startTimer() {
  if (isStopped) {
    phaseMinutes = getSessionMinutes();
    phaseSeconds = 0;
  } else if (isPaused) {
    
  }
  // initiate or resume phase timer (need to track isPaused?)
}

function resetTimer() {
  sessionMinutesDiv.innerText = 25;
  breakMinutesDiv.innerText = 5;
  isStopped = true;
  isPaused = false;
  // reset phase timer (need to track phase and/or isPaused?)
}

function pauseTimer() {
  if (!isStopped && !isPaused) {
    isPaused = true;
  }
  // pause phase timer
}

function stopTimer() {
  if (!isStopped) {
    isStopped = true;
    isPaused = false;
  }
  // reset phase timer (but not settings; need to track phase and/or isPaused?)
}

function setupTimer() {
  phaseTitleDiv.innerText = phase;
}

const sessionMinutesDiv = document.querySelector('#session-setting-minutes');

const sessionDecrementButton = document.querySelector('#session-decrement img');
sessionDecrementButton.addEventListener('click', decrementSession);

const sessionIncrementButton = document.querySelector('#session-increment img');
sessionIncrementButton.addEventListener('click', incrementSession);

const breakMinutesDiv = document.querySelector('#break-setting-minutes');

const breakDecrementButton = document.querySelector('#break-decrement img');
breakDecrementButton.addEventListener('click', decrementBreak);

const breakIncrementButton = document.querySelector('#break-increment img');
breakIncrementButton.addEventListener('click', incrementBreak);

const startButton = document.querySelector('#start img');
startButton.addEventListener('click', startTimer);

const resetButton = document.querySelector('#reset img');
resetButton.addEventListener('click', resetTimer);

const pauseButton = document.querySelector('#pause img');
pauseButton.addEventListener('click', pauseTimer);

const stopButton = document.querySelector('#stop img');
stopButton.addEventListener('click', stopTimer);

const phaseTitleDiv = document.querySelector('#phase-title');
const phaseTimeDiv = document.querySelector('#phase-time');

setupTimer();
