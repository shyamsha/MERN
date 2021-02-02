// write two array indexes sum

function sumTwoArrayIndexes(array1,array2){
    sum = []
    for (let i = 0; i < array1.length; i++){
        for (let j = 0; j < array2.length; j++) {
            if (array1.length > array2.length) {
                array2.push(0)
            } else if (array2.length > array1.length) {
                array1.push(0)
            }
            if (i==j) { 
                sum.push(array1[i]+array2[i])
            }
        }
    }
return sum
}

console.log(sumTwoArrayIndexes([0,1,2,3],[4,5,6,7]))