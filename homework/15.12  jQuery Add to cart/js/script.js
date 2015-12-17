jQuery(document).ready(
    function() {

        var counter = 0;
        var positionNumber = 1;
        var totatlPrice = 0;

        jQuery('.stuff').on('click', 'button', function(e) {
            var elem = jQuery(e.toElement);
            var newElem = elem.closest('div.stuff');
            var productCode = newElem.attr('product-code');
            var productName = newElem.attr('product-name');
            var price = newElem.attr('price');

            var str = '<div class="some-wrap col-12"><div class="basket-stuff col-6" id="basket-stuff">'+
                '<p>' + positionNumber + ' ' + productName + '</div>' + '<div class="quantity col-2 " id="quantity">' +
                '<p>' + 'количество' + '</div>' + '<div class="basket-price-wrap col-2">' +
                '<div class="basket-price col-12" id="price" price="'+price+'">' + price + '</div>' +
                '</div>' + '<div class="basket-empty col-2">' +
                '<button class="basket-delete">x</button>' + '</div></div>';

            jQuery('.basket-wrap').append(str);
            positionNumber++;
            totatlPrice += +price;
            jQuery('.total-sum').html('Итого: ' + totatlPrice);

            //counter += +price;
            //jQuery('#basket').append(str);
            //console.log(counter);
        });

        jQuery('.basket').on('click', '.basket-delete',  function(e) {
            //todo сделать долбанный карентпрайс
            var elem = jQuery(e.toElement);
            var currentPrice = elem.closest('#price');
            var currentWrap = jQuery(e.target).closest('.some-wrap');
            //var currentPrice =  jQuery(e.target).closest('.basket-price');
            console.log(currentPrice);
            positionNumber--;
            //totatlPrice -= +currentPrice;
            //console.log('after' + totatlPrice);
            currentWrap.remove();
        })
    });

