# Client Side JavaScript

## Converting Template Literals to Elements

Template literals are great when working with arrays. The let us seed data into markup dynamically. If the end goal is to insert the data into the dom tree without having to add any additional interactivity such as events then using template literals is the way to go in my opinion.

## Get Data

The common thread in many client side applications is that we will be getting our data from an external source. The data can be in various formats. Today we will take a look at an old school CSV file. CSV stands for comma seperated values.

In the app.data.js file you will find a funciton called getTeamMembers() the function is meant to mimic a call to an external server that returns to our app a CSV file. A CSV file is basically a string.

```javascript
function getTeamMembers() {
  return "Diego Llorente,Robin Koch,Marcelo Bielsa,Liam Cooper,Luke Ayling, Stuart Dallas,Pascal Struijk,Kalvin Phillips,Tyler Roberts,Mateusz Klich";
}
```

## Parse Data
Once you have the data you will often have to parse it. Parse means taking data from one format and converting it to another. I want to convert the CSV file into an array.

```javascript
window.addEventListener("load", function (e) {
  const players = getTeamMembers();
});
```
If you log players to the console you will see that it is a string so I need to parse the data into a more useable format. Since I am going to be building a list of players I will convert the string to and array. To do this we use the [string.split()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) method. This method takes an item deliminator and uses it to break up the string into values and creates an array of values.
```javascript
window.addEventListener('load', function(e){
   const players = getTeamMembers();
   const playersArray = players.split(',')
})
```

## Build The Markup
Now we can loop through the array and build the markup as template literals. Usinga Array.forEach() loop. First we build the markup as a template literal seeding the markup up with the data we want. Notice that a data attribute is added that way we have a reference to this data in the original array. Javascript allows you to create element nodes by using the [document.createElement()]( https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) method
```javascript
window.addEventListener('load', function(e){
   const players = getTeamMembers();
   const playersArray = players.split(',')
   const ul = document.querySelector('ul')
      playersArray.forEach(function (value, index) {
      let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`
    });
})
```

## Create A Document Fragement.
At this point if all you had to do was display the markup then you could add it to the DOM using [element.innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) or element.[insertAdjacentHTML()](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML). But if we need to add events to the template literal we first need to convert it to an element node. To do this we first convert the template litereal to a  [document-fragment](https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment).
```javascript
window.addEventListener('load', function(e){
   const players = getTeamMembers();
   const playersArray = players.split(',')
    const ul = document.querySelector('ul')

      playersArray.forEach(function (value, index) {
      let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`
      let documentFragment = document.createRange().createContextualFragment(templateLiteral);
    });

})
```
If you log out documentFragment to the console you will see the an angle bracket beside the word #document-fragment. Clickon the angle bracket and you will now see that your template literal markup is no an actual element node.
```html
>#document-fragment
<li data-index=​"0" class=​"item">​Diego Llorente​</li>​
```

## Extracting the Element From The Document Fragment
The document fragment contains the list item we wish to extract. To extract the markup you created with the template literal that now sits inside the document fragment simply use querySelector()
```javascript
window.addEventListener("load", function (e) {
  const players = getTeamMembers();
  const playersArray = players.split(",");
  const ul = document.createElement("ul");

  playersArray.forEach(function (value, index) {
    let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`;
    let documentFragment = document.createRange().createContextualFragment(templateLiteral);
    let markup = documentFragment.querySelector('li')
    markup.addEventListener('click', onRemoveItem)   
  });

  function onRemoveItem(e){
      console.log(e.currentTarget)
  }
});
```

## Adding the Li to the Ul
Now that you have an element node you can use node methods to add each one of the list items to the list. To add the li use the node.appendChild() method.
```javascript
window.addEventListener("load", function (e) {
   const players = getTeamMembers();
   const playersArray = players.split(",");
   const ul = document.createElement("ul");
   const container = document.querySelector('.markup-container')
  
   playersArray.forEach(function (value, index) {
     let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`;
     let documentFragment = document.createRange().createContextualFragment(templateLiteral);
     let markup = documentFragment.querySelector('li')
      ul.appendChild(markup)
  
   });
   
 });
```

## Adding Events To Your Markup
Now that the list items are now element nodes you can now use element.addEventListener() method to apply any functionality that the elements require.
```javascript
window.addEventListener("load", function (e) {
   const players = getTeamMembers();
   const playersArray = players.split(",");
   const ul = document.createElement("ul");
   const container = document.querySelector('.markup-container')
  
   playersArray.forEach(function (value, index) {
     let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`;
     let documentFragment = document.createRange().createContextualFragment(templateLiteral);
     let markup = documentFragment.querySelector('li')
      ul.appendChild(markup)
     markup.addEventListener('click', onRemoveItem)
   });
   function onRemoveItem(e){
      console.log(e.currentTarget.dataset.index)
   }
 
 });
```

## Adding The List to the DOM Tree
Now you can add the ul with the li and the attached click event into the DOM. We created a reference variable to the markup container where we intend to place the ul. Again we can use one of the Node methods [node.appendChild()](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild)
```javascript
window.addEventListener("load", function (e) {
   const players = getTeamMembers();
   const playersArray = players.split(",");
   const ul = document.createElement("ul");
   const container = document.querySelector('.markup-container')
  
   playersArray.forEach(function (value, index) {
     let templateLiteral = `<li data-index="${index}" class="item">${value}</li>`;
     let documentFragment = document.createRange().createContextualFragment(templateLiteral);
     let markup = documentFragment.querySelector('li')
      ul.appendChild(markup)
     markup.addEventListener('click', onRemoveItem)
   });
   function onRemoveItem(e){
      console.log(e.currentTarget.dataset.index)
   }
   container.append(ul)
 });
```