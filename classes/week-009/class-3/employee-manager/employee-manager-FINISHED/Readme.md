# CPSC1520 Client Side JavaScript


## Objects Basics
- How To Declare an object in javascript
```javascript
const students={}
console.log(student)
```
<br/>
<br/>

- Adding name value pairs to a javascript object
```javascript
const students={
     id:"1",
    firstName: "Colminei",
    lastName: "Kimrahsiksy"
    paid: true,
 
}
console.table(student)
```  
<br/>
<br/>

- Assigning values dynamically to a javascript obect
```javascript
  products.phoneNumber = "780 548 9012"
  console.table(student)
```

<br/>
<br/>

- Looping through Objects
```javascript
 for (const property in student) {
  console.log(`${property}: ${object[property]}`);
}
```


## Form Element
When selecting a form element from the DOM you have several ways of doing it. You can use querySelector or you can use forms property of the document interface. There are some advantages in using the forms property. Notice below what you can pick the form out of the DOM using the id of the form
```javascript
   console.log(document.querySelector('form'))
   console.log(document.forms.addUser)
```
- Accessing Form Elements
When you want to select elements from the form using the forms property you can use the following javascript
```javascript
   console.log(document.forms.elements)
```


## Resources
- JavaScript Object Basics [MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)
- document.forms[MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/forms)
- Node Interface [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)