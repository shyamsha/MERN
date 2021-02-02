// in the sentence first later will be un capitalized and remind same

function unCap(string){
    var uncapitalized = [];
    var separate = string.split(' ')
    if (string==='') {
        return 'empty string'
    } else {
         for (var i = 0; i < separate.length; i++){
           uncapitalized.push(separate[i].charAt(0).toLowerCase()+separate[i].slice(1))
        }
    }
    let name = uncapitalized.join(' ')
    return name
}

console.log(unCap('JavascriptJ'));
