# CPSC1520 JQuery


## JQuery DOM Ready Event
jQurey uses the ready method to signal that the DOM is loaded and that your javascript is safe to run. However not all the content maybe loaded at that point images etc. This is equivalent to the DOM Content  load event.
```js
   $(document).ready(function() {
        
    });
```

## JQuery Load Event
jQurey uses the winow load event when the DOM is fully loaded including all of the images and iframes. This is the same as the window load event in javascript.
```js
   $(window).on("load", function() {
        
    });
```


## Selecting DOM Elements
Selecting elements with jQuery is really simple. Use the $("css selector") syntax. It is basically where javascript got its querySelector() method.  
```js
$("p") // by element
$(".post") // by class
$("li:last-of-type") //psuedo class
```

## Filtering
Filters are similar to psudeo element selectors and give you additional ways to select DOM elements.  [jQuery Docs](https://api.jquery.com/category/traversing/filtering/). Basically they are the Array.map(), Array.find() methods
- :first  :last
- :event :odd
- :gt() :lt()  :eq()
```js
    $("p:first").css({
        backgroundColor:"tomato",
        color:"white",
        padding:" 2rem 5rem"
    })
      $("p:last").css({
        backgroundColor:"tomato",
        color:"white",
        padding:" 2rem 5rem"
    })
```

## Class Methods
In javascript we use the classList property of the element along with add(), remove() toggle() and contains() to work with classes. In jQuery there is similar functionality via the following methods. 
```js
    $("p").addClass()
    $("p").hasClass()
    $("p").removeClass()
    $("p").toggleClass()
```

## Styling With jQuery
Styling using the css() method in jQuery is equivalent to the javascript element.style property. Both create inline styles.  
```js
    $("p").css({
        backgroundColor:"tomato",
        color:"white",
        padding:" 2rem 5rem"
    })
```

## DOM Traversal
[jQuery Docs](https://api.jquery.com/category/traversing/tree-traversal/)  

There are many methods that you can use with jQuery that help you traverse the DOM  

- parent() parents() parentsUtil()
- prev() next()
- find()

## Creating Content  
[jQuery Docs](https://api.jquery.com/category/manipulation/dom-insertion-inside/)  
In jQuery we have some short hand syntax to create elements
```javascript
  const newMarkup = $("li")
     $(".display").html("<p>Something and nothing really</p>)
     $(".display").text("enter text now") 
  
```

## Inserting Elements
The jQuery methods for inserting and removing content are similar to the funcitons in javascript.
- append() 
```javascript
$("aside.display").append( $(`<div>this works</div>`))
  
    $markup = $(`<div/>`).text(" making the variable")
    $("aside ").append($markup )
```
- appendTo()
```javascript
  $(`<div>new markup using append to </div>`).appendTo($("aside.display"))
     //using jQuery variable
    $markup = $(`<div/>`).text("jack of all trades")
    $markup.appendTo($("aside.display") )
```
- prepend() 
- prependTo()

```javascript
// example 
 $(".display").append($("p")).text("new element")
```

## Removing Elements
The jQuery methods for inserting and removing content are similar to the funcitons in javascript.
- remove()
- empty()
- detach()
-unwrap()
```javascript
 $("h2").remove()
```
## Array Like
There are many functions in jQuery  
array[0]   .get(4)

## Events
Handeling Events with jQuery is very similar to how we handle events in javascript. We drop the addEventListener and replace is with the word on.
```javascript
  $(".login").on('click',(evt)=>{
      $(evt.target).css({backgroundColor: "tomato", color:"#ffffff"})
  })

  ```
 


## Forms
Just as the case is in javascript you trigger a form submit event on the actual form element and not on the input type submit element. You can prevent the default nature of the submit event by using preventDefault0() on the event object. To extract form data use the val() funciton.
```javascript
  $("form").submit(function(evt){
        evt.preventDefault()
       $("input[type=text]").val() 
    })
```

## External Data
In jQuery we have a lot of similar functionality when it comes to handeling external files. You can use the asyn function .getJSON() to retrieve local and remote json data files.
```javascript
  
    $.getJSON( "./js/posts.json", function( data ) {
        let items = [];
        $.each( data, function( index, obj ) {
         console.log(obj)
        })
    })

```

 
 