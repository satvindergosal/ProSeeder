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
	
	  loginInterval = setInterval(loginIntervalFun, 30000);
	  function loginIntervalFun()
	  {
		 clearInterval(loginInterval);
		 loginInterval = 0;
		 $.mobile.hidePageLoadingMsg();
		 
		 <!--Unable to communicate with the server popUp Start-->
		 serverNotCommunicate()   //Call to popup.js
		 <!--Unable to communicate with the server popUp End-->
				
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
				dasboardScreenStart()			   			
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