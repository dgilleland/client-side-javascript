# CPSC1520 Client Side JavaScript

## Fetching Data
Fetching and displaying data is probably one of the most common tasks in front end web development. In this lesson we are going to take a look at importing and displaying JSON (javascript object notation) data using the Fetch API.

**JavaScript Object Notation JSON**  
JSON simply is a way of describing data using key value pairs. JSON files are just and array of javascript objects containing key value pairs.

**Rules When Writting JSON**  
JSON has a few simple rules that you need to follow. Lets take the example of keeping a record of students in a class. For each student we are going to have 5 data points the students first name, last name, their student identification number, email address and a thumbnail image of the student.

- A json file must start with an array declaration using square backets [].
- inside the array you create JSON objects using curly braces {}.
- Your JSON object cantains key value pairs.
- The key values are enclosed in double quotes.
- The key values can be assigned one of these data types: string, number, json object, array, boolean or null.
- The objects key value pairs are seperated by commas.
- Each object in the array should be serperated by commas
- Each object should where possible contain the same key value pairs.

```json
[
  {
    "firstName": "Emo",
    "lastName": "Tionalerpto",
    "emailAddress": "emo.tio@nait.ca",
    "studentId": 123456
  }
]
```

## Validating JSON

To make sure that you json files follow the rules use the [json validator](https://jsonlint.com/)

## Fetch API
Use the fetch api to load external json data into your client application. The Fetch api is found in all modern browsers and is an easy way to fetch resources asynchronously over a network.

**fetch() method**
```javascript
fetch("http://example.com/movies.json")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
```  
The fetch method takes a single argument a url or a local file path to a json file you wish to fetch. When loading local files the file path starts from the html document that loads your javascript file.  
- local path: fetch('./path/to/localfile.json')  
- absolute path: fetch('https://jsonplaceholder.typicode.com/todos/1')

__.then((response) => response.json())__  
Loading a file from an external resource is asynchronous event. Meaning there is some time delay as the file is transfered over the network. The fetch method returns a promise which is a HTTP response and not the actual data of the json file. You extract the data from the request using request.json() which return another promise. The request.json() promise is resolved when all of the file contents have been read and processed.

__.then((data) => console.log(data))__   
When the response.json() promise is resolved and all of the data is parse to json you can then access the data.

__.catch((error) => console.log(error))__  
If for any reason the promise is rejected you can .catch() the errors.  
 
## Promises
Promises are helpul when dealing with 

 

## Resources  
- Introduction To Fetch [Google Developers](https://developers.google.com/web/updates/2015/03/introduction-to-fetch)
- Fetch API [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- Promises [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
