// remove array specified element

function removeArrayElements(array, number) {
  //type code here
  for (let i = 0; i < array.length; i++) {
    if (array[i] == number) {
      array.splice(i, 1);
    }
  }
  return array;
}

console.log(removeArrayElements(['a',1,2,'5'],5))