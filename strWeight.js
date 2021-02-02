// both string chars is equal or not

function strWeight(str1, str2) {
    var alpha = ["", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var s1 = 0;
    var s2 = 0;
    var str = '';
    for (var i = 0; i < str1.length; i++) {
        for (var j = 0; j < alpha.length; j++) {
            if (str1[i] === alpha[j]) {
                s1 += j;
            }
        }
    }
    for (var p = 0; p < str2.length; p++) {
        for (var q = 0; q < alpha.length; q++) {
            if (str2[p] === alpha[q]) {
                s2 += q;
            }
        }
    }
    if (s1 === s2) {
        return 'equal';
    } else if (s1 > s2) {
        return 1;
    } else if (s1 < s2) {
        return 2;
    }

}
console.log(strWeight('batman', 'manbat'));
console.log(strWeight('batman', 'manbasl'));
console.log(strWeight('', ''));
console.log(strWeight('batman', 'manbas'));

