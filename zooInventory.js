function zooInventory(index) {
  var zoo = [];
  for (let i = 0; i < index.length; i++) {
    let string = `${index[i][0]} the ${index[i][1][0]} is ${index[i][1][1]}`;
    zoo.push(string);
  }
  return zoo;
}
console.log(zooInventory([[1,2],[4,3],[5,6]]))