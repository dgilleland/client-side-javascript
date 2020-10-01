#  Client Side JavaScript
This challange is a simple [site sign up](https://crackcode-signup.netlify.app/). Take a look at the completed challange on Netlify. There are three field in the form. The first field takes an email address, the second field is for the users desired password and the third field confirms the users choice of password.

### Checking The Password Fields True Block  
Log a message to the console something like  'change the page'  
__Additional Challanges__  
__Task__  
In your true block create a localStorage key value pair that contains a nine digit random number.  
__Task__  
Change the window.location and load the confirm.html page


### Checking The Password Fields False Block  
Pop up a hind between the last password field and the sign up button telling the user that there passwords don't match.  
When the user clicks back into the password fields to update the password hide the hint. You will have to add the hint and style the hint as you see fit.


### How To Change Page With JavaScript  
Using the window.location property [@MDN](https://developer.mozilla.org/en-US/docs/Web/API/Location)
```javascript
       window.location.assign('confirm.html')
```


### Creating A Random 9 Digit Number  
Using the math object [@MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
```javascript
     createRandomNumber();
     function createRandomNumber(){
         let confirmationCode =   parseInt(Math.random()*1e9) 
         return confirmationCode
     }
```

### Using JavaScript Local Storage  
Using window.localStorage [@MDN](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
```javascript
   window.localStorage.setItem('confirmationCode', '12574899')
   window.localStorage.getItem('confirmationCode')
   window.localStorage.removeItem('confirmationCode')
   window.localStorage.clear()
```

 

 