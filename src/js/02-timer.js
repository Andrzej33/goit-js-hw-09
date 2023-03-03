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
    if (pickedData > currentData) {
        startBtn.disabled = false;
        return;
    }
      
      window.alert("Please choose a date in the future")
  },
};

let currentData = Date.now();

flatpickr("#datetime-picker", options);
const fp = document.querySelector("#datetime-picker")._flatpickr;


const refs = {
  day: document.querySelector('span[data-days]'),
  hour: document.querySelector('span[data-hours]'),
  minute: document.querySelector('span[data-minutes]'),
  second: document.querySelector('span[data-seconds]'),
  
}
// console.log(refs.taymerHour)





const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
// console.log(pickedData,currentData)

startBtn.addEventListener('click', onTimerClick)


function onTimerClick() {
  const futureData = fp.selectedDates[0].getTime();
   const ms = futureData - currentData
   setTimeout(() => {
console.log(ms);
   },1000)
  // console.log(futureData)
 }



// function convertMs(ms) {
//   // Number of milliseconds per unit of time
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;

//   // Remaining days
//   const days = Math.floor(ms / day);
//   // Remaining hours
//   const hours = Math.floor((ms % day) / hour);
//   // Remaining minutes
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   // Remaining seconds
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);

//   return { days, hours, minutes, seconds };
// }


