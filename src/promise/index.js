const promise = new Promise((resolve, reject) => {
  console.log('promise');
  resolve("Promise resolve");
});

const cows = 15;

const countCows = new Promise((resolve, reject) => {
  console.log('countCows');
  if(cows > 10) {
    resolve(`We have ${cows} cows on the farm`);
  } else {
    reject('We have not enough cows');
  }
});

countCows.then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
}).finally(() => {
  console.log('Promise finally');
});