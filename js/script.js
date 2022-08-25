// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = window.document.getElementById('addForm');
let table = window.document.getElementById('employees');

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let totalNumber

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
    let newTr = document.createElement('tr');
    console.log(newTr);
    // let trContent = document.createTextNode('ID Name Ext Email Department');
    // console.log(trContent);
    // table.appendChild(trContent); 
    // console.log(table);
    
    let list = document.querySelector('#employees');
    console.log(list);
    list.appendChild(newTr); 

    // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
    let cells = document.querySelectorAll('th');


    // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
    trContent = document.creatTextNode('');
    newTr.appendChild(trContent);
    // trContent2
    // trContent[2]
    // trContent[3]
    // trContent[4]

    // CREATE THE DELETE BUTTON
    let deleteBtn = document.createElement('button');
    let th = document.querySelectorAll('th');
    th.appendChild(deleteBtn);

    // RESET THE FORM
    form.reset();

    // SET FOCUS BACK TO THE ID TEXT BOX
    window.document.getElementById('id').focus();

    // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
    

});

// DELETE EMPLOYEE
table.removechildren[i];