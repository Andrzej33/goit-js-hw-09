function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve("Success! Value passed to resolve function");
        // Fulfill
      } else {
        reject("Error! Error passed to reject function");
        // Reject
      }
      // return 5
    }, delay);
  })
}



const form = document.querySelector('.form');

form.addEventListener('submit', createPromise)


const delayDenotation = form.delay;
const stepDenotation = form.step;
const amountDenotation = form.amount;
// const delayDenotation = form.step;
// console.log(form)