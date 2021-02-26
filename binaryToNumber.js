function binaryToNumber(a) {
  var sum;
  for (var i = 0; i < a.length; i++) {
    // if (a[i] === a[0] || a[i] === a[1] || a[i] === a[2] || a[i] === a[3]) {
    sum =
      a[0] * Math.pow(2, 3) +
      a[1] * Math.pow(2, 2) +
      a[2] * Math.pow(2, 1) +
      a[3] * Math.pow(2, 0);
    // }
  }
  return sum;
}
console.log(binaryToNumber([0, 1, 0, 1]));
