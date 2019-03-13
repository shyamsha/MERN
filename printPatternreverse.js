function printPattern(pattern){
    for (let i = pattern; i >= 1;i++) { 
        let str = ''
        for (let j = i; j >= 1;j--) {
            str += i
        }
         console.log(str)
    }
    return ""
}
