function findUnique(array) {
  let unique;
  if (array.length == 0) {
    return null;
  } else {
    unique = array.filter(function (value, index, self) {
      return self.indexOf(value) > 2;
    });
  }
  let num = Number(unique);
  return num;
}

console.log(findUnique([1,1,2,3,3]))