function getSearchCriteria() { 
	var value = "";
	
	var tableRows = jQuery( "#searchTable" ).find( "tbody" ).children();
	
	jQuery.each( tableRows, function( index, row ) {
		
		value = jQuery( row ).find( "input[name='searchWithTextValue']" ).val();
	});
	
	return value;
}

