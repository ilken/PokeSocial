$(document).ready(function(){
	$('.nav-item').click(function(e){
		$('section').removeClass('active');

		var section = $(e.target).attr('href');
		$(section).addClass('active');
	});

	var App = new PokeSocialApp();
	App.init();
});
