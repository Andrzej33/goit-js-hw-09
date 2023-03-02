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
      const currentData = Date.now();


    //   Перевірка чи вибрана дата в майбутньому
    if (pickedData > currentData) {
        startBtn.disabled = false;
        return;
    }
      
      window.alert("Please choose a date in the future")
  },
};

flatpickr("#datetime-picker", options);

const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
// console.log(pickedData,currentData)




