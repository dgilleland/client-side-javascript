# Form Submit Event

## Getting Data From The Form
Its important to be able to get data from the form. Forms are everywhere and its the only way to get user input from the web page. Forms are not as simple as they might appear. There is a lot going on in forms. You need to help the user enter the data you need while creating and easy and flexible form experience. So as front end developers it's important for us to create easy to use effetive forms.

### What Do I Need To Know
- How to create form markup. 
- What the form attributes method action are for.
- How a form submits data.
- What name value pairs are.
- How to add a submit event for a form.
- How to access form input values with javascript.
- Convert form data from strings to numbers. 
- Understand what NaN is and what to do if you encounter it when runing your code.
- Understand the difference between the javascript methods parseInt(), parseFloat(), Number(),  isNaN()
- Use basic form validation techniques using the input attribures required, pattern etc.
- How to make forms accessible using the label element and the input element attribute   placeholder.

__Submit Event__   
The submit event is always added to the form. It's the form that handles the submission of the input elements name value pairs to the server script specified in the action.  
```js
// reference variable to the DOM Form Element
const calculatorForm = document.querySelector('#calculator')

// SUBMIT EVENT IS ALWAYS ADDED TO THE FORM NOT THE SUBMIT BUTTON
 calculatorForm.addEventListener('submit', function(e){
      // action performed when the user clicks submit

      // FIRST THING TO DO STOP THE FORM FROM SUBMITTING
      e.preventDefault();

      // JAVASCRIPT CODE TO PERFORM THE DESIGNATED ACTION/FUNCTION
 
    })// closes form submit event
``` 

__e.preventDefault()__
Make sure to always stop the form from submtting in this course. To do that you use the the preventDefault() method. We are not processing form data so we do not need to send it anywhere. This is the purpose of the action attribute of the form. So for now just set the action of the form to _action="#"_. Add and id to to the form and all input controls inside a form. It makes DOM selection easier.

```html
 <form id="ADD A FORM ID"  class="ADD CLASS FOR STYLE"  method="POST" action="#" >

 </form>
```


## Practice Exercises

__Dark Mode__  
Create a form element with a signle input and label using form best practices. Create a script that accepts a semantic color name from the input field and changes the background color of the page to the color entered. [Semantic Color Names](https://htmlcolorcodes.com/color-names/)  

__Multiplication__  
Create a form with two inputs that the user can enter two numbers and multiply the values together. Add and output element to the form and display the result of the calculation.


__Taxes Calclulator__  
Create a form with a single input labelsubmit and output element. In the form input the user will add their yearly salary. If the tax rate is 5% output how much tax they will have to pay back on a yearly and monthly basis.

__Roofing Quote__  
Create a form with a two input elements Each input should have a label and placeholder outlining the data and the data type you need. Add a submit button and output element to the form. The client will add two measurements to the inputs a width and height. The output should be in the form of a quote. Where the user can see the total square footage. Add fixed cost $2.00 material and $3.25 for labour all based on square footage.  Output the total cost of materials labour GST based on 5% and the total price of the quote.
```
Roofing Quote

Quote Base On
Area: 1200 square feet.

Cost
Materials: $2.00 per square foot.
Labour: $3.25 per square foot

Total Cost
Materials:
Labour:
GST: 

Toal: 


```


## Resources
Sign-up form best practices  [Youtube](https://www.youtube.com/watch?v=Ev2mCzJZLtY)  
Payment and address form best practices  [Youtube](https://www.youtube.com/watch?v=xfGKmvvyhdM&t=17s)  
