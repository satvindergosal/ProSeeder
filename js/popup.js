<!--No Internet Connection Available PopUp Start-->
function badConnectionFun()
{
	$("#loginPage #modal").remove()
	var popUp = '<div id="modal"><div id="heading">Bad Internet Connection!</div><div id="content">';
	popUp += '<p>Unable to find an internet connection.Please try again later.</p>';
	popUp += '</div>'
	popUp += '<div class="popFooter">'
	popUp += '<a href="#" class="ok_Btn2 close" id="no_Btn2">OK</a>'
	popUp += '</div></div>'
	
	
	$("#loginPage").append(popUp);
	
	$('#no_Btn2').bind('click', function() 
	{
		 $("#loginPage #modal").remove(); 
		 $("#loginPage .reveal-modal-bg").remove(); 
		 
	});
	$("#modal").reveal(
	{
		animation:'none',
		animationspeed: 600,
		closeonbackgroundclick: false,
		dismissmodalclass: 'close'
	 });			
}
<!--No Internet Connection Available PopUp End-->

<!--Unable to communicate with the server popUp Start-->
function serverNotCommunicate()
{
	 $("#loginPage #modal").remove()
	 var popUp = '<div id="modal"><div id="heading">Communication Error!</div><div id="content">';
		 popUp += '<p>Unable to communicate with the server. Please try again later.</p>';
		 popUp += '</div>'
		 popUp += '<div class="popFooter">'
		 popUp += '<a href="#" class="ok_Btn2 close" id="no_Btn2">OK</a>'
		 popUp += '</div></div>'
		
		
		 $("#loginPage").append(popUp);
		 $('#no_Btn2').bind('click', function() { 
		 $.mobile.hidePageLoadingMsg();
		 
			 $("#loginPage #modal").remove(); 
			 $("#loginPage .reveal-modal-bg").remove(); 
		 });
		
		 $("#modal").reveal(
		 {
			animation:'none',
			animationspeed: 600,
			closeonbackgroundclick: false,
			dismissmodalclass: 'close'
		 });
		return;
}
<!--Unable to communicate with the server popUp End-->

<!--Missing Login Credentials popUp Start-->
function missingCredentials()
{
	$("#loginPage #modal").remove(); 
            $("#loginPage .reveal-modal-bg").remove();
			var popUp = '<div id="modal"><div id="heading">Missing Login Credentials!</div><div id="content">';
			popUp += '<p>Please enter username and password.</p>';
			popUp += '</div>'
			popUp += '<div class="popFooter">'
			popUp += '<a href="#" class="ok_Btn2 close" id="no_Btn2">OK</a>'
			popUp += '</div></div>'
			
			$("#loginPage").append(popUp);
			
			$('#no_Btn2').bind('click', function() 
			{
				$.mobile.hidePageLoadingMsg();
				 $("#loginPage #modal").remove(); 
				 $("#loginPage .reveal-modal-bg").remove(); 
			});
			
			$("#modal").reveal(
			 {
				animation:'none',
				animationspeed: 600,
				closeonbackgroundclick: false,
				dismissmodalclass: 'close'
			 });
}
<!--Missing Login Credentials popUp End-->