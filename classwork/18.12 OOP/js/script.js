//var obj = {
//    count: 0,
//    set: function(value) {
//        this.count = value;
//    },
//    get: function() {
//        return this.count;
//    }
//};

var basket = {
    price: 0,
    init: function() {
        jQuery.('.button').on('click', basket.addToCart);
        jQuery.('container').on('click', 'close', basket.delFromCart);
    },
    addToCart: function() {},
    delFromCart: function() {},
    priceUpdate: function() {},
    changeQuantity: function() {},
    discount: function() {},
    printExcel: function() {}
};