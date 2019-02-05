function findWord(string,findWord){
    let find = '';
    let increment = 0;
    let saperate = string.split(' ')
    for (let i = 0; i < saperate.length;i++){
        if (saperate[i]===findWord) {
            find = saperate[i]
            increment += 1;
        }
    }
    let add = find + ' was found ' + increment + ' times.'
    return add
}
