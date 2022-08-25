// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = window.document.getElementById('addForm');
let table = window.document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let numCounter

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
    // PREVENT FORM SUBMISSION
    e.preventDefault();

    // GET THE VALUES FROM THE TEXT BOXES
    let idVal = window.document.getElementById('id').value;
    let nameVal = window.document.getElementById('name').value;
    let extVal = window.document.getElementById('extension').value;
    let emailVal = window.document.getElementById('email').value;
    let deptVal = window.document.getElementById('department').value;
    console.log(idVal);
    console.log(nameVal);
    console.log(extVal);
    console.log(emailVal);
    console.log(deptVal);

    // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
    let newRow = table.insertRow();
    console.log(newRow);   

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    cell1.innerHTML = idVal;
    cell2.innerHTML = nameVal;
    cell3.innerHTML = extVal;
    cell4.innerHTML = emailVal;
    cell5.innerHTML = deptVal;
   
    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    deleteBtn.type = 'button';
    deleteBtn.value = 'Delete';    
    deleteBtn.innerHTML = 'X';
    deleteBtn.style.color = 'red';
    deleteBtn.style.backgroundColor = 'black';
    // deleteBtn.onclick = deleteRow(this);
   // Put this delete button in cell6
    cell6.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    

});

// DELETE EMPLOYEE
//deleteBtn.addEventListener('click', deleteMe,false);
function deleteMe() {
    if (window.confirm('Are you sure to delete this employee?')){
        table.deleteRow(this);
    } else {
        window.document.getElementById('id').focus();
    };    
};
