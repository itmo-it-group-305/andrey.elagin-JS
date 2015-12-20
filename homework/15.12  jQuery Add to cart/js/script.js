jQuery(document).ready(
    function() {
        var basket = {
            price: 0,
            counter: 0,
            positionNumber: 1,
            totalPrice: 0,

            init: function () {
                jQuery('.stuff').on('click', 'button', basket.addToCart);
                jQuery('.basket').on('click', '.basket-delete', basket.delFromCart);
            },
            addToCart: function (e) {
                var elem = jQuery(e.toElement);
                var newElem = elem.closest('div.stuff');
                var productName = newElem.attr('product-name');
                var price = newElem.attr('price');

                var tempStr = '<div class="some-wrap col-12"><div class="basket-stuff col-6" id="basket-stuff">' +
                    '<p>{{positionNumber}} {{productName}}</div><div class="quantity col-2 " id="quantity">' +
                    '<p>количество</div><div class="basket-price-wrap col-2">' +
                    '<div class="basket-price col-12" id="price" price="{{price}}">{{price}}</div>' +
                    '</div><div class="basket-empty col-2">' +
                    '<button class="basket-delete" price="{{price}}">x</button></div></div>';

                var dataTemp = {
                    "positionNumber": function() {
                        return basket.positionNumber;
                    },
                    "productName": function() {
                        return productName;
                    },
                    "price": function() {
                        return price;
                    }
                };

                var content = Mustache.render(tempStr, dataTemp);
                jQuery('.basket-wrap').append(content);
                basket.positionNumber++;
                basket.totalPrice += +price;
                jQuery('.total-sum').html('Итого: ' + basket.totalPrice);
            },
            delFromCart: function (e) {
                var elem = jQuery(e.toElement);
                var currentElem = elem.parent('div.basket-empty').prev();
                var priceNode = currentElem.children();
                var currentWrap = jQuery(e.target).closest('.some-wrap');
                var currentPrice = priceNode.attr('price');
                console.log(currentPrice);
                console.log(priceNode);
                basket.positionNumber--;
                basket.totalPrice -= +currentPrice;
                jQuery('.total-sum').html('Итого: ' + basket.totalPrice);
                currentWrap.remove();
            },
            priceUpdate: function () {
            },
            changeQuantity: function () {
            },
            discount: function () {
            },
            printExcel: function () {
                //jQuery.ajax({
                //    'type': 'POST',
                //    'url': '/dir/myscript.php',
                //    'contentType': 'json',
                //    'data': {
                //        'login': jQuery('#login').val(),
                //        'passw': jQuery('#passw').val()},
                //    'cache': false,
                //    'success': function(html) {
                //        if (html.length) {
                //            //ololo
                //        }
                //    }
                //})
            }
        };

        basket.init();
        basket.printExcel();
    });