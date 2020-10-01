window.addEventListener('load', function(e){
    const confirmationCode =   localStorage.getItem('confirmationCode');
    const confrimationForm = document.querySelector('form')
   console.log(confirmationCode)
    confrimationForm.addEventListener('submit',function(e){
        e.preventDefault()
         const string1 = e.currentTarget.partOne.value.trim()
         const string2 = e.currentTarget.partTwo.value.trim()
         const string3 = e.currentTarget.partThree.value.trim()

         const userCode = string1 + string2 + string3
         
            if( userCode == confirmationCode){
                 window.location.assign('user.html')
            }else{
                 // do the hint thing
            }
        
    } )
    
})