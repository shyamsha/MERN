// multiplying array values and sum

function squareSum(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++) {
        sum += a[i] * a[i];
    }
    return sum;
}
console.log(squareSum([1, 2, 3, 4, 5, 6, 7, 8, 9]));