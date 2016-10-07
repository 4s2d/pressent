$(document).ready(function () {


    $(".add-to-list-btn").click(function (e) {
        e.preventDefault();
        $(".add-to-list-btn").removeClass('active');

        $(this).closest('.sell-list__inner').find(".added-goods").addClass('active');

        $(this).closest('.chose_presents').find(".present-form-add__empty").addClass('no-active');

        $(this).closest('.sell-list__item').addClass('added');


        //thi add block with content to added-products
        $('.added-products').append('<div class="type-off-product" />');

        var this_parent = $(this).closest('.sell-list__inner');

        var this_full_text = this_parent.find('.full-text').clone().addClass('full-text-added');

        var this_full_img = this_parent.find('.add-too-list img').clone().addClass('added-product__img');
        var this_full_price = this_parent.find('.price').clone().addClass('added-product__price').prepend("Best Price: ");

        var this_full_amazone = $(this).closest('.sell-list__add-to-list').find('p').clone();
        var this_products_menu = $(this).closest('.chose_presents').find('.added-products__item-menu').clone();
        var new_el = $('<div class="type-off-product" />').prependTo('.added-products');

        new_el.append(this_full_img);
        new_el.append(this_full_text);
        new_el.append(this_full_price);
        new_el.append(this_full_amazone);
        new_el.append(this_products_menu);


    });
});
