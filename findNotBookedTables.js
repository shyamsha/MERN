function findNotBookedTables(noBook){
    let notBooked = []
    if (noBook.length==0) {
        return 'empty array'
    }
    for (let i = 0; i < noBook.length;i++){
        if (noBook[i]=='not booked') {
         notBooked.push(i)   
        }
    }return notBooked
}
