 
 
# Selecting Elements From Your HTML Page
One of the most important skills that you need to develop early is the ability to use JavaScript to select an HTML element or group of elements. JavaScript gives you five build in methods to accomplish this. Just as it is important to know how to select an element it is equally important for you to remember what type of data each of the five methods returns to your code.
 <br/>
 <br/>
 <br/>

 ## Before You Start Attach Your JavaScript File Correctly
For the purposes of this class and throughout the semester always add the script tag that attaches your JS file to the HTML page before the closing HTML Tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Page Title Here</title>
 
</head>
<body>
<!-- 
    *
    we place our script at the bottom of the page to allow the DOM (page elements) 
    to load so we can then in turn select them.
    *
-->
<script src="js/main.js"></script>
</body>
</html>
```
  <br/>
 <br/>
 <br/>

## JavaScript DOM Selection Methods
 Take time to practice selecting elements from the DOM. With practice you will see how easy it is. With a little practice you will find that one or more of the selection methods make sense to you. Many newcomers gravitate to using the querySelector method as it uses css to make the selection from the DOM. Be comfortable using all of the DOM   selector  methods because there are cases when one type of selector is more appropriate in a given coding condition.
 
+ [getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)   
+ [getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByClassName)
+ [getElementsByTagName()](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName)
+ [getElementsByName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByName)
+ [querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector)
+ [querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)

 <br/>
 <br/>
 <br/>
 
# Exercise
Using the starting file from this folder answer the following questions.

```text
1. Select all the header elements from the HTML document and log the output to the console. 
     ✔︎ What is the return type of the selector that you used
```
<br/>
<br/>

```text
2. Select the element with the id attribute of napsac using the method getElementById(). 
     ✔︎ What is the return type of the selector that you used
     ✔︎ Does it work
```
<br/>
<br/>

```text
3. Select the element with the class branding using the method getElementByClassName(). 
     ✔︎  What is the return type of the selector.
            HTMLCollection
            Element
            NodeList
     ✔︎  Does it work
```
 


## Resources
:cool: :poop: The Net Ninja [DOM](https://www.youtube.com/watch?v=FIORjGvT0kk)

:cool: :poop: Using Selectors[Medium Article](https://blog.bitsrc.io/dom-selectors-explained-70260049aaf0)
 
