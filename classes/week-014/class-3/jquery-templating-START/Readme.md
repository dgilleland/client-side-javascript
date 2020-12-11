# CPSC1520 JQuery Templating.

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

## Add jquery.LoadTemplate.min.js 
- Load the jquery.LoadTemplate.min.js library into your web document where you will be using the temlplate.
- Make sure that the library is added after the jquery library and before your script.
```html
<script src="js/jquery.loadTemplate.min.js"></script>
```


## Create The Template Container
- Create the markup in a script tag and give it an id. 
- Each of the elements that need to display data must have a data-content attribute
- The value of the date-content attribute has to be the name of the property from the data object.
- For the example you could display the properties id, title, date, author, copy
```html
    <script type="text/html" id="template">
      <div class="post">
        <div data-content="title"></div>
        <div data-content="author"></div>
        <div data-content="date"></div>
        <div data-content="copy"></div>
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

  $.getJSON("./js/posts.json", function (posts) {
    store = [...posts];
    $(".items").loadTemplate($("#template"), posts);
  });
});
 ```
 