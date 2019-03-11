function printPattern(num) {
    let pattern = ""
    for (let i = 1; i < num; i++) {
        let str = ''
        for (let j = 0; j <= i; j++) {
            str += i
        }
        pattern += str
    }
    return pattern
}
console.log(printPattern(5));
