let submitBtn = document.getElementById("submit");
let rows = document.getElementsByTagName("input")[0];
let columns = document.getElementsByTagName("input")[1];
let result = document.getElementById("table");

function createTable(rows, columns){
    if (parseInt(rows.value)*parseInt(columns.value)>2500){
        alert(`Try not to freeze your browser.`);
        return;
    }
    if (!Number.isInteger(parseInt(rows.value)) || !Number.isInteger(parseInt(columns.value))){
        alert(`Only numbers allowed.`);
        return;
    }
    if (parseInt(rows.value) === 0 || parseInt(columns.value) === 0){
        alert(`Please.`);
        return;
    }
    result.innerHTML += `<table border="1"></table>`;
    let resultTable = document.getElementsByTagName("table")[0];
    for (let i=0; i<parseInt(rows.value); i++){
        resultTable.innerHTML += `<tr></tr>`;
        for (let j=0; j<parseInt(columns.value); j++){
            document.getElementsByTagName("tr")[i].innerHTML += `<td style="padding: 10px;">Row ${i+1}, Column ${j+1}</td>`;
        }
    }
    resultTable.style.borderCollapse = "collapse";
}

submitBtn.addEventListener("click", function(){
    createTable(rows, columns);
});