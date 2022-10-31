function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

const buttonStart = document.querySelector('button[data-start]');
const buttonStop = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let intervalId = null;

buttonStart.addEventListener('click', () => {
    intervalId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);

    buttonStart.disabled = true;
    buttonStop.disabled = false;
})

buttonStop.addEventListener('click', () => {
    clearInterval(intervalId);

    buttonStart.disabled = false;
    buttonStop.disabled = true;
})