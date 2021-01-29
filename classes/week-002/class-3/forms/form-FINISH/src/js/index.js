/* 
Event Handler Function     

// this function has no name anonymous
function(e){
   
     }
*/

window.addEventListener('load', function(e){
    const loginButton = document.querySelector('.items  button')
    
    loginButton.addEventListener('click', function(e){
       console.log("User wants to login")
       // call a named function
       // send the function arguments the values that we want to manipulate
       // (arg, arg, arg)
       const sumOfTwoNumbers = addNumbers(3, 7)
       console.log(sumOfTwoNumbers)
    })//end of the loginbutton click event

   // name function
   // (param, params) contain parameters
   // parameters are name by you....
   // you can assign default values to the parameters param=value, param=value

   function addNumbers(num1=1, num2=3){
       const sum = num1 + num2;
       return sum
   }

})