import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //   console.log(selectedDates[0]);
      
      
    //   Створення змінних для відображення поточного часу і часу вибраного користувачем в мілісекундах
      
      
    const pickedData = selectedDates[0].getTime();
      // const currentData = Date.now();


    //   Перевірка чи вибрана дата в майбутньому
    if (pickedData > Date.now()) {
        startBtn.disabled = false;
        return;
    }
      
      window.alert("Please choose a date in the future")
  },
};



flatpickr("#datetime-picker", options);
const fp = document.querySelector("#datetime-picker")._flatpickr;


const refs = {
  day: document.querySelector('span[data-days]'),
  hour: document.querySelector('span[data-hours]'),
  minute: document.querySelector('span[data-minutes]'),
  second: document.querySelector('span[data-seconds]'),
  
}

// Встановлення початкового значення лічильника ш очищення input  при перезавантаженні сторінки


let timerId = null;
fp.clear();





const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
// console.log(pickedData,currentData)

startBtn.addEventListener('click', onTimerClick)


function onTimerClick() {
startBtn.disabled = true;
  if (timerId)  return;
  const futureData = fp.selectedDates[0].getTime();
  
  timerId = setInterval(() => {
    const currentData = Date.now();
    const ms = futureData - currentData;
    
     if (ms <= 0)  return;
    const generalTime = convertMs(ms);
    changedTimeLeft(generalTime)

   },1000)
  // console.log(5);
 }


function addLeadingZero(value) {
   return String(value).padStart(2,'0')
};
//  console.log(addLeadingZero(4))

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function changedTimeLeft({ days, hours, minutes, seconds }) {
  refs.day.textContent = `${days}`;
  refs.hour.textContent = `${hours}`;
  refs.minute.textContent = `${minutes}`;
  refs.second.textContent = `${seconds}`;
}
