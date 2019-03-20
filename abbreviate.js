function abbreviate(string){
    var word='';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === ' ') {
            word = string[0] + '.' + string[i + 1];
           } else if(string[i] ===''){ 
                 word 
             }

        }
    
    return word;
}
