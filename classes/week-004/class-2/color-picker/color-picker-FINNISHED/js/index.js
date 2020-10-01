  /*    
   get the css attached to the element with get computed styles
   get computed styles are the styles from the dev tools elements computed styles panel.    
   const elementStyles = getComputedStyle(e.target)
  
   
   read the backgroundColor css property.
   const displayColor =  elementStyles.backgroundColor 
    
   assign the background color of the clicked element to the color display
   colorDisplay.style.backgroundColor = displayColor;
  
   */

window.addEventListener('load', function(e){
     const swatchButtons = document.querySelector('.color-options');
     const colorDisplay = document.querySelector('.color-display')
     swatchButtons.addEventListener('click', function(e){
            console.log(e.target)
             if(e.target.dataset.color !== undefined){
               //using the data attribute to get the color set in data-color for the 
               // element.
                colorDisplay.style.backgroundColor = (e.target.dataset.color)
             }else{
               console.log("not the target I want")
             }
     })
})