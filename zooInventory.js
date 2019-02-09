function zooInventory(index){
    var zoo=[]
    for (let i = 0; i < index.length; i++){
      let string=`${index[i][0]} the ${index[i][1][0]} is ${index[i][1][1]}`
    zoo.push(string)
}return zoo
}
