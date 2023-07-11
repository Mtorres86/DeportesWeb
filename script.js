
	$('.grid').imagesLoaded(function(){
		
		$('.grid').isotope({
		  
		  itemSelector: '.grid-item',
		  layoutMode: 'fitRows'
		});
	});


	
	$('.btn.all').click(function(){
		$('.grid').isotope({
			filter: '*'
		})			
	});

	$('.btn.homepage').click(function(){
		$('.grid').isotope({
			filter: '.homepage'
		})
	});

	$('.btn.ui').click(function(){
		$('.grid').isotope({
			filter: '.ui'
		})
	});

	$('.btn.banner').click(function(){
		$('.grid').isotope({
			filter: '.banner'
		})
	});


	
	$('.btn').click(function(){
		$('.btn').removeClass('on');
		$(this).toggleClass('on');
	});