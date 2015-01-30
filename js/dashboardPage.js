function dasboardScreenStart()
{
	$('#loginId').text()
	$('#loginId').text($('#username').val())	
	$('.myEvents').addClass('heighlight')
	
	$.mobile.changePage("#dashBoardSection", {transition: "slide"})	
	
	$('.topheaderBtns span').click(function(e) {
		var getIndex = $(this).index()
        var getClass = $(this).attr('class')
		
		for(var i=0;i<$('.topheaderBtns span').length;i++)
		{
			$('.topheaderBtns span').removeClass('heighlight')
		}
		
		$('.'+getClass).addClass('heighlight')
		
    });
	
}