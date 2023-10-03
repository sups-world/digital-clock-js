const hourElement = document.getElementById("hour");
const minuteElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");
const ampmElement = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  // to show 01,02 in hours
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourElement.innerText = h;
  minuteElement.innerText = m;
  secondElement.innerText = s;
  ampmElement.innerText = ampm;

  //   infinite loop running every 1 second to update seconds
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
