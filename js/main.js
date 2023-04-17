start();

function numberGenerator(quantity) {
  let numbers = [];
  for (let index = 0; index < quantity; index++) {
    numbers.push(index);
  }
  console.log(numbers);
  return numbers
}

function start() {
  console.log(numberGenerator(5));
}

let myName = "elena";
console.log(myName);