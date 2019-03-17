function count(string,substr){
    var convertStr = string.toLowerCase().split(" ");
    var count = 0;
    for (var i = 0; i < convertStr.length;i++){
        if (convertStr[i]===substr) {
            count += 1;
        }
    } return count;
}
