function startsWith(string,startstring){
    let saperate = string.split(' ')
    for (var i = 0; i < saperate.length;i++){
        if (saperate[i] === startstring) {
            return true
        }
        else {
            return false
        }
    }
}
