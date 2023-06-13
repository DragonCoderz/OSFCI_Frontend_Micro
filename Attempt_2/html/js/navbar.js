function navbarHover() {
	var masterTimeout;
	$('#dropdownMaster').on('mouseover', function(e) {
		
		var dropdown = $(e.target);
		var menu = $('#menuMaster');
		dropdown.addClass('show');
		menu.addClass('show');
	});

	$('#dropdownMaster').on('mouseout', function(e) {h
		var dropdown = $(e.target);
		var menu = $('#menuMaster');
		setTimeout(function () {
			if ( !($('#dropdownSecondary').is(':hover')) ) {
			if ( !($('#dropdownMaster').is(':hover')) ) {
					dropdown.removeClass('show');
				menu.removeClass('show');
				$('#navbarDropdownMenuLink').removeClass('show');
			}
			}
		
		}, 300);
	});

	$('#dropdownSecondary').on('mouseover', function(e) {
		clearTimeout(masterTimeout);
		var dropdown = $(e.target);
		var menu = $('#menuSecondary');
		dropdown.addClass('show');
		menu.addClass('show');
	});

	$('#dropdownSecondary').on('mouseout', function(e) {
		var dropdown = $(e.target);
		var menu = $('#menuSecondary');
		setTimeout(function () {
		if ( !($('#dropdownSecondary').is(':hover')) ) {
			dropdown.removeClass('show');
			menu.removeClass('show');
		}
		}, 300);
	});


}

function popUp() {
	$('#myModal').modal('show');	
}

function loginBtn() {
	$('#loginNavbar').on('click', function(e) {
		if ( typeof(mylocalStorage) !== 'undefined' ) 
			if (( "string" === typeof(mylocalStorage['secretKey']) ) & ( "string" === typeof(mylocalStorage['accessKey']) ))
			{
				disconnect();
			}
			else
			{
				clearDocument();
				loadHTML("html/navbar.html");
				loadJS("js/navbar.js");
				navbarHover();
				loginBtn();
		       		$(document.body).append("<center><h1>Welcome Back !</h1><center>");
			       	loadHTML("html/loginForm.html");
		       		loadJS("js/login.js");
		        	managePasswordForgotten();
		        	loadJS("js/forms.js");
		        	formSubmission('#login','get_token','','Password missmatch');
		        	loadHTML("footer.html");
		}
	});

	$('#MyAccount').on('click', function(e) {
		myAccount();
	});

	// We must check if we are logged in or not ?
	// and replace the button text
	if ( typeof(mylocalStorage) !== 'undefined' )
	if (( "string" === typeof(mylocalStorage['secretKey']) ) & ( "string" === typeof(mylocalStorage['accessKey']) ))
	{
	        // we must change the login button by a Disconnect button
	        $('#loginNavbar').html('Logout');
		$('#navbarDropdownMenuLink').show();
		// The navBar title must be the login name
		$('#navbarDropdownMenuLink').html(mylocalStorage['username']);
	}
	else
		$('#navbarDropdownMenuLink').hide();
}

$("#Home").on("click", function(event) {
	mainpage();
});

// tooltip element will appear/hide once the helptoggle is clicked
function enableDisableToolTip() {
    let toolTip = document.getElementsByClassName('tooltiptext')
    for (var i = 0; i < toolTip.length; i++) {
      if (typeof toolTip[i] === "undefined") {
        return
      }
      else if (toolTip[i].style.display == 'none') {
        toolTip[i].style.display = ''
      } else {
        toolTip[i].style.display = 'none'
      }
    }
  }

// We have to build the navbar production option

// $.ajax({
// 	type: "GET",
// 	contentType: 'application/json',
// 	url: window.location.origin + '/ci/get_server_models/',
// 	success: function(response){
// 			var obj = JSON.parse(response);
// 			var htmlcode = "";
// 			obj.forEach(function(item) {
// 				htmlcode = htmlcode + '<li><a class="dropdown-item" id="'+item.Product+'">' + item.Product + '</a></li>';
// 			});
// 			$('#menuSecondary').html(htmlcode);
// 			obj.forEach(function(item) {
// 				$('#'+item.Product).on('click', function(e) {
//   				      InteractiveSession(item.Product);
// 				});
// 			});
// 	}
// });


