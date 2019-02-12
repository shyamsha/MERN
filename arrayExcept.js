function arrayExcept(array,index){
let value=[]
    for (let i = 0; i < array.length; i++){
        if (!index.includes(i)) {
    value.push(array[i])
}
    }
return value
}
