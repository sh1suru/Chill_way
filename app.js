$(function() {

	$("[data-modal1]").on("click", function(event){
		event.preventDefault();
		
		$(modal_resume1).addClass('show');

	});

	$(modal_resume1).on("click", function() {

		$(modal_resume1).removeClass('show');

	});


	$("[data-modal2]").on("click", function(event){
		event.preventDefault();
		
		$(modal_resume2).addClass('show');

	});

	$(modal_resume2).on("click", function() {

		$(modal_resume2).removeClass('show');

	});


	$("[data-modal3]").on("click", function(event){
		event.preventDefault();
		
		$(modal_resume3).addClass('show');

	});

	$(modal_resume3).on("click", function() {

		$(modal_resume3).removeClass('show');

	});


	$("[data-modal4]").on("click", function(event){
		event.preventDefault();
		
		$(modal_resume4).addClass('show');

	});

	$(modal_resume4).on("click", function() {

		$(modal_resume4).removeClass('show');

	});

	
});


