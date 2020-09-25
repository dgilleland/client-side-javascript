window.addEventListener('load', function(){
    const formToCheck = document.querySelector('#check-types')
    const checkInput = document.querySelector('#field-to-check')
    const warning = document.querySelector('.warning')
     
    formToCheck.addEventListener('submit', function(e){
        e.preventDefault()
        let isValid = validateAsNumber( )
        if(isValid ){
            warning.classList.remove('hide')
           warning.querySelector('span').textContent = "this filed must contain only numbers"
        }else{
            console.log('this is a valid number')
        }
    })
            function validateAsNumber( ){
                let fieldValue = checkInput.value.trim()
              if(isNaN(fieldValue)){
                    return true
              }else{
                return false 
              }
            }
       checkInput.addEventListener('focus', function () {
           warning.classList.add('hide')

       })
})