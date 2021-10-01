function buildGrid(cols, rows) {

	var tableMarkup = "";

	for (x = 0; x < rows; x++) {
		tableMarkup += "<tr>";
		for (y = 0; y < cols; y++) {
			tableMarkup += "<td>&nbsp;</td>";
		}
		tableMarkup += "</tr>";	
	}

	$("#drawing-table").html(tableMarkup)

};

$(function() {
	
	// Variable Setup
	var cols = 8,
	    rows = 8,
	    curColor = "red",
	    mouseDownState = false,
	    eraseState = false,
	    tracingMode = false,
	    prevColor = "",
	    $el;
	 
	// Inital Build of Table  
	buildGrid(cols, rows);
	
	
	
	

	

	
	

	
	
			
	
	
	
});