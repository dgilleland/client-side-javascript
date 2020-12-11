# CPSC1520 Handle bars

## JSON object
```json
{
        "id":357898,
        "title":"Liverpool Fit To Be Tied",
        "date": "28/11/2020",
        "author": "Mindy Grelish",
        "copy": " Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt a reiciendis repellat perferendis et labore incidunt, corrupti excepturi ullam nesciunt deserunt eius, ipsum temporibus velit laudantium suscipit cupiditate voluptas atque."
    }
```

## Add The Handlebars Libraray 
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.7.6/handlebars.min.js" integrity="sha512-zT3zHcFYbQwjHdKjCu6OMmETx8fJA9S7E6W7kBeFxultf75OPTYUJigEKX58qgyQMi1m1EgenfjMXlRZG8BXaw==" crossorigin="anonymous"></script>
```


## Create The Template For Handlebars
- Create the markup in a script tag and give it an id. 
- Each of the elements that need to display data must have a data-content attribute
- The value of the date-content attribute has to be the name of the property from the data object.
- For the example you could display the properties id, title, date, author, copy
```html
  <script id="handlebars-demo" type="text/x-handlebars-template">
      <div class="post">
        <div data-content="title">{{title}}</div>
        <div data-content="author">{{author}}</div>
        <div data-content="date">{{date}}</div>
        <div data-content="copy">{{copy}}</div>
      </div>
 </script>
```



## Adding Your Template Data To The DOM 
- load your data using the $.getJSON() method
- select the display container where you wish to add the marked up elements.  
- to the display the container use the .loadTemplate() method
- loadTemplate takes two parameters the template to build and an array of objects.

 ```javascript
$(document).ready(function () {
   
let store = [];
const template = $('#handlebars-demo').html();

 

$.getJSON( "./js/posts.json", function( posts ) {
    store = [...posts]
 
    const templateScript = Handlebars.compile(template);
 
    $.each(posts, (index, post)=>{
       const markup = templateScript(post)
       $("main").append(markup)
    })
})
});
 ```
 