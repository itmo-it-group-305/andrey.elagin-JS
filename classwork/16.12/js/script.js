jQuery(document).ready(
    function() {

        var counter = 0;

        jQuery('#button-add').on('click', function(e) {
            var elem = jQuery(this.toElement);
            console.log(elem);
            var name = elem.attr('name');
            console.log(name);
            var price = elem.attr('price');
            var str = '<span>' + 'Наименование: ' + name + ' Цена: ' + price + '</span>';
            counter += +price;
            jQuery('#basket').append(str);
            console.log(counter);
        });
        jQuery('#button-remove').on('click', function(e) {
            jQuery('#basket').empty();
        })
});

