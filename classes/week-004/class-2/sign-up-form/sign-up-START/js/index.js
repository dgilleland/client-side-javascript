window.addEventListener('load', function(e){
    const signUpForm = document.querySelector('form')
    const password = signUpForm.userPassword;
    const confirmPassword = signUpForm.confirmPassword;
    const hints = signUpForm.querySelector('.hints')
    localStorage.setItem('isLoggedIn', "false")
    signUpForm.addEventListener('submit', function(e){
        e.preventDefault();
          const password1= password.value.trim();
          const password2 = confirmPassword.value.trim();

          if(password1  === password2){
             // createing a random 9 digit number
           
             localStorage.setItem('confirmationCode', nineDigitRandomNumber())
             window.location.assign('confirm.html')
            
          }else{
             hints.classList.remove('hide')
          }
    })

    password.addEventListener('focus', function(e){
        hints.classList.add('hide')
    })
    confirmPassword.addEventListener('focus', function(e){
        hints.classList.add('hide')
    })

     function nineDigitRandomNumber(){
         return parseInt(Math.random()*1e9);
     }
     
})