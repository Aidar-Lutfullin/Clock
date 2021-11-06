let titleText = document.querySelector(".title-text");
let clockTime = document.querySelector(".clock-time");

function colorClock() {
  let time = new Date();

  let hours = time.getHours().toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = `0${hours}`;
  }

  if (minutes.length < 2) {
    minutes = `0${minutes}`;
  }

  if (seconds.length < 2) {
    seconds = `0${seconds}`;
  }

  let textStr = Math.floor(Math.random() * 1000000);
  let timeStr = `${hours} : ${minutes} : ${seconds}`;

  titleText.style.color = `#${textStr}`;
  clockTime.textContent = timeStr;
}

colorClock();
setInterval(colorClock, 1000);
