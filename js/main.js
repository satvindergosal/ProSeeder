$(document).ready(function(e)
{	
	  init();  // For Local Testing	 
	//document.addEventListener("deviceready",onDeviceReady,false);	
});
$(document).bind("mobileinit", function() 
{
     //Make your jQuery Mobile framework configuration changes here!
     $.mobile.allowCrossDomainPages = true;
})
function onDeviceReady()
{   
    if(parseFloat(window.device.version) >= 7.0) 
	{
       document.body.style.marginTop = "20px";	  
    }
			
	init();
	app.initialize();
} 
function init()
{
    $('.sign_btn').bind('click', function() 
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
function goToHomePage()
{
	for(var i=0;i<$('.topheaderBtns span').length;i++)
	{
		$('.topheaderBtns span').removeClass('heighlight')
	}
	$.mobile.changePage("#loginPage", {transition: "slide",reverse: true})
}
