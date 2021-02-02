// remove specified array element

function removeArrayElement(array, value) {
  let index = array.indexOf(value);
  if (index === -1) {
    return "invalid input";
  } else {
    array.splice(index, 1);
  }
  return array;
}
console.log(remove([2, 3, 5, "g", 65, 6], "g"));
