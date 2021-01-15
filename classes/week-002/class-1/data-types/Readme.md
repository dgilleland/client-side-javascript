# Data Types
Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

### JavaScript  
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
```js
let isPlaying = false; // boolean data type.
isPlaying = 'finished playing' // changed data type to string.
isPlaying = 547; // now it's a number.

``` 
### Data and Structure types
Currently JavaScript has nine data types split into three types:

#### Six Primative Data Types  
The primative data types can be checked with the typeof operator give the following code a try and check the result using copy and paste each one into the developer console and then hit enter.

```js
undefined : typeof instance === "undefined"
Boolean : typeof instance === "boolean"
Number : typeof instance === "number"
String : typeof instance === "string"
BigInt : typeof instance === "bigint"
Symbol : typeof instance === "symbol"
```
#### Object
Object isn't a quantitative data type. It is structure for data. So it can contain data and or other structural types. Objects of the type below are often called name value pairs.
```js
{
    name:"jim",
    isLoggedIn:false,
    cell:7804568854,
    completed:{
        assignmentOne:true, 
        assignmentTwo:true
    }
}
```
Most everything that can be created with the new keyword is derived from the javascript.

```js
new Array()
new Map()
new Date()
new Object()
```


#### Function
function is  not a quantitative data type. It is structureal defining an execution

```js
function(){

}
```
 
To truly check a data type in javascript use instanceof keywor.