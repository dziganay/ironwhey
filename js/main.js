$(document).ready(function() {  
	$("#myCarousel").swiperight(function() {  
		$("#myCarousel").carousel('prev');  
	});  
	$("#myCarousel").swipeleft(function() {  
		$("#myCarousel").carousel('next');  
	});
	$(document).on('click touchend', 'ul.positionIndicators li', function(e){
		e.preventDefault();
		var thisIndex = $(this).index();
		$(this).addClass('active');
		$('#myCarousel').carousel(thisIndex);
	});

	function countCarouselItems(){
		return $('.carousel-inner').find('.item').length;
	}
	function getCarouselActive(){
		return $('.carousel-inner').find('.item.active').index();
	}
	function setIndexIndicators(){
		var i = theCarousel.totalItems;
		while(i--){
			theCarousel.view.indicators.append( theCarousel.templates );
		}
		theCarousel.view.indicators.find('li:eq('+ getCarouselActive() +')').addClass('active');
	}
	function setCarouselTotal(){
		theCarousel.view.counter.totalIndex.text( theCarousel.totalItems );
	}
	function setCarouselActiveIndex(){
		var i = getCarouselActive();
		theCarousel.view.indicators.find('li').removeClass('active');
		theCarousel.view.indicators.find('li:eq('+i+')').addClass('active');
		theCarousel.view.counter.activeIndex.text( ++i);
	}

	var theCarousel = {};
	theCarousel.templates = "<li class='pull-left'></li>";
	theCarousel.view = $("#myCarousel");
	theCarousel.view.indicators = $('.positionIndicators');
	theCarousel.view.counter = $('.carouselCounter');
	theCarousel.view.counter.activeIndex = theCarousel.view.counter.find('span:eq(0)');
	theCarousel.view.counter.totalIndex = theCarousel.view.counter.find('span:eq(1)');
	theCarousel.totalItems = countCarouselItems();

	setCarouselTotal();
	setCarouselActiveIndex();
	setIndexIndicators();
	theCarousel.view.on('slid', setCarouselActiveIndex );
	
	var heroVideo = $('#heroVideo');
	heroVideo.on('play', function(){
		$('#myCarousel').carousel('pause');
	});
	theCarousel.view.on('slide', function(){
		heroVideo[0].pause();
	});

	var $modalVideo = $('#modalVideo');
	var $modalCarousel = $('#modalCarousel');
	
	$modalVideo.on('play', function(){
		$modalCarousel.carousel('pause');
	});
	$modalCarousel.on('slide', function(){
		$modalVideo[0].pause();
	});

	$(document).on('click touchend', '.gallItem img', function(e){
		var gallItemIndex = ($(this).parent().index()) - 1;
		$('.modalOverlay, .galleryModal').addClass('showGalleryModal');
		$modalCarousel.carousel(gallItemIndex);
		$modalCarousel.carousel('pause');
	});
	$(document).on('click touchend', '.modalOverlay', function(e){
		$('.modalOverlay, .galleryModal').removeClass('showGalleryModal');
	});
});