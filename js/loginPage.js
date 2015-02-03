var loginInterval
function loginCheck()
{
	$("#loginPage a.sign_btn").addClass('highLightSign');
	$.mobile.showPageLoadingMsg();
	
	var signHighLight = setInterval(signBtnHighLight, 1000);
	  function signBtnHighLight()
	  {
		 clearInterval(signHighLight);
		 signHighLight = 0;		 
		 $("#loginPage a.sign_btn").removeClass('highLightSign');
	  }

    $('input').blur();
	$('#signIn').focus();

	if(navigator.onLine)
	{
		var _uName = $("#username").val();
		var _pWord = $("#password").val();
		
		if(_uName =='' || _pWord =='')
		{
			clearInterval(loginInterval);
   			<!--Missing Login Credentials popUp Start--> 
			missingCredentials()    //Call to popup.js
			<!--Missing Login Credentials popUp End-->
			 
			 $('#signIn').bind('click', function() { loginCheck() });
		  }
		  else
		  {
			if(_uName != '' && _pWord!= '') 
			{
				
				 $.ajax({
					type: "POST",          
					url: "http://testangel.proseederstaging.com/api/auth/login?memberEmail=mobile@proseeder.com&siteId=1372453360006&password=goMobile2015",          
					contentType: "application/json; charset=utf-8",
					dataType: "json",
					headers : {
						licenseKey: 'Rqe9y9UDU5fQw2ox6WwuMSwNh3-lJAcBySazlA'
					},
					success: function (msg) {
					  // alert('Success!' +JSON.stringify(msg));
					   dasboardScreenStart()
					},
					error: function (errormessage) {		
					   //alert("error" +JSON.stringify(errormessage)); //do something else
		
					}
				});			   			
			}
		  }
	}
	else
	{
		badConnectionFun()
		 		 
	    $('#signIn').bind('click', function()
		 { 		  
		  if(navigator.onLine)
			{
			  loginCheck()
			}
			else
			{				
			  badConnectionFun() //Call to popup.js			
			}
		 });	
	}
}