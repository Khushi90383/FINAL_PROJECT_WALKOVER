var x = document.createElement("INPUT");
x.setAttribute("type", "checkbox");
x.setAttribute("name","select")

var table = document.getElementById("myTable");

let i=0;
while(i<6){
    var row = table.insertRow(1);


    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);


    cell1.innerHTML = "NEW CELL";
    cell2.innerHTML = "NEW CELL";
    cell3.innerHTML = "NEW CELL";
    cell4.innerHTML = x;
}