function doubleCola(name,first){
    for (i = 1; i < first;i++){
        name.splice(5, 0, name[0])
        name.splice(0, 1)
        
    }
    return name[0]
}
