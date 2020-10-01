# Client Side JavaScript

## Challange

This challange is a gateway to building all sorts of UI features such as image galleries and marquees. There are two buttons left and right or forward and back. Your tasked to increment and decrement the display count. You can check out a [working example at netlify](https://crackcode-viewer.netlify.app/)

## The Markup
Make sure to examine the html markup before you begin. Included here is a brief description of each of the makrup blocks and there function.  
This content div element contains the viewer display and the counter element that you have to update.
```html
<div class="contents">
  <div class="viewer-display">
    <p class="counter">0</p>
  </div>
</div>
```  
The ul element contains the markup used to visual represent the counter contorls to the user.   
 - li.forward element is the control for incrementing  
 - li.back element is for decrementing the counter.
```html
<ul class="viewer-controls">
  <li class="back">
    <img src="img/icons/back.svg" alt="" />
  </li>
  <li class="forward">
    <img src="img/icons/forward.svg" alt="" />
  </li>
</ul>
```

### Task Left Arrow  
Decrement the counter each time the left arrow is clicked. Do not let the counter go below zero.

### Task Right Arrow  
Increment the counter each time the arrow is clicked. Do not let the counter go above 10.
 

 ### JavaScript Conditional Operators
 Less than operator [@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
 ```javascript
          8 <  10  // true
          12 <= 2 // false
          12 > 25 // false
          12 >= 12 // true
 ```  
 

 ## Resources
 - Less than operator [@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than)
 - Less than equal to operator [@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)  
 - Greater than operator [@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than)  
 - Greater than equal to operator [@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
