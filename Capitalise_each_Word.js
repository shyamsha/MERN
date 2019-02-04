function capitalizeWords(string){
    var capitalize=[];
    var saperate = string.split(' ')
    if (string === '') {
        return "empty string"
    }
    else {
    for (var i = 0; i < saperate.length; i++) {
        capitalize.push(saperate[i].charAt(0).toUpperCase() + saperate[i].slice(1))
        }
    }
    let captial=capitalize.join(' ')
    return captial
}
