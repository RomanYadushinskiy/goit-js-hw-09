import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const inputRef = document.querySelector('#datetime-picker');
const btnStartRef = document.querySelector('[data-start]');
const daysRef = document.querySelector('[data-days]');
const hoursRef = document.querySelector('[data-hours]');
const minutesRef = document.querySelector('[data-minutes]');
const secondsRef = document.querySelector('[data-seconds]');

Notiflix.Notify.init({
  clickToClose: true,
});

btnStartRef.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      btnStartRef.disabled = false;
    }
  },
};

flatpickr(inputRef, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, 0);
}

btnStartRef.addEventListener('click', () => {
  let timerRef = setInterval(() => {
    let countdownTimer = new Date(inputRef.value) - new Date();
    btnStartRef.disabled = true;
    if (countdownTimer > 0) {
      let timeObject = convertMs(countdownTimer);
      daysRef.textContent = addLeadingZero(timeObject.days);
      hoursRef.textContent = addLeadingZero(timeObject.hours);
      minutesRef.textContent = addLeadingZero(timeObject.minutes);
      secondsRef.textContent = addLeadingZero(timeObject.seconds);
    } else {
      Notiflix.Notify.success('Time is out!');
      clearInterval(timerRef);
    }
  }, 1000);
});

