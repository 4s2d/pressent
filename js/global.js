$(document).ready(function () {

    $('.add-btn').on('click', function(){

     	event.preventDefault();
		
		$('.empty-list').css('display','none'); 
		
		$(this).closest('.col-md-4').find('.over').css('display','block');

		var	that = $(this),
    	 	img = that.find("img.pic").addClass('pull-left'),
    		text = that.find("p.title"),
    		price = that.find("span.price").prepend("Best Price: "),
    		seller = that.find("p.seller"),
    		skrepka = $('<img src="img/skrepka1.png" class="skrepka">'),
    		over_item = that.closest("section").find('div.over-item').clone(),
    		brought_item = that.closest("section").find('div.brought-item').clone(),
    		added_item = $('<div class="added-item"/>').prependTo(".wishlist-cart");

		added_item.append(img);
		added_item.append(skrepka);
		added_item.append(text);
		added_item.append(price);
		added_item.append(seller);
		added_item.append(over_item);
		added_item.append(brought_item);
		added_item.find('.brought-item').css('display','none');

	});

	$('section').on('click','.remove-btn', function() {

		event.preventDefault();

		$(this).closest('.added-item').find('.brought-item').css('display','block');
		// $(this).closest('.added-item').remove();

	});
	$('section').on('click','.re-assign-btn', function() {

		event.preventDefault();

		$(this).closest('.added-item').find('.brought-item').css('display','none');
	});
});