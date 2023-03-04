function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    
    setTimeout(() => {
      if (shouldResolve) {
        resolve({position, delay});
        // Fulfill
      } else {
        reject({position, delay});
        // Reject
      }
      //  
    }, delay);
  })
  return promise
}
//  const p = createPromise(4,6000)
// console.log(promise)

// p.then(onSucces).catch(onError)

const form = document.querySelector('.form');

form.addEventListener('submit', evt => {
  evt.preventDefault();

})


const delayDenotation = form.delay;
const stepDenotation = form.step;
const amountDenotation = form.amount;
// const delayDenotation = form.step;
// console.log(form)



//  const promise = new Promise((resolve, reject) => {
//   const shouldResolve = Math.random() > 0.3;
//     setTimeout(() => {
//       if (shouldResolve) {
//         resolve("Success! Value passed to resolve function");
//         // Fulfill
//       } else {
//         reject("Error! Error passed to reject function");
//         // Reject
//       }
//       //  
//     }, 2000);
//  })
  

// promise.then(res => {
//   console.log(res)
// }, error => {
//   console.log(error);
// }
// )


// function promiseTest(delay) { 
//   setTimeout(()=>{})
// }

// function createPromise(amount) {
  
// }