function fakeBinary(a) {
    var digit = '';
    for (var i = 0; i < a.length; i++) {
        if (a[i] < 5) {

            digit += '0';

        } else {
            digit += '1';
        }
    }
    return digit;
}
console.log(fakeBinary('3557'));
