function max(max){
    max.sort((i, j) => i - j)
    maxium = max[max.length - 1]
return maxium
}


let numbers = [5, 20, 100, 60, 1];
const maxValue = numbers.reduce((max, curr) => {
    if(curr > max) max = curr;
    return max;
});
console.log(maxValue); // 100