function indexOf(array, index) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === index){
            return i
        }
    }

    return -1
}
