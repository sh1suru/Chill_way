function ibg(){
	$.each($('.ibg'), function(index, val) {
	if($(this).find('img').length>0){
	$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	}
	});
	}
	ibg();

$(document).ready(function() {
	$('.meny__icon').click(function(event){
		$('.meny__icon,.main__body').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 3,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
				}
			}
		]
    });
});


$(document).ready(function(){
    $('.liberties_slider').slick({
        slidesToShow: 3,
		responsive:[
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
				}
			}
		]
    });
});


$(document).ready(function(){
    $('.clients_slider').slick({
        slidesToShow: 1,
    });
});

$(document).ready(function(){
    $('.features_slider').slick({
		responsive:[
			{
				breakpoint: 786,
				settings: {
					slidesToShow: 1,
				}
			}
		]
    });
});

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);

function checkScreenWidth() {
	if (window.innerWidth >= 768) {
	  document.getElementById("features_slider").classList.add("display_none");
	  document.getElementById("features_row").classList.remove("display_none");
	} else {
	  document.getElementById("features_slider").classList.remove("display_none");
	  document.getElementById("features_row").classList.add("display_none");
	}
}


