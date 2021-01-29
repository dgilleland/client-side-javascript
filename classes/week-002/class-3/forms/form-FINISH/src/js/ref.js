/* 
     Practice 

    add the window on load event listener

     Ref - form
     - add a the submit event for the form

     Inside the form event handler function create
     - 4 reference variables to the input elements.


     console.log()

     DOMElement selection querySlector  .....

     //attach an event to a DOM element
     window.addEventListener('load',function(e){
        // {}   your code will be excuted when  the event takes place;
     })
     
     DOMElement.addEventListener('click', function(e){
        // excute your code......
     })

*/

//  load event.....
// javascript anything in {} is an object
// javascript [] is an array

/* 

     e event object comes from the browser javascript compiler
*/

window.addEventListener('load', function(e){
    // dom selection
    const paymentForm = document.querySelector('#payment')
 
    // FORMS A LOT LOT LOT
    // document.forms gives you a list of forms on the page.
    // console.log(document.forms.payment)
 
    paymentForm.addEventListener('submit', function(e){
       // code for the submit event.
       // stop the default behaviour submit event sending the name value pairs
       e.preventDefault()
       
       const nameOnCard = document.querySelector('#frmNameCC')
       const cardNumber = document.querySelector('#frmCCNum')
       const expiryDate = document.querySelector('#frmCCExp')
       const cvcNumber = document.querySelector('#frmCCCVC')
        // element reference all of the element attibutes are accessible
        // element.attributeName
        // img        elem.src  
       console.log(nameOnCard.value)
      
       
    })
  
 
    
 })//End of window load event
 
 
 
 
  