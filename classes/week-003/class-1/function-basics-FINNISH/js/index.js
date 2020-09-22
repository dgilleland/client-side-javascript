/* 
  Window On Load Event
  - all of our scripts will be inside this event
  - scope
*/
// Application Scope
window.addEventListener('load', function(){
  // get ref vars form
  const formElement = document.querySelector('#sum')
  const numberOne = document.querySelector('#number-one')
  const numberTwo = document.querySelector('#number-two')
 
  // form submit events
  formElement.addEventListener('submit', function(eventObject){
          // call the function
          // Template Literals Example
         // console.log(`the text from the field is  ${ numberOne.value  }`)
          addTwoNumbers(numberOne.value, numberTwo.value)
                 eventObject.preventDefault();
  })


  function addTwoNumbers(num1, num2){
      let sum = Number(num1) + Number(num2)
      console.log(sum)

  }

})

 




 
 
 

 

 