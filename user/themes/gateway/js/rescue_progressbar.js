jQuery(function($){
	$(document).ready(function(){

		$('.rescue-progressbar').waypoint(function() {

			$('.rescue-progressbar').each(function(){
				$(this).find('.rescue-progressbar-bar').animate({ 
					width: $(this).attr('data-percent') }, 1500 );
			});

		}, { offset: 500 });
        
        $("input:radio").change(function(){
            $('#product-button').data('item-custom1-value', $(this).attr("id"));
                        $('#product-price').html( parseFloat($(this).val() || 0) + parseFloat($('#product-price-original').attr('value')) + '€' );
            
        });
	});
    
});


