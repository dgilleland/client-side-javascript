window.addEventListener("load", function (e) {
  /* 
             Create A Data Array - hold new employees
               ---> external call to get JSON data
               ----> array of objects

             Create an new Employee object with firstname lastname email properties
             Add the new employeee object to the DataArray.
    
    */
  const dataArray = [];
  const newEmployeeForm = document.forms.newEmployee;
  const imageUpload = newEmployeeForm.elements.profileImage;
  imageUpload.addEventListener("change", function (e) {
    const imagePath = getImagePath(e.currentTarget.value);
    e.currentTarget.parentElement.firstElementChild.src = imagePath;
  });

  newEmployeeForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = uuidv4().substr(0, 8);
    const firstName = e.currentTarget.elements.firstName.value;
    const lastName = e.currentTarget.elements.lastName.value;
    const emailAddress = e.currentTarget.elements.emailAddress.value;
    const imagePath = getImagePath(e.currentTarget.elements.profileImage.value);
    const salary = e.currentTarget.elements.salary.value;
    const deductions = e.currentTarget.elements.deductions.value;
    const department = getDepartment();

    //  Grab the  salary and the deductions add them to the data object

    // data object
    const employee = {
      id,
      firstName,
      lastName,
      emailAddress,
      imagePath,
      salary,
      deductions,
      department,
    };

    // ADD NEW EMPLOYEE
    addNewEmployee(employee);
    updateNetSpend()
  });

  function getImagePath(path) {
    return path.replace("C:\\fakepath\\", "img/employees/");
  }

  function getDepartment() {
    const departments = document.querySelectorAll(".departments input");
    let department = "";
    departments.forEach(function (item, index) {
      if (item.checked) {
        department = item.value;
      }
    });
    return department;
  }

  function addNewEmployee(employee) {
    const newEmployees = document.querySelector(".employees");
    const template = `
     <aside class="employee" data-key="${employee.id}">
        
     <img class="employee-placeholder-image"
       src="img/employees/placeholder.png"
       alt="new employee silohute"
     />

   <ul class="details">
     <li><span>first name:</span><span>${employee.firstName} ${employee.lastName}</span></li>
     <li><span>employee id: </span><span>${employee.id}</span></li>
     <li><span>department:</span><span>${employee.department}</span></li>
     <li><span>email address:</span><span>${employee.emailAddress}</span></li>
     <li><span>salary: </span><span>$${employee.salary}</span></li>
     <li><span>deductions:</span><span>$${employee.deductions}</span></li>
   </ul>


   <button class="remove-user" data-key="${employee.id}">
     delete
   </button>
 </aside>
     `;
    let documentFragment = document
      .createRange()
      .createContextualFragment(template);
    let newEmployee = documentFragment.querySelector(".employee");
    let removeButton = newEmployee.querySelector(".remove-user");

    // add New Employee
    dataArray.push(employee);
    // uncomment line if you want to reset the form fields
    // newEmployeeForm.reset();
    removeButton.addEventListener("click", function (e) {
      // remove item from array
     const removeItem =  dataArray.find(function(item,index){
             if(item.id === e.currentTarget.dataset.key){
                 item.index = index
                 return item
             }
      })
      // remove from data array
      dataArray.splice(removeItem.index, 1)
      // remove employee from display
      newEmployees.removeChild(newEmployees.children[removeItem.index]);
      updateNetSpend()
    });
    // add new employee to the .employees display
    newEmployees.appendChild(newEmployee);
    console.log(dataArray.length)
  }

  // update the salary display
  function updateNetSpend(){
    const salaryDisplay =   document.querySelectorAll('.salaries-display span:last-child')
  
     // loop through data array and calculate total salary
     const salary = dataArray.reduce(function(calc, employee){
      calc.totalSalary += parseInt(employee.salary)
      calc.totalDeductions += parseInt(employee.deductions);
      calc.netSpend = calc.totalSalary - calc.totalDeductions;
      return calc
     }, {totalSalary:0, totalDeductions:0,netSpend:0})
     salaryDisplay.item(0).textContent = `$${salary.totalSalary}.00`
     salaryDisplay.item(1).textContent = `$${salary.totalDeductions}.00`
     salaryDisplay.item(2).textContent = `$${salary.netSpend}.00`
   
  }
});
