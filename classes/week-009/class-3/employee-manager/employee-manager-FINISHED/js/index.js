
window.addEventListener('load', function(e){
  const employees = []
  const imagePath ='img/icons/employees/remove-user.svg'
  const employeeTable = document.querySelector('.employees tbody')
 
  const addUserForm = document.forms.addUser
  addUserForm.addEventListener('submit', function(e){
      e.preventDefault()
      const firstName = addUserForm.elements.firstName.value;
      const lastName = addUserForm.elements.lastName.value;
     const newEmployee = {
         firstName:firstName,
         lastName: lastName
     }
     employees.push(newEmployee)
 


     
    let  tr= document.createElement('tr')
    let tdFirstName = document.createElement('td')
    let tdLastName = document.createElement('td')
    let tdRemove = document.createElement('td')
    let  removeIcon = document.createElement('img')
    removeIcon.classList.add('remove-user')
    removeIcon.src = imagePath;
    tdFirstName.textContent = newEmployee.firstName;
    tdLastName.textContent = newEmployee.lastName;
    tdRemove.appendChild(removeIcon)
    tr.appendChild(tdFirstName)
    tr.appendChild(tdLastName)
    tr.appendChild(tdRemove)
    employeeTable.append(tr)
  
  })
 
  
})