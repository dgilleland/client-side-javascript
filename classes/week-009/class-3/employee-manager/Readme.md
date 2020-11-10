# CPSC1520 Client Side JavaScript

Demo Employee Manager Site [Netlify](https://jimbits-employees.netlify.app/)

## Creating DOM elements 
There are many ways to create DOM content. We have been using template literals for there ease of use. Javascript gives us the powser to create elements as if we were working in and HTML editor. We can use the document.createElement() method to create DOM element nodes.

```javascript
   const ul = document.createElement('ul')
   const li = document.createElement('li')
   li.classList.add('new-class')
   li.setAttribute('data-key', 185472)
   li.textContent = 'first list element'
   ul.appendChild(li)
   console.log(ui)
```

## Objects Basics
When working with client side javascript and creating DOM content you will use javascript objects frequently. An object is a great way to store structured data. For instance if you wish to store a list of students. Each student has a first name and a last name an id and a list of classes they belong to this can be described in a javascript object by createing propertis and assigning them values.
```javascript
// object creation
const students={}
console.log(student)
```
<br/>
<br/>

Adding properties and value to a javascript object is quite straight forward. You give the object property a name. For the example of the student id. I called it id and asigned the value 7852412020. Note that properties and values are seperated by a comma. Used good semantic naming when creating your property names.
```javascript
const students={
     id:7852412020,
    firstName: "Colminei",
    lastName: "Kimrahsiksy"
    paid: true,
 
}
console.table(student)
```  
<br/>
<br/>

To assign a different value to a javascript object property simply use the object.propery = value syntax.  
```javascript
  student.id = 7805489012
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
- document.createElement [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)