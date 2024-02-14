
let container;
let days = 0;
let hour = 23;
let minutes = 59;
let seconds = 50;
let milisec =0;
let isRunning = false;

function startcontainer() {
  if (!isRunning) {
    container = setInterval(updatecontainer, 10);
    isRunning = true;
  }
}

function stopcontainer() {
  clearInterval(container);
  isRunning = false;
}

function resetcontainer() {
  clearInterval(container);
  isRunning = false;
  days = 0;
  hour = 0;
  minutes = 0;
  seconds = 0;
  milisec=0;
  updatedisplay();
}

function updatecontainer() {
  milisec++;
  if (milisec === 100) {
    seconds++;
    milisec = 0;
  }
  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }
  if (minutes === 60) {
    hour++;
    minutes = 0;
  }
  if (hour === 24) {
    days++;
    hour = 0;
  }
  updatedisplay();
}


function updatedisplay() {
    document.getElementById('days').innerText = formatTime(days);
  document.getElementById('hour').innerText = formatTime(hour);
  document.getElementById('minutes').innerText = formatTime(minutes);
  document.getElementById('seconds').innerText = formatTime(seconds);
  document.getElementById('milisec').innerText = formatTime(milisec);
}

function formatTime(time) {
  return (time < 10 ? '0' : '') + time;
}

document.getElementById('start').addEventListener('click', startcontainer);
document.getElementById('stop').addEventListener('click', stopcontainer);
document.getElementById('reset').addEventListener('click', resetcontainer);