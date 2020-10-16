# Client Side JavaScript

## Select Element

This challange uses the HTML Select Element. The select element is one of the form elements that allows an end user to select a signle or muliple option from the provided list. In this challange you are going to write a script that allows the end user to select a single browser option. When the user selects the option the browser icon and name of the browser will change.

```html
<select id="browserTypes" class="browsers-types">
  <option value="opera" data-price="52.99">opera</option>
  <option value="safari" data-price="65.99">safari</option>
  <option value="firefox" data-price="12.66">firefox</option>
  <option value="edge" data-price="18.99">edge</option>
  <option value="explorer" data-price="78.99">explorer</option>
  <option value="chrome" data-price="150.33">google</option>
</select>
```

The display markup is outlined below. When the select element option changes change the image source of the image element and change the figcaption element text to contain the name of the browser selected.

```html
<figure class="icon-viewer">
  <div class="icon-container">
    <img class="browser-icon" src="img/icons/browsers/opera.svg" alt="opera" />
  </div>
  <figcaption class="browser-name">opera browser</figcaption>
</figure>
```

## JavaScript Select Element Properties Methods and Events.
One important task when working with a select element is to listen for the change event. The change event happens when the user selects a different option. Getting the value is provided from by the value attribute.
```javascript
     selectElement.addEventListener('change', function(e){
             // get the value of the selected item
             e.currentTarget.value
            // get the current selected option
            const currentOption = e.currentTarget.options[e.currentTarget.selectedIndex];
     })
```

## Resources

- Form Element List [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Select Element [MDN Docs ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
