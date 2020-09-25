window.addEventListener('load', function(){
    const showHideButton = document.querySelector('.password img');
    const passwordField = document.querySelector('#user-password')
   showHideButton.addEventListener('click', function (e){
  
           

           if(passwordField.type == "password"){
            e.target.src="img/icons/eye-closed.svg"
            passwordField.type="text"
           }else{
            e.target.src="img/icons/eye-open.svg"
            passwordField.type="password"
           }

   })
})