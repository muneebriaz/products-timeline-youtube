
jQuery(document).ready(function () {

    document.getElementById('products-opener').addEventListener('click', () => {
        document.getElementById('products-wrapper').style.display = 'block'
    })

    document.getElementById('products-closer').addEventListener('click', () => {
        document.getElementById('products-wrapper').style.display = 'none'
    })


});
