function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
const btnStart = document.querySelector('[data-start]');
const btnStop = document.querySelector('[data-stop]');
let intervalid;

btnStart.addEventListener('click', () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    btnStart.disabled = true;
    btnStop.disabled = false;
});
btnStop.addEventListener('click', () => {
    clearInterval(intervalId);
    btnStart.disabled = false;
    btnStop.disabled = true;
});