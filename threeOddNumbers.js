function threeOddNumbers(array){
count=0
    for (let i = 0; i < array.length;i++){
        if (array[i]%2>=1&&array[i]!=array[i+1]) {
        count+=array[i]
    }
    }
    if (count%2!=0) {
    return true
    } else {
        return false
    }

}
