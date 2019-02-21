function findByCategory(product,categoryItem){
    let category = product.filter(function (item) {
    return item.category==categoryItem
    })
return category
}
