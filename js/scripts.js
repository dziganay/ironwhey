$(document).ready(function(){
	
	$(document).on('click touchend', '.items.gallery a', function(e){
		e.preventDefault();
		var gallItemIndex = ($(this).index());
		$('.overlay, .modal').show();
		$('.modal').find('.frame').hide();
		$('.modal').find('.frame:eq('+gallItemIndex+')').show();
	});
	$(document).on('click touchend', '.overlay', function(e){
		$('.overlay, .modal').hide();
	});
	
});