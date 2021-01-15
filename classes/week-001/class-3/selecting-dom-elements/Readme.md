# Selecting DOM Content

### DOM Content Selectors
```
  document.querySelector()   
  document.querySelectorAll()
  document.getElementById()
  document.getElementsByClassName()
  document.getElementsByTagName()
  document.getElementsByName()
```

## document.getElementById()
When attempting to find a single element on the page, the method I’ve found to be the most effective is document.getElementById(). To utilize this method we will need the content you are searching for to have an id, so when creating content on your page try to set ids whenever possible. To use this method, simply include the id of the element you wish to grab as a parameter for the method. For example, to select the form in the above sample html above, use the following:  

```js
document.getElementByID('selector-form')
```

## document.getElementsByClassName()  
If you would like to select multiple elements that all share the same class, document.getElementsByClassName() is the method you’ll want to use. In the html sample above the list items and the h4 above the form all have the class ‘pretty-text’. This class can be passed to the method as seen below:  
```js
document.getElementsByClassName('pretty-text')
```

  ## document.getElementsByTagName()  
  If you want to get all elements by their tag name, you can use the method document.getElementsByTagName(). In the sample html code we have a div wrapped around the list and a div wrapped around the form. To get these two divs along with their inner html we would pass the method the tag name ‘div’:  
  ```js 
  document.getElementsByTagName('div')  
  ```  
    
## document.getElementsByName()  
This selects an element by the name attribute. The element that your trying to select must support the name attribure. You can't add a name attribute to any element. Form elements have the name attribute to construct the name value pairs sent in a form.  
```js
document.getElementsByName('user_name')
```  

## document.querySelector() & document.querySelectorAll()  
The two remaining selectors are document.querySelector() and document.querySelectorAll(). Both have the same use, however as the names suggest, .querySelector() returns only one (the first) element found and .querySelectorAll() returns all elements. These methods take in CSS selectors as parameters which allow you to utilize tag names, ids, class names or combinations of those along with other added functionality. I have displayed a few examples below, but please reference the CSS selector documentation to see all of the possibilities of these very customizable methods.

 ```js 
  //selct single div element
  document.querySelector('div');

  // select all div elements
  document.querySelectorAll('div')
  ```



