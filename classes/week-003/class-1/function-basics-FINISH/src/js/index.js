/* 
  Window On Load Event
  - all of our scripts will be inside this window load event event handler function
  - get a reference to the form add a submit event
  - e.preventDefault() method stops the form from submitting.
  - get the value of the input elements   DOM Selection methods
  - create a named funciton that accepts named parameters. 
  - send the function two arguments  call(num, num1)
*/
// Application Scope
window.addEventListener('load', function(e){

    const calculatorForm = document.querySelector('#calculator')

    calculatorForm.addEventListener('submit', function(e){
      // action that the form will do on submit
      e.preventDefault();
      // form field data input
      // conver the data a soon as possible to the data type that your application requires
      const numOne = Number( document.querySelector('#valueOne').value)
      const numTwo = Number(document.querySelector('#valueTwo').value)

      // check the validity of the data are these things numbers
      // conditional statement if(){}

      sum(numOne, numTwo)
    })// closes form submit event

    function sum (num1, num2) {
      // action of the sum function
      // parseInt()
      // parseFloat()
      // Number
      // NAN
       // string + number = string concatination
       // number +  number = number  addition
       console.log(num1, num2)
    }



})//closes the window load funciton
 




 
 
 

 

 