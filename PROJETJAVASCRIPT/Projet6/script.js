function countdown() {
  var now = new Date();
  var year = now.getFullYear()  -1; // L'année prochaine
  var eventDate = new Date(year, 12, 1); // Le 1er janvier
  var currentTime = now.getTime();
  var eventTime = eventDate.getTime();
  var remTime = eventTime - currentTime;

  var sec = Math.floor(remTime / 1000);
  var min = Math.floor(sec /   60);
  var hours = Math.floor(min / 60);
  var days = Math.floor(hours / 24);

  hours %= 24;
  min %= 60;
  sec %= 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = min;
  document.getElementById("seconds").textContent = sec;

  setTimeout(countdown, 1000);
}
countdown();