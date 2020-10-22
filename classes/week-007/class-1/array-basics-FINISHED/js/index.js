window.addEventListener('load', function(e){
   // learn how to define an array
   // access a value from the array
   // access an arrary value using the array name along with the index
   //  array[index]
   // template literal are strings that we can seed with JavaScript
   // We can use template literals as elements using
   // element.innerHTML
   // element.insertadjacentHTML('where', text)
//    const singleMark = `<li>Assignment Mark ${userMarks[5]}</li>`  
//   // ul.innerHTML = singleMark;
//   ul.insertAdjacentHTML('beforeend', singleMark)

// Array represents data that we have to present external
// Array of object as the data for the app
const userMarks = [7,5,10,4,4,3,4,5,8,9]
// Container where we want to display the data
const ul = document.querySelector('#test')

// loop through the array
// i variable is the index position of the array
let markup = ``
for(let i=0;  i<userMarks.length; i++){
    // create the markup from the data
     markup  +=   ` <li data-index="${i}  data-monkey="jad">Assignment ${userMarks[i]} </li>`

}

ul.insertAdjacentHTML("afterbegin", markup)
// insert the markup into the container
})