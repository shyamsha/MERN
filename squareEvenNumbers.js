// sum of even squares

function squareEvenNumbers(even) {
  let sum = 0;
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 == 0) {
      sum += even[i] * even[i];
    }
  }
  return sum;
}

console.log(squareEvenNumbers([1,3,2]));