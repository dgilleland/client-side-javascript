# CPSC1520 Client Side JavaScript


## Creating Markup With JavaScript
One of the most common task you will have to perform is taking form input and displaying it in the UI. This can be carried  out in several ways. You can use  document.createElement() method along with a number of other methods for building the DOM node you intend. Thouhg this stratagy is effective it is time consuming to write. You should practice this technique as it is always handy to know how to create and write you own elements and combine them into a single DOM node before using one of the Node api DOM insertion Methods
```javascript
 // Creating DOM Content With JavaScript
  let list = document.createElement('li')
  let listItem = document.createElement('li')
  listItem.textContent= "first list item"
  listItem.classList.add('item')
  listItem.setAttribute('data-key', 123456)
  ul.appenChild(listItem)
```
<br/>
<br/>

## Creataing Markup With Template Literals  
Template literals were a great addition to the JavaScript languague. They allow you to combine text and JavaScript without having to use String concatination. This is my own prefered way of creating DOM content. You create your markup in any HTML editor you wish. Then take that markup and wrap it in back ticks those are the ticks above the tab key and to the left of the number 1 key. Once you have your template literal you can breat out of javascript and using the ${} syntax. This is the bueaty of template literals ${} allows you access back to your javascript code so you can now seed your template literal with data. The one draw back is that a template literal is a string so you have to convert it to and element node by using the **document.createRange().createContextualFragment()**
 ```javascript  
   const someData = 'javascript template literals rock'
   let templateLiteral = `<li data-index="1" class="item">${someData}</li>`;
   let documentFragment = document.createRange().createContextualFragment(templateLiteral);
   let elementNode = documentFragment.querySelector('li')    
```

## Creataing Markup With Template Tag  
On of the lesser know methods is using the <template> element is a mechanism for holding markup in a document that you will use with javascript later. The template element and content are not rendered immediately when the page is loaded. So is not see on the page. Similar to the template literal you can read in the template using a DOM selection method. Similar to the template literal you have to read the content out of the template literal that is stored as a document fragment.
```javascript
 var templateElement = document.querySelector("template").content.firstElementChild;
 console.log(templateElement)
```
 
## Cloning DOM Nodes
Another way to create markup is to use the node.clone() method. This way you can select a piece of the DOM and then clone it and then reset the data that you want and insert the new cloned node back into the DOM. The method takes a signle parameter true or false. Meaning do you want to make a clone of the parent element or do you want to clone the parent and all of its children.
```javascript
  const newElementNode = firstList.cloneNode(true)

```
 


 


## Resources
-  The Template Element [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template)
- Document Fragment [MDN](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment)
- The Node Interface [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)