window.addEventListener('load', function(e){
    
        /* 
        add submit event to the form *
        grab the value from the input
        add that to the array
        console.log array to see if the items are being added
        */
       const employeesArray =[]

   const employeeForm = document.querySelector('form')
    employeeForm.addEventListener('submit', onAddNewEmployee);

    function onAddNewEmployee(e){
            e.preventDefault();
            const newEmployee =e.currentTarget.newItem.value.trim()
            employeesArray.push(newEmployee)
              displayNewEmployee(newEmployee)
    }

    function displayNewEmployee(employee){
            // ref to ul
            const employees = document.querySelector('.todo-items')
            // markup
            // seed the template literal with the data emplyee
            const markup = ` <li class="todo"><h3>${employee}</h3></li>`
            // add the template literal to the dom
            // element.insertAdjacentHTML('where', text)
            employees.insertAdjacentHTML('afterbegin', markup)
    }
    
})