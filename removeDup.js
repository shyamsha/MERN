function removeDup(string){
    let eachWord = string.split(' ') //spliting each word
    let insert = []
    for (let i = 0; i < eachWord.length;i++)
    { for (let j = i + 1; j < eachWord.length;j++)
        {
        if (eachWord[i] == eachWord[j]) {
            if (insert.indexOf(eachWord[j]) < 0) {
                insert.push(eachWord[j])
            }
      }
    }
    }
    let join=insert.join(' ') //join all words together 
    return join
}
