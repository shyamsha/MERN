array1 = [1, 0, 2, 3, 4];
array2 = [3, 5, 6, 7, 8, 13];
d = []
for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
        if (array1.length > array2.length) {
            array2.push(0)
        } else if (array2.length > array1.length) {
            array1.push(0)
        }
        if (i == j) {
            d.push(array1[i] + array2[j])
        }
    }
}
console.log(d)
//[4, 5, 8, 10, 12, 13]
