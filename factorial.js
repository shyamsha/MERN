function factorial(fact) {
    let factorial=1
    for (let i = fact-1; i >=0; i--) {
        factorial+=factorial*i
    }
     return factorial
}
