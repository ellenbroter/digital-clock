const hoursContainer = document.querySelector(".hours-container");
const minutesContainer = document.querySelector(".minutes-container");
const secondsContainer = document.querySelector(".seconds-container");

const loadTime = () => {
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
  minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
};

window.addEventListener("DOMContentLoaded", () => {
  setInterval(loadTime, 1000);
});
