function insert_Row() {
    //Write your code here
	
	
	let table = document.getElementById("sampleTable");

    // Create a new row
    let newRow = document.createElement("tr");

    // Create first cell
    let cell1 = document.createElement("td");
    cell1.innerText = "New Cell1";
    newRow.appendChild(cell1);

    // Create second cell
    let cell2 = document.createElement("td");
    cell2.innerText = "New Cell2";
    newRow.appendChild(cell2);

    // Append row to table
    // table.appendChild(newRow);
	//table.insertBefore(newRow, table.children[0]);
	table.tBodies[0].insertBefore(newRow, table.tBodies[0].rows[0]);

  
}
