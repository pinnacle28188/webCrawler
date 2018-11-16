
var vOpt="height=400,width=440,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes"; 
var gReturnCity = '';
var gReturnState = '';
var gReturnZip = '';
var gReturnCountry = '';
var url = '';

function fnFindCityZip(city, state, zip, country) {
	var zipWindow = '';
	
	gReturnCity = city == null ? "" : city;
	gReturnState = state == null ? "" : state;
	gReturnZip = zip == null ? "" : zip;
	gReturnCountry = country == null ? "" : country;
	
	url = '?CONTROLLER=com.rdwy.ec.rexzipfinder.http.controller.ZipFinderPopupController&DESTINATION=/rexzipfinder/zipFinderPopup.jsp&ERRORDESTINATION=/rexzipfinder/zipFinderPopup.jsp';
	
	if (city == "pur.pickupLocation.city" || zip== "com.origin.zip"  || zip=="RGN710.OZIP" || zip== "com.shipper.zip"){
		url += "&hideMex=true&ACTION=display";
	} else {
		url+= "&ACTION=display";
	} 
		
	if (!zipWindow.closed && zipWindow.location) {
		zipWindow.location.href = url;
	}else{
		zipWindow = window.open(url,null,vOpt);
	}
	
	zipWindow.opener = self;
}

function fnFindCityZipHideMex(city, state, zip, country) {
	var zipWindow = '';
	
	gReturnCity = city == null ? "" : city;
	gReturnState = state == null ? "" : state;
	gReturnZip = zip == null ? "" : zip;
	gReturnCountry = country == null ? "" : country;
	
	url = '?CONTROLLER=com.rdwy.ec.rexzipfinder.http.controller.ZipFinderPopupController&DESTINATION=/rexzipfinder/zipFinderPopup.jsp&ERRORDESTINATION=/rexzipfinder/zipFinderPopup.jsp&hideMex=true&ACTION=display';
		
	if (!zipWindow.closed && zipWindow.location) {
		zipWindow.location.href = url;
	} else {
		zipWindow = window.open(url,null,vOpt);
	}
	
	zipWindow.opener = self;
}
  
function populateParentWindow(city, state, zip, country) {
	if (!window.opener.closed){
		// Update Zip First to facilitate onchange() clearing of other fields in parent window
		if (window.opener.gReturnZip.length > 0) {
			window.opener.document.getElementById(window.opener.gReturnZip).value = zip;
//			window.opener.document.getElementById(window.opener.gReturnZip).onchange();
		}
		if (window.opener.gReturnCity.length > 0) {
			window.opener.document.getElementById(window.opener.gReturnCity).value = city.replace("%27","'");
//			window.opener.document.getElementById(window.opener.gReturnCity).onchange();
		}
		if (window.opener.gReturnState.length > 0) {
			window.opener.document.getElementById(window.opener.gReturnState).value = state;
//			window.opener.document.getElementById(window.opener.gReturnState).onchange();
		}
		if (window.opener.gReturnCountry.length > 0) {
			window.opener.document.getElementById(window.opener.gReturnCountry).value = country;
//			window.opener.document.getElementById(window.opener.gReturnCountry).onchange();
		}
	}
	
	window.close();	
}


function submitLookup() {
    document.zipfinder.submit();
}

function submitBack() {
	history.go(-1);
	return true;
}

function checkRadio(event, searchType)	{
	//prevent radio button selection change on 'tab', 'Enter'(MS), or 'Return'(Mac).
	if(event.keyCode != 9 && event.keyCode != 13 && event.keyCode !=3 )
	{
		if (searchType == "city") {
			document.getElementById("SearchByCity").checked=false;	
			document.getElementById("SearchByZip").checked=true;
			document.getElementById("zipfinder.searchbycity.city").value="";
			document.getElementById("zipfinder.searchbycity.state").value="";	
		} else {
			document.getElementById("SearchByCity").checked=true;	
			document.getElementById("SearchByZip").checked=false;	
			document.getElementById("zipfinder.searchbyzip.zipcode").value="";					
		}
	}		    					
}

function updateCountryFromZip(sZipFieldId, sCountryFieldId) {
	var zip = document.getElementById(sZipFieldId).value;
	var i, c, ok;
	var digit = "0123456789";
  	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  	
  	zip = zip.toUpperCase();
	if (zip.length==3) { zip += "0X0"; }
	
	if (zip.length==5) {
  		for (i=0;i<5;i++) {
  			c = zip.substring(i,i+1);
  			ok = digit.match(c);
  			if (ok == null) {
  				// non-numeric entry
  				return;
  			}
  		}
  		// if we get here, have either a USA or MEX zip code.  If the user hasn't already set it to mexico, change it to USA
  		if( document.getElementById(sCountryFieldId).value != "MEX" ){
	 		document.getElementById(sCountryFieldId).value = "USA";
	 	}
		return;
	} else if (zip.length==6) {
  		for (i=0;i<6;i++) {
  			c = zip.substring(i,i+1);
  			if((i%2)==1) {
	  			ok = digit.match(c);
	  		} else {
	  			ok = chars.match(c);
  			}
  			if (ok == null) {
  				// non-numeric entry
  				return;
  			}
  		}
  		// if we get here, have a valid alphanumeric can postal
		document.getElementById(sCountryFieldId).value = "CAN";
		document.getElementById(sZipFieldId).value = zip;
		return;
  	}
	
	// fall thru to here - don't know what the user is doing
	document.getElementById(sCountryFieldId).value = " ";
}
