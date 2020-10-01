window.addEventListener('load',function(){
    let confirmation = localStorage.getItem('confirmationCode');
    let confirmSignUp = document.querySelector('form')
    let fancyFormat = (`${confirmation.substring(0,3)}-${confirmation.substring(3,6)}-${confirmation.substring(6,9)} `)
    document.querySelector('.code').textContent = ` code: ${fancyFormat}`;

   console.log("use this to confirm " + confirmation)
    confirmSignUp.addEventListener('submit', function(e){
        e.preventDefault()
      let partOne = e.currentTarget.partOne.value.trim()
      let partTwo = e.currentTarget.partTwo.value.trim()
      let partThree = e.currentTarget.partThree.value.trim();

      let checkString = partOne + partTwo + partThree
     

        if(checkString === confirmation){
            localStorage.setItem('isLoggedIn', 'true')
            window.location.assign('user.html')
        }else{
            console.log("dam now what")
        }
    })
})