$(document).ready(function(event) {

    $('.menu-btn').on('click',function(event){
		
		event.preventDefault();

		$('.responsive-menu').toggleClass('active');
	});

    
    // Hover on products 

	$('.item').hover(
		function(event) {

	    	$(this).css('opacity',1).siblings().find('.product').css('opacity',0.1);
		}, 
		function(event) {

	    	$(this).siblings().find('.product').css('opacity',1);
		}
	);

    // Adding data-id to product

    $('section .item').each(function(event){
   	
   		$(this).attr('data-id',$(this).index()+1);
 	});
    
    // Adding new block in wishlist cart 

    $('.add-btn').on('click', function(event){

     	event.preventDefault();

		$('.empty-list').css('display','none'); 
		
		$(this).closest('.item').find('.over').addClass('active');

		var	that = $(this),
			same_id = that.closest("div.item").attr('data-id'),
			already_added = that.closest('div.item').attr('data-name');

		if (already_added != 'already-added') {

			$(this).closest('.item').attr('data-name','already-added');

			var	img = that.closest("div.item").find("img.pic").clone().addClass('pull-left'),
	    		text = that.closest("div.item").find("p.title").clone(),
	    		price = that.closest("div.item").find("span.price").clone().prepend("Best Price: "),
	    		seller = that.closest("div.item").find("p.seller").clone(),
	    		skrepka = that.closest("div.item").find("img.skrepka"),
	    		over_item = that.closest("section").find('.hidden-items .over-item').clone(),
	    		brought_item = that.closest("section").find('.hidden-items .brought-item').clone(),
	    		added_item = $('<div class="added-item"/>').prependTo(".wishlist-cart");

			added_item.attr('data-id',same_id);
			added_item.append(img);
			added_item.append(skrepka);
			added_item.append(text);
			added_item.append(price);
			added_item.append(seller);
			added_item.append(over_item);
			added_item.append(brought_item);
			added_item.find('.brought-item').removeClass('active');
		}

		else {

			$('div.added-item[data-id="' + same_id + '"] .brought-item').removeClass('active');	
		}
	});

    // Remove/Re-assign action

    $('section').on('click','.re-assign-btn', function(event) {

		event.preventDefault();

		var same_id = $(this).closest('.added-item').attr('data-id');

		$(this).closest('.added-item').find('.brought-item').removeClass('active');
		$('div.item[data-id="' + same_id + '"] .over').addClass('active');
	});

	$('section').on('click','.remove-btn', function(event) {

		event.preventDefault();

		$(this).closest('.added-item').find('.brought-item').addClass('active');
		// $(this).closest('.added-item').remove();

		var same_id = $(this).closest('.added-item').attr('data-id');

		$('div.item[data-id="' + same_id + '"] .over').removeClass('active');
	});

   // Show/Hide excerpt

    $('.articles-content').hide();

    $('a.read-more').on('click', function(event) {

    	event.preventDefault();

        $(this).parent('.articles-excerpt').toggle();
        $(this).closest('.wishlist-article').find('.articles-content').toggle();
    });
    
    $('a.read-less').on('click',function(event) {

    	event.preventDefault();

        $(this).parent('.articles-content').toggle();
        $(this).closest('.wishlist-article').find('.articles-excerpt').toggle();
    });
});