// Check to see if the user used the enter key.
function enterKey(event){
   
	if(event.keyCode == 13) {
	 	createResultsTables();
	}
}

function removeNull(value) {
	
	if(value == null) {
		return " ";
	} else {
		return value;
	}
}

function isInteger(text) {
	return /^\+?\d+$/.test(text);
}