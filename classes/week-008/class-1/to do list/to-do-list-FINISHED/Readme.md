#  Client Side JavaScript

## To Do List 
Inside the code diagrams there are visual layouts of the task we need to complete to add a to do item to a list. A new to do item will contain the text and a trash icon to remove the to do from the list.

## Template Literal Markup
Template literals are extremly useful when markuping up data from arrays and objects. But there is one draw back to using template literals and that is they are strings. You can't add event listeners to strings. They need to be element nodes. So we will have to convert our template literal to do list item to an element node.

## Converting A Template Literal To An Element Node
Converting a template literal to an element node requires us to use a document fragment.
- let templateLiteral create the template literal markup.
- let documentFragment takes the text and tags and converts them to a document fragment.
- let elementNode = select the list item from the documentFragment.
-  now that the template literal is an element node attach an event to any piece of the markup.
 
```javascript  
   let templateLiteral = `<li data-index="1" class="item">some value</li>`;
   let documentFragment = document.createRange().createContextualFragment(templateLiteral);
   let elementNode = documentFragment.querySelector('li')    
   elementNode.addEventListener('click', onRemoveItem)   

  //add event handler function
  function onRemoveItem(e){
      console.log(e.currentTarget)
  }
```


## Template Literal To Use In The Example
Below you will find the template literal to add a to do item. Note that the data-index and data-category data attributes have been added but not set. If you want to take a crack add adding the values then the data index attribute comes from the input text you send and the category comes  from calling the getCategory() function in the  app.data.js

```javascript
       const markup = `  <li  class="item" data-index="${toDoArray.lenght-1}" data-category="${category}">
        <p> <span>${newItem}</span><span class="category">${category}</span></p>
         <img class="trash-icon" src="img/icons/trash.svg" alt="move to do to the trash can"></li>`
```
 
 

 
 
 
 
 

 