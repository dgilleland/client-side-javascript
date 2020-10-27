window.addEventListener('load', function(e){
    /* 
       addToDoButton, toDoText, toDoLabel, toDoContainer
       icons input label ul
       toDoArray - store all of the todos even when the delete todos I will store and origin copy.
    */
    const addToDoButton = document.querySelector('#add-to-do-button')
    const toDoText = document.querySelector('#to-do-text')
    const toDoLabel = document.querySelector('label')
    const toDoContainer = document.querySelector('.to-do-container')
    const toDoArray = []
 
    /* 
      Add Event Listeners
      addIcon -> call the addNewToDo event handler function
      toDoText ->  call onAnimateLabel is to reset the text if there is an input error
    */    
    addToDoButton.addEventListener('click',  onAddNewToDo)
    toDoText.addEventListener('focus', onAnimateLabel)
    
    
    function onAddNewToDo(e){
        const newToDoItem = toDoText.value.trim();
       
      
        if(newToDoItem !== ''){
            toDoLabel.textContent =' Add To Do Item'
            // sending the text of the input to the addNewToDo function
            addNewToDo(newToDoItem)
        }else{
            toDoLabel.textContent = "Items Can Not Be Blank"
        }
        // reset the input field to be blank
        toDoText.value = ''
    }

    function onAnimateLabel(e){
        toDoLabel.textContent =' Add To Do Item'
        toDoLabel.classList.add('input-state') 
        e.currentTarget.removeEventListener('click', onAnimateLabel)
    
    }

 
    function addNewToDo(newItem){
        toDoArray.push(newItem)
        const category = getCategory();
        const markup = `  <li  class="item" data-index="${toDoArray.lenght-1}" data-category="${category}">
        <p> <span>${newItem}</span><span class="category">${category}</span></p>
         <img class="trash-icon" src="img/icons/trash.svg" alt="move to do to the trash can"></li>`
        toDoContainer.insertAdjacentHTML('afterbegin',markup)
    }
 
})