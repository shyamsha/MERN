arr = [1, 2, 3, 4, 4, 6,6, 45, 25]
arr1 = []
for (let i = 0; i < arr.length; i++) {
    if (!arr1.includes(arr[i])) {
        arr1.push(arr[i])
    } else {
        console.log(arr[i])
    }

}
console.log(arr1)
