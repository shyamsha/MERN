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
