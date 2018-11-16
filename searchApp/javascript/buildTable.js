//***************************************************************************//
//************ Methods for Creating the Table ***************************// 
function createResultsTable(singleRow) { 
	jQuery("#searchResultsTable").empty();
	
	var html = '<table id="ResultsTable" class="tablesorter" border="1">';
	html += createResultsTableHeader() + '<tbody>';
	
	html += '<tr>';
	html += '<td colspan="10">';
	html += '<div class="scrollit">';
	html += '<table>';
	
	if(singleRow) {
		html += createResultsTableRow();
	} else {
		for(var x = 0; x < searchData.length; x++ ) {
			html += createResultsTableRows(x);
		}	
	}
	
	html += '</table>';
	html += '</div>';
	html += '</td>';
	html += '</tr>';
	
	html += '</tbody></table>';
	
	jQuery("#searchResultsTable").append(html);
	jQuery('#Pro-NBR-column').attr("valign", "top");
	
	//if (searchData.length > 0) {
		// Hide all rows when first loaded.
	//	for(var x = 0; x < searchData.length; x++ ) {
	//		jQuery('#proRow' + x).hide();
	//	}				
	//} else {
	//	jQuery('#proRow1').hide();	
	//}
}

function createResultsTableHeader() { 
	
	var thead =  '<th width="30" scope="col"><label class="sizeS field">Results</label></th>';
	thead = thead + '<th width="20"></th></tr></thead>';
	
	return thead;
}

function createResultsTableRows(x) { 
	var html = "";
	
	html += '<tr class="trPro">';
	html += '<td width="230" class="gridLines">' + removeNull(searchData[x].value) + '</td>';
		            
	html += "</tr>";
	
	return html;
}

function createResultsTableRow() { 
	var html = "";
	
	html += '<tr class="trPro">';
		
	html += '<td width="230" class="gridLines">' + removeNull(searchData.value) + '</td>';
	html += '<td width="0"></td>';
	            
	html += "</tr>";
	
	return html;
}

function createDataMessage(data) {
	jQuery("#searchResultsTable").empty();
	
	var html = '<table id="ResultsTable" class="tablesorter" border="1">';
	html += createResultsTableHeader() + '<tbody>';
	html += '<tr class="trPro">';
	html += '<td colspan="10">' + data + '</td>';
	html += '</tr></tbody></table>';
   
	jQuery("#searchResultsTable").append(html);
	jQuery('#Pro-NBR-column').attr("valign", "top");	
}