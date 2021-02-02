// create array from range

function rangeBetween(firstNum, secondNum) {
  let array = [];
  for (let i = firstNum; i <= secondNum; i++) {
    array.push(i);
  }
  return array;
}

console.log(rangeBetween(1,5))
