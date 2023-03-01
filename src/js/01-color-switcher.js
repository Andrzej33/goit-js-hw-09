
 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');

let timerId = null;

// console.log(startBtn,stopBtn,document)




const start = () => {
  timerId = setInterval(() => {
    // const createRandomColor = getRandomHexColor();
    body.style.backgroundColor = getRandomHexColor();
    
  }, 1000)
};
const stop = () => { 
  clearInterval(timerId)
};

startBtn.addEventListener('click', start);
stopBtn.addEventListener('click', stop);
