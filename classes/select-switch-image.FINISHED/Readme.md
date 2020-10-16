# Client Side JavaScript

## Select Element

In this challange your going to use the value attribute of a select element option to switch the image src attribute in the icon display container. You can find the markup for the display container below. When using select elements make sure to listen to the change event.

```html
<select id="browserTypes" class="browsers-types">
  <option value="opera" data-runtime="v8" data-version="71">opera</option>
  <option value="safari" data-runtime="javascript core" data-version="14">
    safari
  </option>
  <option value="firefox" data-runtime="spider monkey" data-version="83">
    firefox
  </option>
  <option value="edge" data-runtime="v8" data-version="85">edge</option>
  <option value="explorer" data-runtime="chakra" data-version="11">
    explorer
  </option>
  <option value="chrome" data-runtime="v8" data-version="88">chrome</option>
</select>
```

When swapping out the image you will have to construct a src path I find it easier to use javascript [Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to do this.

```html
<div class="icon-container">
  <img class="browser-icon" src="img/icons/browsers/opera.svg" alt="opera" />
</div>
```

## JavaScript Select Element Properties Methods and Events.

One important task when working with a select element is to listen for the change event. The change event happens when the user selects a different option. Getting the value is provided from by the value attribute.

```javascript
selectElement.addEventListener("change", function (e) {
  // get the value of the selected item
  e.currentTarget.value;
  // get the current selected option
  const currentOption = e.currentTarget.options[e.currentTarget.selectedIndex];
});
```

## Resources

- Form Element List [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form)
- Select Element [MDN Docs ](https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement)
