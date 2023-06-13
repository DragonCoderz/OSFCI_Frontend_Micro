var mylocalStorage = {};

main();

function clearDocument() {
    $(document.body).empty();
    console.log("Clear Document Execution Sucessful!");
}

function loadHTML(filename){
	jQuery.ajaxSetup({async:false});
        jQuery.get(filename, function(data, status){
                $(document.body).append(data);
        });
        jQuery.ajaxSetup({async:true});
        console.log("load HTML Execution Sucessful!");
}

function loadJS(filename){
    jQuery.ajaxSetup({async:false});
    jQuery.getScript(filename, function(data, textStatus, jqxhr) {
            });
    jQuery.ajaxSetup({async:true});
    console.log("loadJS Execution Sucessful!");
}

function main() {
    clearDocument();
	// Must load the default home page
	loadHTML("./html/navbar.html");
	loadJS("./html/js/navbar.js");
	navbarHover();
	if (mylocalStorage['privKeyInfoAck'] != 1) {
		popUp();
	}

	loginBtn();
	loadHTML("./html/home.html");

//	loadJS("js/projects.js");
	// loadJS("js/forms.js");
	// loadJS("js/base.js");
	// loadJS("js/config.js");
	// loadHTML("footer.html");
}