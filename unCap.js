function unCap(string){
    var uncaptalize = [];
    var saperate = string.split(' ')
    if (string==='') {
        return 'empty string'
    } else {
         for (var i = 0; i < saperate.length; i++){
           uncaptalize.push(saperate[i].charAt(0).toLowerCase()+saperate[i].slice(1))
        }
    }
    let name = uncaptalize.join(' ')
    return name
}
