#  Client Side JavaScript

## Topics 
**CSS**  
  Styling the the ui-sum component (15min)
 
**LoadEvent** 
Window load event, protecting our code from name clashes, javascript code scope, browser devtools performance tab, viewing the load event (15min)

**Forms**  
Introduction to forms, form best practices styling and accessibility, form submit event, input field types and best practices.

__Functions in JavaScript__  
Defining a functions, calling a functions, function arguments and parameters, function code flow, hoisting,scope

## Form Submission Basics 
- add and event listner to the form not to the submit button or inpute type sumbit elements.
- action attribute is the url of the script that will process your form data.
- method is how the browser will send the name value pairs from the form to the processing script. 
- we are not processing form data in this class but will take a look at Netlify Forms. 
```html
       <form  action="process.js"  method="POST">
```
</br> 
 ## Defining Functions 
 
- The name of the function.
- A list of parameters to the function, enclosed in parentheses and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets, {...}.

```javascript

function addNumbers(num1, num2){
     let sum = num1 + num2
}

```

__Calling functions__  
- calling the addNumbers function actually performs the specified actions between the braces.  
```javascript

   addNumbers(2, 8)
}
```

 </br>

## Resources
- Functions [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- JavaScript Scope [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- JavaScript Window Objecty [MDN JavaScript Guide](https://developer.cdn.mozilla.net/nl/docs/Web/API/Window#:~:text=The%20window%20object%20represents%20a,defaultView%20property.)