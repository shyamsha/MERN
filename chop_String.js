function stringChop(string,number){
    let lengthOfChoped = []
    let str=number
    for (let i = 0; i < string.length; i++){
       
            lengthOfChoped.push(string.slice(i, number))
        i = number
        i--
        number+=str   
    }
    return lengthOfChoped
}
