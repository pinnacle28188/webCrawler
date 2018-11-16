// Build the URL request with key value pairs.

function builldURLRequest() {
	var url = "";
	var request = "";
	var searchValue = "";
	
	if (gOptions.enabled) {
		url = gOptions.url;
	}
	
	var tableRows = jQuery( "#searchTable" ).find( "tbody" ).children();
	
	searchValue = jQuery(tableRows[0]).find( "input[name='searchWithTextValue']" ).val();
	
	// request = "&key" + "=" + searchValue + "&retType=jsonp";
	request = "&key" + "=" + searchValue + "&retType=text/html";
					
	url = url + request;
	
	alert(url);
	
	return url;
} 