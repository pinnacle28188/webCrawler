// Create a drop down box with Shipper Name, Origin Terminal, and Zip To Zip for general Search   
function generalSearchDropDownBox(selectValue) {
	jQuery("#searchWithOption").empty();
	
	var html = '<option value="" selected="selected" disabled="disabled">--Select One--</option>';
	html += '<option id="shipper">Shipper Name</option>';
	html += '<option id="customerRefNbr">Customer Ref Nbr (EDI Only)</option>';
	html += '<option id="originTerminal">Origin Terminal</option>';
	html += '<option id="destinationZip">Zip To Zip</option>';
	
	jQuery("#searchWithOption").append(html);
	
	jQuery("#searchWithOption").val(selectValue);
}

// Create a full Search Drop Down Box
function fullSearchDropDownBox() {
	jQuery("#searchWithOption").empty();
	
	var html = '<option value="" selected="selected" disabled="disabled">--Select One--</option>';
	html += '<option id="pickUpNumber">Pickup Number</option>';
	html += '<option id="quoteId">Quote Number</option>';
	html += '<option id="masterPuRef">Master Pickup Number</option>';
	html += '<option id="pro">Pro Number</option>';
	html += '<option id="shipper">Shipper Name</option>';
	html += '<option id="customerRefNbr">Customer Ref Nbr (EDI Only)</option>';
	html += '<option id="originTerminal">Origin Terminal</option>';
	html += '<option id="destinationZip">Zip To Zip</option>';
	
	jQuery("#searchWithOption").append(html);
	
	jQuery("#searchWithOption").val();
}