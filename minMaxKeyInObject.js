function minMaxKeyInObject(obj){
let maxmin=[]
    let key = Object.keys(obj)
    maxmin.push(Math.min(...key))//spread operator
   maxmin.push(Math.max(...key))
    return maxmin

}
