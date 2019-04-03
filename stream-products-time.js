
//called by formatTime after formatting time to show products
function productDisplay(min, sec) {
    var listOfProductsShowing = []
    products.forEach((product, index) => {
        let productTimeInMins = parseInt(product.timeIn.split(":")[0])
        let productTimeInSecs = parseInt(product.timeIn.split(":")[1])
        let productTimeOutMins = parseInt(product.timeOut.split(":")[0])
        let productTimeOutSecs = parseInt(product.timeOut.split(":")[1])
        if (min == productTimeInMins && sec == productTimeInSecs) {
            document.getElementById('products-wrapper').style.display = 'block'
            if (listOfProductsShowing.indexOf(product) == -1) {
                listOfProductsShowing.push(product);
                productsAvailable = true;
            }
        }

        if (min == productTimeOutMins && sec == productTimeOutSecs) {
            document.getElementById('products-wrapper').style.display = 'none'
            return min + ":" + sec
        }
    })

    listOfProductsShowing.forEach((product, index) => {
        if (!document.getElementById(product.product.id)) {
            jQuery("#products-wrapper").append(getHTMLOfProductObject(product));
        }
    })
 
}

function getHTMLOfProductObject(product) {
    return '<div class="card" id="' + product.product.id + '">' +
        '<img src="' + product.product.image + '" alt="Denim Jeans" class="product-image" style="width:100px">' +
        '<h4>' + product.title + '</h4>' +
        '<p class="price">$' + product.product.price + '</p>' +
        '<p><button class="btn btn-primary btn-sm"><i class="fa fa-shopping-cart"></i>Add to Cart</button></p></div>';
}
