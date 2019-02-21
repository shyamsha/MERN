function findProduct(product,productId){
    if (productId>10) {
return 'No product found with id = '+productId    
}
    let id = product.find(function (item) {
    return item.id==productId
    })
return id
}
