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

    // Form Field Values Required to Create the Data Object
    const id = uuidv4().substr(0, 8);
    const firstName = e.currentTarget.elements.firstName.value;
    const lastName = e.currentTarget.elements.lastName.value;
    const emailAddress = e.currentTarget.elements.emailAddress.value;
    const imagePath = getImagePath(e.currentTarget.elements.profileImage.value);
    const salary = e.currentTarget.elements.salary.value;
    const deductions = e.currentTarget.elements.deductions.value;
    const department = getDepartment();

 

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

    // Add Employee Data Object To the Data Array
    dataArray.push(employee)
    console.log(dataArray)
  });


  // Replace Image Placeholder
  function getImagePath(path) {
    return path.replace("C:\\fakepath\\", "img/employees/");
  }


  // Get The Department
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
 
 
});
