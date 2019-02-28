function removeArrayElements(aray,number){
//type code here
    for (let i = 0; i < aray.length;i++) { 
        if (aray[i] == number) {
    aray.splice(i,1)
}
    }
    return aray
}
