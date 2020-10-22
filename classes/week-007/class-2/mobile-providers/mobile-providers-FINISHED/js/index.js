window.addEventListener('load', function(e){
        // calling external data
           const cellProviders = getCellProviders() 
           const markupContainer = document.querySelector('.todo-items')
      
           // loop through the data and create markup
           let markup = ``
           for(let i=0; i <cellProviders.length; i++){
                
                   markupContainer.insertAdjacentHTML('beforebegin',  `<li class="blue">${cellProviders[i]}</li>` )
                
           }
         // add the markup 
          markupContainer.innerHTML = markup


          // adding interactivity to the markup we create
         

        // output the list of cell providers into the dom
        // template literals for the markup
        // innerHTML or adjacentHTML
        // create a style class and that to the template literal markup
})