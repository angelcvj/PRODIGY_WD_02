const timeunit = document.querySelectorAll('#timeunit .timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const lapList = document.getElementById('lapList');

let interval;

function hours() {
  let counter = parseInt(timeunit[0].innerHTML);
  counter++;
  timeunit[0].innerHTML = counter < 10 ? `0${counter}` : counter;
}

function minutes() {
  let counter = parseInt(timeunit[1].innerHTML);
  counter++;
  timeunit[1].innerHTML = counter < 10 ? `0${counter}` : counter;

  if (counter == 60) {
    timeunit[1].innerHTML = '00';
    hours();
  }
}

function seconds() {
  let counter = parseInt(timeunit[2].innerHTML);
  counter++;
  timeunit[2].innerHTML = counter < 10 ? `0${counter}` : counter;

  if (counter == 60) {
    timeunit[2].innerHTML = '00';
    minutes();
  }
}

function startTimer() {
  interval = setInterval(() => {
    let counter = parseInt(timeunit[3].innerHTML);
    counter++;
        
    timeunit[3].innerHTML = counter < 10 ? `0${counter}` : counter;
      
    if (counter == 100) {
      timeunit[3].innerHTML = '00';
      seconds();
    }
  }, 10);
}

startBtn.addEventListener('click', () => {
  if (!interval) {
    startTimer();
    startBtn.classList.add('active');
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  startBtn.classList.remove('active');
});

resetBtn.addEventListener('click', () => {
  clearInterval(interval);
  interval = null;
  timeunit.forEach(timer => timer.innerHTML = '00');
  lapList.innerHTML = '';
  startBtn.classList.remove('active');
});

lapBtn.addEventListener('click', () => {
  const lapTime = `${timeunit[0].innerHTML}:${timeunit[1].innerHTML}:${timeunit[2].innerHTML}:${timeunit[3].innerHTML}`;
  const lapItem = document.createElement('li');
  lapItem.textContent = lapTime;
  lapList.appendChild(lapItem);
});
