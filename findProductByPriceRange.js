function findProductByPriceRange(product,price1,price2){
    let priceRange = product.filter(function (item) {
    return item.price>price1&&item.price<price2
    })
return priceRange
}
