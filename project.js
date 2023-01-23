$(function(){

$('.accordionDrop').hide();
              $('.accordion').on('click', function(){
			$(this).next().slideToggle("fast");
		})

		$('.accordionDrop').hide();
		$('.accordionHighlight').on('click', function(){
	  $(this).next().slideToggle("fast");
  })



})
