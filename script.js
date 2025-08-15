function insert_Row() {
    //Write your code here
	
	
	let table = document.getElementById("sampleTable");

    let newRow = document.createElement("tr");

    let cell1 = document.createElement("td");
    cell1.innerText = "New Cell1";
    newRow.appendChild(cell1);

    let cell2 = document.createElement("td");
    cell2.innerText = "New Cell2";
    newRow.appendChild(cell2);

    if (table.rows.length > 0) {
        table.insertBefore(newRow, table.rows[0]);
    } else {
        table.appendChild(newRow);
    }
     
}
