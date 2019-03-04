function anagramCheck(string1,string2){
    let a1 = string1.toLowerCase().split().sort().join('').length
    let b1 = string2.toLowerCase().split().sort().join('').length
    if (a1 == b1) { 
        return true
    }
}
