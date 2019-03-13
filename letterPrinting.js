function letterPrinting(a){
    let alpha = ['a', 'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < alpha.length; i++) { 
        var num = ''
        if (i < a) { 
            for (let j = 0; j <= i; ++j) { 
                num += alpha[i].toUpperCase();
            }
        } else {
            break;
        }
        console.log(num)
    }
    return ''
}
