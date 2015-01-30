
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		
        app.receivedEvent('deviceready');
        var pushNotification = window.plugins.pushNotification;
		if (device.platform == 'android' || device.platform == 'Android' || device.platform == 'amazon-fireos' ) 
		{
            pushNotification.register(app.successHandler, app.errorHandler,{"senderID":"sharp-memento-839","ecb":"app.onNotificationGCM"});
		}
		else
		{
			pushNotification.register(tokenHandler, errorHandler, {"badge":"true","sound":"true","alert":"true","ecb":"onNotificationAPN"});	// required!
		}

    },
	  // handle APNS notifications for iOS        
		 onNotificationAPN: function(e) {
			
			if (e.alert) {
				 $("#app-status-ul").append('<li>push-notification: ' + e.alert + '</li>');
				 // showing an alert also requires the org.apache.cordova.dialogs plugin
				 navigator.notification.alert(e.alert);
			}
				
			if (e.sound) {
				// playing a sound also requires the org.apache.cordova.media plugin
				var snd = new Media(e.sound);
				snd.play();
			}
			
			if (e.badge) {
				pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
			}
		},
            
	
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    // result contains any message sent from the plugin call
    successHandler: function(result) {
        alert('Callback Success! Result = '+result)
    },
    errorHandler:function(error) {
        alert(error);
    },
    onNotificationGCM: function(e) {
        switch( e.event )
        {
            case 'registered':
                if ( e.regid.length > 0 )
                {
                    console.log("Regid " + e.regid);
                    alert('registration id = '+e.regid);
                }
                break;

            case 'message':
                // this is the actual push notification. its format depends on the data model from the push server
                alert('message = '+e.message+' msgcnt = '+e.msgcnt);
                break;

            case 'error':
                alert('GCM error = '+e.msg);
                break;

            default:
                alert('An unknown GCM event has occurred');
                break;
        }
    }	

};
