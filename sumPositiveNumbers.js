// You get an array of numbers, return the sum of all of the positives ones.

function sumPos(sum){
let add=0
    if (sum.length == 0) {
    return 0
    }

    for (let i = 0; i < sum.length;i++){
        if (sum[i]>0) {

            add += sum[i];
    }

    } return add
}

console.log(sumPos([0,0,-1,1]))