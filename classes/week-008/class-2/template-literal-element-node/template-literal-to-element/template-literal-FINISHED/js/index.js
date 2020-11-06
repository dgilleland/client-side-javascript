window.addEventListener('load', function(e){
 
      /* 
         addToDoButton - icon
         toDoText - input
         toDoLabel - label
         toDoContainer - ul
         toDoArray - array where I will place all of the new to do items
      */
    const addToDoButton = document.querySelector('#add-to-do-button')
    const toDoText = document.querySelector('#to-do-text')
    const toDoLabel = document.querySelector('label')
    const toDoContainer = document.querySelector('.to-do-container')
    const toDoArray = []
 
//  icon get a click event onAddNewToDo
    addToDoButton.addEventListener('click',  onAddNewToDo)
    toDoText.addEventListener('focus', onAnimateLabel)
    
    
    /* 
    method onAddNewToDO
    event handler funciton for the icon
    -read in the value of the input field and trim the string.
    
    True Block
      - i have a new to do item
      - send the new to item addNewToDo()

    False Block
     - change the label field hint for the user


     after the conditional reset the input.value = ""
    */
    function onAddNewToDo(e){
        const newToDoItem = toDoText.value.trim();
       
      
        if(newToDoItem !== ''){
            toDoLabel.textContent =' Add To Do Item'
            addNewToDo(newToDoItem)
        }else{
            toDoLabel.textContent = "Items Can Not Be Blank"
        }
     
          toDoText.value = ''
    }

    function onAnimateLabel(e){
        toDoLabel.textContent =' Add To Do Item'
        toDoLabel.classList.add('input-state') 
        e.currentTarget.removeEventListener('click', onAnimateLabel)
    }

/* 
 method addNewToDo
  parameters
  -newItem is the input elements value.

  Task
  add the newItem to the array
  category variable is the random category that I want assign calling the getCategory();
  mark - template literal is a string
  ???? Does the marku need any events 
  NO add the template literal to the DOM seed any data that has to go into the markup
            ${data}   innerHTML or insertAdjacentHTML

  YES  I need events you need to convert the template literal to a an element node.
              document.createRange().createTe
*/
    function addNewToDo(newItem){
        console.log(newItem)
        toDoArray.push(newItem)
        const category = getCategory();
        const markup = ` <li  class="item" data-index="${toDoArray.length-1}" data-category="${category}">
        <p> <span>${newItem}</span><span class="category">${category}</span></p>
         <img class="trash-icon" src="img/icons/trash.svg" alt="move to do to the trash can"></li>`
     
         let documentFragment = document.createRange().createContextualFragment(markup)
     
        let todo = documentFragment.querySelector('li')
        let iconButton = todo.querySelector('img')
          iconButton.addEventListener('click', onRemoveToDo)
           toDoContainer.appendChild(todo)
      
        
    }

    function onRemoveToDo(e){
      toDoContainer.removeChild(e.currentTarget.parentNode)
    
    }
 
})