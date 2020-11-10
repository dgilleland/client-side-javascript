 
window.addEventListener('load', function(e){
 
  const newEmployeeForm = document.forms.newEmployee
  const profileImage = document.querySelector('#profileImage')
  profileImage.addEventListener('change', onGetProfileImage)

  newEmployeeForm.addEventListener('submit', function(e){
    e.preventDefault()
    const id = uuidv4().substring(0,8)
    const department = getDepartment()
    const profileImage = document.querySelector('.profile-image img').src
    const salary = e.currentTarget.elements.salary.value;
    console.log(id, department, profileImage, salary)
    /* 
      first name
      lastName
      phoneNumber
      emailAddress
    */
  })
 
  function onGetProfileImage(e){
    const imagePath = e.currentTarget.value.replace(`C:\\fakepath\\`,"");
    const profileDisplay = document.querySelector('.profile-image img');
    profileDisplay.src= `img/employees/${imagePath}`
    console.log(profileDisplay)
    const reader = new FileReader();
  }

  function getDepartment(){
    const departments = Array.from(document.querySelectorAll('.department input'))  
    const department = departments.filter(function(department,index){
     
        if(department.checked){      
          return department
        }
        
    })
  
 return (department[0].value)
  }
 
})